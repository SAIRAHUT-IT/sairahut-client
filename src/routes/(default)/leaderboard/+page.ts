import type { PageLoad } from '../../(landing)/$types';

export const load: PageLoad = async ({ fetch }) => {
	const leaderboard = await fetch('/api/code-hunt/leaderboard').then((res) => res.json());
	return {
		leaderboard
	};
};
