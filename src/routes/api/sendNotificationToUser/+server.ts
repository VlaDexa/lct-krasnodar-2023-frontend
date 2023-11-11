import { z } from 'zod';
import type { RequestHandler } from './$types';
import type { QueryResultRow } from '@vercel/postgres';
import type { PushSubscriptionModel } from '../../../models';
import { pool } from '../../../hooks.server';
import { json, text } from '@sveltejs/kit';
import web_push from 'web-push';

const Notification = z.object({
	summary: z.string(),
	content: z.string(),
	message_id: z.string(),
	ttl: z.number().min(0).optional(),
	username: z.string()
});

export type NotificationData = {
	content: string;
	summary: string;
};

export type Notifications = z.infer<typeof Notification>;

export const POST: RequestHandler = async ({ request }) => {
	if (request.headers.get('Content-Type') !== 'application/json')
		return json({ message: 'Wrong MIME type!' }, { status: 415 });
	const data = await request.json();
	const parsed = Notification.safeParse(data);
	if (!parsed.success) return json({ message: parsed.error.message }, { status: 422 });
	const notification = parsed.data;
	const allPush = await pool.sql<
		QueryResultRow & PushSubscriptionModel & { id: number }
	>`SELECT * FROM requests WHERE username = ${notification.username}`;
	const pushes: Promise<web_push.SendResult>[] = [];
	for (const row of allPush.rows) {
		pushes.push(
			web_push.sendNotification(
				{
					endpoint: row.endpoint,
					keys: {
						auth: row.auth_key,
						p256dh: row.p256dh_key
					}
				},
				JSON.stringify({ content: notification.content, summary: notification.summary }),
				{ topic: notification.message_id, TTL: notification.ttl }
			)
		);
	}
	const donePushes = await Promise.allSettled(pushes);
	let succeed = 0;
	for (const push of donePushes) succeed += push.status === 'rejected' ? 1 : 0;
	return text(`Выслал ${succeed} из ${donePushes.length}`);
};

export const OPTIONS: RequestHandler = async () => {
	return new Response(undefined, {
		status: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Max-Age': '86400'
		}
	});
};
