import type { PageLoad } from '../../(landing)/$types';

export const load: PageLoad = async () => {
	return {
		isSubmitted: true
	};
};
