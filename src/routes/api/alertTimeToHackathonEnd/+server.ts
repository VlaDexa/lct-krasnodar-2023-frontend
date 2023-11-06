import type { QueryResultRow } from "@vercel/postgres";
import { pool } from "../../../hooks.server";
import web_push from "web-push";
const { sendNotification } = web_push;
import type { RequestHandler } from "./$types";
import type { PushSubscriptionModel } from "../../../models";
import type { Config } from '@sveltejs/adapter-vercel';
import { error } from "@sveltejs/kit";

export const config: Config = {
	split: true,
};
const HACKATHON_END = Date.UTC(2023, 10, 11, 21);
export const GET: RequestHandler = async () => {
	try {
		const allPush = await pool.sql<QueryResultRow & PushSubscriptionModel>`SELECT * FROM requests`;
		const milisLeft = HACKATHON_END - new Date().valueOf();
		const hoursLeft = Math.floor(milisLeft / 1000 / 60 / 60);
		const daysLeft = Math.floor(hoursLeft / 24);
		let errored = 0;
		for (const row of allPush.rows) {
			try {
				sendNotification({ endpoint: row.endpoint, keys: { p256dh: row.p256dh_key, auth: row.auth_key } }, `До конца ЛЦТ Краснодарский Край осталось ${daysLeft} дней, ${hoursLeft % 24} часов`)
			} catch (e) {
				errored++;
			}		}
		return new Response(`Sent ${allPush.rowCount - errored} out of ${allPush.rowCount}`);
	} catch (e) {
		throw error(500, "Error while reading subscriber database");
	}

}
