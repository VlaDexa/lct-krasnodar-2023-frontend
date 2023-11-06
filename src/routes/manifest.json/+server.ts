import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";

const manifest = {
	gcm_sender_id: env.GCM_API_KEY
};

export const GET: RequestHandler = () => {
	return new Response(JSON.stringify(manifest), {
		headers: {
			"Content-Type": "application/json"
		}
	})
};
