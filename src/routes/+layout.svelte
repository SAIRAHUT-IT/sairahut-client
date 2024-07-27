<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { session, updateSession } from '../lib/stores/member.store';
	import Loading from '$lib/components/Loading.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
	$: loader = true;
	const checker = () => {
		console.log($session);
		if ($page.data.isAuth && $session.id === undefined) {
			if (browser) goto('/');
		}
	};

	page.subscribe(() => {
		if (loader) checker();
	});

	onMount(async () => {
		loader = true;
		const updater = [];
		if ($page.data.isToken) updater.push(updateSession());
		Promise.allSettled(updater).finally(() => {
			loader = false;
			checker();
		});
	});
</script>

<div class="block sm:hidden overflow-x-hidden">
	<Loading loading={loader} />
	<slot />
	<Footer/>
</div>
