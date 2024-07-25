import type { PageLoad } from "../../(landing)/$types";

export const load: PageLoad = async ({ fetch }) => {
	const qr_info = await fetch('/api/code-hunt/generate').then((res) => res.json());
	return {
		...qr_info
	};
};
