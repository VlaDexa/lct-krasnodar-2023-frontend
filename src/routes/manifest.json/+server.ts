import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";

const manifest = {
	gcm_sender_id: env.GCM_API_KEY
};
const string_manifest = JSON.stringify(manifest);

export const GET: RequestHandler = () => {
	return new Response(string_manifest, {
		headers: {
			"Content-Type": "application/json"
		}
	})
};
