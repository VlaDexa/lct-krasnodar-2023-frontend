import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';
import { ApiError, UserService } from '$lib/openapi';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (!email || typeof email !== 'string') return fail(422, { email_error: 'Введите корпоративную почту' });
		if (!password || typeof password !== 'string')
			return fail(422, { email, password_error: 'Неправильный пароль' });
		try {
			const res = await UserService.loginForTokenApiV1UserTokenPost({
				username: email,
				password
			});
			cookies.set("access_token", res.access_token);
			cookies.set("refresh_token", res.access_token);
			cookies.set("email", email);
		} catch (e) {
			if (e instanceof ApiError) {
				return fail(e.status, { email, password_error: e.message, email_error: e.message })
			}
			throw e;
		}
		throw redirect(303, '/home');
	}
};
