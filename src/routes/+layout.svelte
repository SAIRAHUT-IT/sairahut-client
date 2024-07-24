<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { updateSession } from '../stores/member.store';
	export let data;
	onMount(() => {
		if (data.isToken) updateSession();
	});
</script>

<main class="relative min-h-screen z-10 overflow-hidden">
	<slot />
</main>
