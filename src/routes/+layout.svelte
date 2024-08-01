<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { session, updateSession } from '../lib/stores/member.store';
	import Loading from '$lib/components/Loading.svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { MetaTags } from 'svelte-meta-tags';
	import toast, { Toaster } from 'svelte-french-toast';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import Footer from '$lib/components/Footer.svelte';

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
		// if (loader) checker();
	});

	onMount(async () => {
		loader = true;
		const updater = [];
		if ($page.data.isToken) updater.push(updateSession());
		await Promise.all(updater);
		loader = false;
		// checker();
	});
</script>

<GoogleAnalytics />
<MetaTags
	title="Sairahut IT KMITL | สายรหัสคณะเทคโนโลยีสารสนเทศ"
	description=""
	openGraph={{
		title: 'Sairahut IT KMITL',
		description: '',
		type: 'website',
		url: 'https://sairahut.it.kmitl.ac.th',
		images: [{ url: '/metaimage.svg', alt: 'Sairahut' }]
	}}
	twitter={{
		cardType: 'summary_large_image',
		site: '@sairahutitkmitl',
		title: 'Sairahut IT KMITL',
		description: '',
		image: '/metaimage.svg'
	}}
/>

<div class="flex justify-center items-center w-full">
	<div class="w-full max-w-2xl overflow-x-hidden">
		<div class="max-w-7xl mx-auto min-h-screen">
			<Loading loading={loader} />
			<Toaster />
			{#if !loader}
				<slot />
			{/if}
		</div>
	</div>
</div>

<!-- <div class="hidden sm:block">
	<div
		class="w-full h-screen flex justify-center items-center text-white bg-gradient-to-t from-black to-[#C99949]"
	>
		<div class="p-10 ring-2 ring-white rounded-xl text-center space-y-3">
			<h1 class="text-5xl font-bold">ประกาศจากทางสำนัก</h1>
			<p class="text-2xl maitree">❌ กรุณาเข้าใช้งานผ่านมือถือเท่านั้น</p>
		</div>
	</div>
</div> -->
