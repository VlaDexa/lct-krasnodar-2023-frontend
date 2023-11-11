import type { QueryResultRow } from '@vercel/postgres';
import { pool } from '../../../hooks.server';
import web_push from 'web-push';
const { sendNotification } = web_push;
import type { RequestHandler } from './$types';
import type { PushSubscriptionModel } from '../../../models';
import type { Config } from '@sveltejs/adapter-vercel';
import { error } from '@sveltejs/kit';
import type { NotificationData } from '../sendNotificationToUser/+server';

export const config: Config = {
	split: true
};

const HACKATHON_END = Date.UTC(2023, 10, 11, 21);

// TODO: Auto-Delete keys from the db that cause errors because they unsubbed
export const GET: RequestHandler = async () => {
	try {
		const allPush = await pool.sql<
			QueryResultRow & PushSubscriptionModel & { id: number }
		>`SELECT * FROM requests`;
		const milisLeft = HACKATHON_END - new Date().valueOf();
		const hoursLeft = Math.floor(milisLeft / 1000 / 60 / 60);
		const daysLeft = Math.floor(hoursLeft / 24);
		const data: NotificationData = {
			content: `До конца ЛЦТ Краснодарский Край осталось ${daysLeft} дней, ${hoursLeft % 24} часов`,
			summary: "AHTUNG",
		};

		const requests = allPush.rows.map((row) =>
			sendNotification(
				{ endpoint: row.endpoint, keys: { p256dh: row.p256dh_key, auth: row.auth_key } },
				JSON.stringify(data),
				{ topic: 'hack-end-alert', TTL: 60 * 60 }
			)
		);

		const resolvedRequests = await Promise.allSettled(requests);
		let errored = 0;
		for (const resolved of resolvedRequests) {
			if (resolved.status !== 'rejected') continue;
			errored++;
		}
		return new Response(`Sent ${allPush.rowCount - errored} out of ${allPush.rowCount}`);
	} catch (e) {
		throw error(500, 'Error while reading subscriber database');
	}
};

