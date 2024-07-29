import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/auth/signin')
		.then((res) => res.json())
		.then((res) => res.data);
	return {
		url: response
	};
};
