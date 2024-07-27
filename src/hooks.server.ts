import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { env } from '$env/dynamic/private';
const request = async (url: string, method = 'GET', token = '', headers = {}, body = null) => {
	const defaultHeaders = {
		'Content-Type': 'application/json',
		Authorization: '',
		...headers
	};

	if (token) {
		defaultHeaders['Authorization'] = `Bearer ${token}`;
	}

	const options: RequestInit = {
		method,
		headers: defaultHeaders,
		body: body ? JSON.stringify(body) : null
	};

	const response = await fetch(url, options);
	return response;
};

const handleRequest: Handle = async ({ event, resolve }) => {
	const token = event.locals?.token || event.cookies.get('token') || '';

	if (event.url.pathname.startsWith('/api')) {
		if (event.url.pathname === '/api/auth/callback') {
			const code = event.url.searchParams.get('code');
			if (code) {
				const response = await request(
					`${env.BASE_URL}/api/auth/callback?code=` + code,
					'GET',
					token
				);
				if (response.ok) {
					const data = await response.json();
					if (data.access_token) {
						const newResponse = new Response(null, {
							status: 302,
							headers: {
								Location: '/'
							}
						});

						newResponse.headers.append(
							'Set-Cookie',
							event.cookies.serialize('token', data.access_token, {
								path: '/',
								httpOnly: true,
								sameSite: 'lax',
								secure: true,
								maxAge: 60 * 60 * 24 * 7
							})
						);

						return newResponse;
					}
				}
			}
		}

		if (event.url.pathname === '/api/auth/signin' && !token) {
			const response = await request(`${env.BASE_URL}/api/auth/signin`, 'GET');
			if (response.ok) {
				const data = await response.text();
				return new Response(JSON.stringify({ success: true, data }), {
					headers: { 'Content-Type': 'application/json' }
				});
			} else {
				return new Response(JSON.stringify({ success: false, error: 'Authentication failed' }), {
					status: response.status,
					headers: { 'Content-Type': 'application/json' }
				});
			}
		} else {
			const body = event.request.method !== 'GET' ? await event.request.json() : null;
			const response = await request(
				env.BASE_URL + event.url.pathname,
				event.request.method,
				token,
				{},
				body
			);
			return response;
		}
	}
	return resolve(event);
};

const handleCookie: Handle = ({ event, resolve }) => {
	const { cookies, locals } = event;
	locals.token = cookies.get('token') || '';
	return resolve(event);
};

export const handle: Handle = sequence(handleCookie, handleRequest);
