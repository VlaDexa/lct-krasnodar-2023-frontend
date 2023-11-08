import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";

export const actions: Actions = {
	default: async () => {
		throw redirect(303, "/");
	}
}
