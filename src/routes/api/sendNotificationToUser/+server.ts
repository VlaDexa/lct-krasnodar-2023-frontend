import { z } from 'zod';
import type { RequestHandler } from './$types';
import type { QueryResultRow } from '@vercel/postgres';
import type { PushSubscriptionModel } from '../../../models';
import { pool } from '../../../hooks.server';
import { fail } from '@sveltejs/kit';
import web_push from "web-push";

const Notification = z.object({
	summary: z.string(),
	content: z.string(),
	message_id: z.string(),
	ttl: z.number().min(0).optional(),
	username: z.string(),
});

export type Notifications = z.infer<typeof Notification>;

export const POST: RequestHandler = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") throw fail(415, { message: "Wrong MIME type!" });
	const data = await request.json();
	const parsed = Notification.safeParse(data);
	if (!parsed.success) throw fail(422, { message: parsed.error.message });
	const notification = parsed.data;
	const allPush = await pool.sql<
		QueryResultRow & PushSubscriptionModel & { id: number }
	>`SELECT * FROM requests WHERE username = ${notification.username}`;
	const pushes: Promise<web_push.SendResult>[] = [];
	for (const row of allPush.rows) {
		pushes.push(web_push.sendNotification({
			endpoint: row.endpoint, keys: {
				auth: row.auth_key, p256dh: row.p256dh_key
			}
		}, notification.username, { topic: notification.message_id, TTL: notification.ttl }));
	}
	const donePushes = await Promise.allSettled(pushes);
	let succeed = 0;
	for (const push of donePushes) succeed += push.status === "rejected" ? 1 : 0;
	return new Response(`Выслал ${succeed} из ${donePushes.length}`);
};
