import { env } from '$env/dynamic/private';
import web_push from 'web-push';
// Because `web-push` is a CommonJS module,
// we need to do this named exporting
const { setVapidDetails, setGCMAPIKey } = web_push;
import { createPool } from '@vercel/postgres';
import { OpenAPI } from '$lib/openapi';

export const pool = createPool({
	connectionString: env.POSTGRES_URL
});

OpenAPI.BASE = "https://api.lapki.vladexa.ru:8000";
setGCMAPIKey(env.GCM_API_KEY);
setVapidDetails('mailto:vgrechannik@gmail.com', env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY);

await pool.sql`CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    endpoint VARCHAR(255) NOT NULL,
    expiration_time INT,
    p256dh_key VARCHAR(255) NOT NULL,
    auth_key VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);`;
