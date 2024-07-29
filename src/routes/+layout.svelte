<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { session, updateSession } from '../lib/stores/member.store';
	import Loading from '$lib/components/Loading.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';

	$: loader = true;
	const checker = () => {
		console.log($page);
		if ($page.data.isAuth && $session.id === undefined) {
			if (browser) goto('/');
		} else if ($page.url.pathname == '/' && $session.id !== undefined) {
			if (browser) goto('/menu');
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

<div class="block sm:hidden">
	<Loading loading={loader} />
	{#if !loader}
		<slot />
	{/if}
	<Footer />
</div>
