import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return data;
};

export const ssr = false;
