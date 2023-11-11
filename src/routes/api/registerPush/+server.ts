import { z } from 'zod';
import type { RequestHandler } from './$types';
import { fail, text } from '@sveltejs/kit';
import { pool } from '../../../hooks.server';

const request_from = z.object({
	endpoint: z.string(),
	expirationTime: z.nullable(z.number()),
	keys: z.object({
		p256dh: z.string(),
		auth: z.string()
	})
});

export type PushSubscription = z.infer<typeof request_from>;

async function insertUser(user: PushSubscription, email: string) {
	const id_rows =
		await pool.sql`INSERT INTO requests (endpoint, expiration_time, p256dh_key, auth_key, username) VALUES (${user.endpoint},${user.expirationTime},${user.keys.p256dh},${user.keys.auth},${email}) RETURNING id`;
	return id_rows.rows[0].id as number;
}

export const POST: RequestHandler = async ({ request, cookies }) => {
	const email = cookies.get('email');
	const parsed = request_from.safeParse(await request.json());
	console.log(parsed, email);
	if (!email) return text('No email provided', { status: 415 });
	if (!parsed.success) {
		throw fail(400, parsed.error.format());
	}
	const { data } = parsed;
	const id = await insertUser(data, email);
	return text(id.toString(), { status: 201 });
};

export const DELETE: RequestHandler = async ({ request }) => {
	const id = parseInt(await request.text());
	await pool.sql`DELETE FROM requests WHERE id = ${id}`;
	return new Response(undefined, { status: 200 });
};
