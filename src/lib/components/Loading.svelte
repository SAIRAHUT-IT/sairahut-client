<script>
	import { LoaderCircleIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	export let loading;
</script>

{#if loading}
	<div
		out:fly={{ delay: 300, duration: 300 }}
		class="absolute bg-black top-0 left-0 w-full h-dvh z-[1500] flex items-center justify-center"
	>
		<LoaderCircleIcon size={50} class="text-white animate-spin" />
	</div>
{/if}
