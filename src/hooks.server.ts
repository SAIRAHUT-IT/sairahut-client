import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleRequest: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		const token = event.locals?.token || event.cookies.get('token') || '';
		const response = await fetch('http://localhost:3000' + event.url.pathname, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		return response;
	}
	return resolve(event);
};

const handleCookie: Handle = ({ event, resolve }) => {
	const { cookies, locals } = event;
	locals.token = cookies.get('token') || '';
	return resolve(event);
};

export const handle: Handle = sequence(handleCookie, handleRequest);
