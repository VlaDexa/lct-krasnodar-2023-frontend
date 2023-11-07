import { fail } from '@sveltejs/kit';
import { Tag } from '../../models';
import type { Actions, PageServerLoad } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const tag = data.get('tag');
		if (typeof tag !== "string") return fail(400, { tag, incorrect: true });
		const tag_class = await Tag.createTag(tag);
		return { success: true, tag: tag_class.toPOJO() };
	}
};

export const config: Config = {
	isr: {
		expiration: 60,
		allowQuery: ['tag'],
	}
}

export const load: PageServerLoad = async () => {
	const classful = await Tag.getAllTags();
	return { tags: classful.map(tag => tag.toPOJO()) }
}
