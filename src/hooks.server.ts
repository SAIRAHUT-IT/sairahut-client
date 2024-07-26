import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleRequest: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		const token = event.locals?.token || event.cookies.get('token') || '';
		

		if (event.url.pathname === '/api/auth/callback') {
            const code = event.url.searchParams.get('code');
            if (code) {
                const response = await fetch('https://0c89-161-246-151-178.ngrok-free.app/api/auth/callback?code=' + code, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.access_token) {
							const newResponse = new Response(null, {
								status: 302,
								headers: {
									'Location': '/',
								}
							});

							newResponse.headers.append('Set-Cookie', 
								event.cookies.serialize("token", data.access_token, {
									path: "/",
									httpOnly: true,
									sameSite: "lax",
									secure: true,
									maxAge: 60 * 60 * 24 * 7,
								})
							);
			
							return newResponse;
                    }
                }
            }
        }

		if (event.url.pathname === '/api/auth/signin' && !token) {
			const response = await fetch('https://0c89-161-246-151-178.ngrok-free.app/api/auth/signin', {
			  headers: {
				'Content-Type': 'application/json',
			  }
			});
			
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
		  }
		else {
			const response = await fetch('https://0c89-161-246-151-178.ngrok-free.app' + event.url.pathname, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			});
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
