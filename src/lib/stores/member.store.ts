import { writable } from 'svelte/store';
const session = writable<Partial<Member>>({});

const updateSession = async () => {
	const member = await fetch('/api/auth/@me').then((res) => res.json());
	session.set(member);
};


export { session, updateSession };
 