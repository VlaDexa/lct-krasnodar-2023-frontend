import type {RequestHandler} from "./$types";
import {env} from "$env/dynamic/private";

export const GET: RequestHandler = () => {
	return new Response(env.VAPID_PUBLIC_KEY)
}
