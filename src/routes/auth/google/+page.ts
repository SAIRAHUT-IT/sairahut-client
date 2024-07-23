import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	console.log(url.searchParams.get('code'));

	// sample mock
	const x = await fetch(`/api/auth/callback?code=${url.searchParams.get('code')}`).then((res) =>
		res.json()
	);
	console.log(x);
	return {
		message: 'eiei'
	};
};
