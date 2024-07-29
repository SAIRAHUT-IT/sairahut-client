<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { session, updateSession } from '../lib/stores/member.store';
	import Loading from '$lib/components/Loading.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	$: loader = true;
	const checker = () => {
		const isPhaseDay = checkPhaseDay($page.url.pathname.slice(1));
		if ($page.data.isAuth && $session.id === undefined) {
			if (browser) goto('/');
		} else if (
			($page.url.pathname == '/' && $session.id !== undefined) ||
			($page.data.isSubmitted && ($session.this_or_that?.length || 0) > 0) ||
			!isPhaseDay
		) {
			if (
				!isPhaseDay &&
				['this_that', 'qrScanner', 'bingo', 'hint', 'puzzle'].includes($page.url.pathname.slice(1))
			)
				toast.error('ยังไม่ถึงกำหนดการ');
			if (browser) goto('/menu');
		}
	};

	const checkPhaseDay = (path: string) => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		if (month !== 7) {
			return false;
		}
		switch (path) {
			case 'this_that':
				return day >= 1;
			case 'qrScanner':
				return day >= 2;
			case 'bingo':
				return day >= 5;
			case 'hint':
				return day >= 8;
			case 'puzzle':
				return day >= 14;
			default:
				return false;
		}
	};

	page.subscribe(() => {
		if (loader) checker();
	});

	onMount(async () => {
		loader = true;
		const updater = [];
		if ($page.data.isToken) updater.push(updateSession());
		Promise.all(updater).finally(() => {
			loader = false;
			checker();
		});
	});
</script>

<div class="block sm:hidden">
	<Loading loading={loader} />
	<Toaster />
	{#if !loader}
		<slot />
	{/if}
	<Footer />
</div>
