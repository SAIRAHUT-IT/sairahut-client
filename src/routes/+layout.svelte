<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { session, updateSession } from '../lib/stores/member.store';
	import Loading from '$lib/components/Loading.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';

	let loader = true;
	const checker = async () => {
		const isPhaseDay = checkPhaseDay($page.url.pathname.slice(1));
		if (
			!isPhaseDay &&
			['this_that', 'qrScanner', 'bingo', 'hint', 'puzzle'].includes($page.url.pathname.slice(1))
		) {
			toast.error('ยังไม่ถึงกำหนดการ');
			if (browser) await goto('/menu');
		}
		if (($session.this_or_that?.length || 0) > 0 && $page.url.pathname == '/this_that') {
			toast.error('ไม่สามารถกรอกคำถามซ้ำได้');
			if (browser) await goto('/menu');
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
				return true;
		}
	};

	page.subscribe(() => {
		if (loader) checker();
	});

	onMount(async () => {
		loader = true;
		const updater = [];
		if ($page.data.isToken) updater.push(updateSession());
		await Promise.all(updater);
		loader = false;
		checker();
	});
</script>

<div class="block sm:hidden overflow-x-hidden">
	<Loading loading={loader} />
	<Toaster />
	{#if !loader}
		<slot />
	{/if}
</div>

<!-- <div class="hidden sm:block">
	<div class="w-full h-dvhv flex justify-center items-center">
		<div class="w-2/3 h-1/3 bg-slate-100">
			<div class="w-full h-1/6 bg-slate-200 flex justify-center items-center">
				<h1 class="text-3xl font-bold text-white">กรุณาเข้าใช้งานผ่านมือถือ</h1>
			</div>
			<div class="w-full h-5/6 bg-slate-100 flex justify-center items-center">
				<img src="/images/phone.png" alt="phone" class="w-1/2" />
			</div>
		</div>
	</div>
</div> -->
