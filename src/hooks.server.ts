import { env } from "$env/dynamic/private";
import web_push from "web-push";
const {setVapidDetails} = web_push;
import { Pool, createPool, sql } from "@vercel/postgres";

setVapidDetails("mailto:vgrechannik@gmail.com", env.VAPID_PUBLIC_KEY, env.VAPID_PRIVATE_KEY)
export const pool = createPool({
connectionString: env.POSTGRES_URL,
});
pool.sql`CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    endpoint VARCHAR(255) NOT NULL,
    expiration_time INT,
    p256dh_key VARCHAR(255) NOT NULL,
    auth_key VARCHAR(255) NOT NULL
);`
