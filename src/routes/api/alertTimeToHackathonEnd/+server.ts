import type { QueryResultRow } from "@vercel/postgres";
import { pool } from "../../../hooks.server";
import web_push from "web-push";
const {sendNotification} = web_push;
import type { RequestHandler } from "./$types";
import type { PushSubscriptionModel } from "../../../models";

const HACKATHON_END = Date.UTC(2023, 10, 11, 21);
export const GET: RequestHandler = async () => {
	const allPush = await pool.sql<QueryResultRow & PushSubscriptionModel>`SELECT * FROM requests`;
	const milisLeft = HACKATHON_END - new Date().valueOf();
	const hoursLeft = Math.floor(milisLeft / 1000 / 60 / 60);
	const daysLeft = Math.floor(hoursLeft / 24);
	for (const row of allPush.rows) {
		sendNotification({endpoint: row.endpoint, keys: {p256dh: row.p256dh_key, auth: row.auth_key}}, `До конца ЛЦТ Краснодарский Край осталось ${daysLeft} дней, ${hoursLeft % 24} часов`)
	}
	return new Response("Sent all");
}
