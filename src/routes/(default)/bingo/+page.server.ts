import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ locals }) => {
	return {
		board: locals.user.bingo_board || []
	};
};
