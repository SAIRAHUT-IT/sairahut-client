import type { PageLoad } from '../../(landing)/$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const v_code = url.searchParams.get('v');
	const res = await fetch(`/api/guess?v=${v_code || ''}`).then((res) => res.json());

	return {
		matcher: res.type
	};
};
