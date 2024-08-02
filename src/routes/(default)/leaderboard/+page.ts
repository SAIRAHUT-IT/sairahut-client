import type { PageLoad } from '../../(landing)/$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const q = url.searchParams.get('freshy') || '';
	const leaderboard = await fetch(`/api/code-hunt/leaderboard${q ? `?freshy=${q}` : ''}`).then(
		(res) => res.json()
	);

	return {
		leaderboard
	};
};
