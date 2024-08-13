import type { PageLoad } from '../../(landing)/$types';

export const load: PageLoad = async ({ fetch }) => {
	const { image } = await fetch('/api/puzzle/image').then((res) => res.json());
	return {
		image
	};
};
