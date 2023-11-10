import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (!email || email === '') return fail(422, { email_error: 'Введите корпоративную почту' });
		if (!password || password === '')
			return fail(422, { email, password_error: 'Неправильный пароль' });
		throw redirect(303, '/home');
	}
};
