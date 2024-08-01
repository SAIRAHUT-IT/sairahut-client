import { redirect, type Handle } from '@sveltejs/kit';
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

const fetchUser = async (token: string) => {
	if (!token) return null;

	const response = await request(`${env.BASE_URL}/api/auth/@me`, 'GET', token);
	if (response.ok) {
		const contentType = response.headers.get('Content-Type');
		if (contentType && contentType.includes('application/json')) {
			const user = await response.json();
			return user;
		} else {
			console.error('Expected JSON response but got:', contentType);
			return null;
		}
	}
	return null;
};

const handleRequest: Handle = async ({ event, resolve }) => {
	const token = event.locals?.token || event.cookies.get('token') || '';

	const user = await fetchUser(token);
	event.locals.user = user;

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

		if (event.url.pathname === '/api/auth/signout') {
			const response = new Response(null, {
				status: 302,
				headers: {
					Location: '/'
				}
			});

			response.headers.append(
				'Set-Cookie',
				event.cookies.serialize('token', '', {
					path: '/',
					expires: new Date(0)
				})
			);

			return response;
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

	if (
		((event.route.id || '').includes('(default)') || (event.route.id || '').includes('(except)')) &&
		!event.url.pathname.startsWith('/api')
	) {
		if (!event.locals.user) {
			throw redirect(303, '/');
		}

		if (
			event.locals.user.status == 'FORM' &&
			event.url.pathname !== '/this_that' &&
			event.locals.user.role !== MemberRole.SENIOR
		) {
			throw redirect(303, '/this_that');
		}

		if (event.url.pathname === '/this_that' && event.locals.user.status !== 'FORM') {
			throw redirect(303, '/menu');
		}
		const isPhaseDay = checkPhaseDay(event.url.pathname.slice(1));
		if (
			!isPhaseDay &&
			['this_that', 'qrScanner', 'bingo', 'hint', 'puzzle'].includes(event.url.pathname.slice(1))
		) {
			throw redirect(303, '/menu');
		}
	} else if (event.url.pathname === '/' && event.locals.user) {
		redirect(303, '/menu');
	}

	return resolve(event);
};

const checkPhaseDay = (path: string) => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	if (month !== 7) {
		return false;
	}
	switch (path) {
		case 'this_that':
			return true;
		case 'qrScanner':
			return day >= 2;
		case 'bingo':
			return day >= 5;
		case 'hint':
			return day >= 8;
		case 'puzzle':
			return day >= 14;
		default:
			return true;
	}
};

const handleCookie: Handle = ({ event, resolve }) => {
	const { cookies, locals } = event;
	locals.token = cookies.get('token') || '';
	return resolve(event);
};

export const handle: Handle = sequence(handleCookie, handleRequest);
