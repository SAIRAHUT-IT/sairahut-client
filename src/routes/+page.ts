import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/sophomore').then((res) => res.json());
	return {
		message: 'eiei',
		response
	};
};
