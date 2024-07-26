import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleRequest: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		const token = event.locals?.token || event.cookies.get('token') || '';
		const response = await fetch(
            'https://31a2-2405-9800-bca0-3bf1-38fd-e9d9-d959-2c27.ngrok-free.app' + event.url.pathname,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTU0LCJ1c2VybmFtZSI6IjY2MDcwMDE5Iiwicm9sZSI6IkZSRVNIWSJ9.R94D3RhcaKGVPYPokndlIvG9ySnB5j8L74d0mu--h4g`
                }
            }
        );
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
