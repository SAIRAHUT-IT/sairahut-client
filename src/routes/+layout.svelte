<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { updateSession } from '../stores/member.store';
	export let data;
	onMount(() => {
		if (data.isToken) updateSession();
	});
</script>

<header>
	<Navbar />
</header>
<main class="relative min-h-dvh z-10 overflow-x-hidden">
	<slot />
</main>
