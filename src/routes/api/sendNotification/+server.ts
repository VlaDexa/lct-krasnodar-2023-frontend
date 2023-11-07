import web_push, { type PushSubscription } from "web-push";
const { sendNotification } = web_push;
import type { RequestHandler } from "./$types";
import { z } from "zod";
import { error, fail } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const pdata = z.object({
		subscription: z.object({}).passthrough(),
		// payload: z.nullable(z.string()),
		ttl: z.number(),
	})
	const parsed = pdata.safeParse(body);
	if (!parsed.success) {
		throw fail(400, parsed.error.format());
	}
	const { subscription, ttl } = parsed.data;
	console.log(subscription);
	try {
		await sendNotification(subscription as unknown as PushSubscription, null, { TTL: ttl });
		return new Response("OK", { status: 201 });
	} catch (e) {
		throw error(500, "Couldn't send a notification");
	}
}
