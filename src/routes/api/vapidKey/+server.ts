import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { text } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return text(env.VAPID_PUBLIC_KEY);
};
