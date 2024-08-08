<script lang="ts">
	import { LockKeyhole } from 'lucide-svelte';
	export let hint = { content: '??', isUnlocked: false };
	export let i = 1;
	export let url = false;
	function removeSearchQuery(url: string) {
		const urlObj = new URL(url);
		urlObj.search = ''; // Clear the search query
		return urlObj.toString();
	}
</script>

<div>
	{#if url}
		<button
			on:click={() => window.open(removeSearchQuery(hint.content), '_blank')}
			class="rounded-xl flex justify-center flex-wrap px-3 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1cb4] pointer-events-none shadow-md border-r-2 border-l-2 border-[#C99949] max-h-72"
		>
			{hint.content.includes('http') ? removeSearchQuery(hint.content) : hint.content || '??'}
		</button>
	{:else}
		<div
			class="rounded-xl flex justify-center flex-wrap px-3 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1cb4] pointer-events-none shadow-md border-r-2 border-l-2 border-[#C99949] max-h-72"
		>
			{hint.content || '??'}
		</div>
	{/if}
</div>
