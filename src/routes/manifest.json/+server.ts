import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const manifest = {
	gcm_sender_id: env.GCM_API_KEY
};

export const GET: RequestHandler = () => {
	return json(manifest);
};
