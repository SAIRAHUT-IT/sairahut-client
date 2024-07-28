import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/auth/signin').then((res) => res.text());
	return {
		url: response
	};
};
