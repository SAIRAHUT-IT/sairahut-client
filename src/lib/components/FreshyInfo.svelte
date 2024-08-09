<script lang="ts">
	import { Link2, LockKeyhole } from 'lucide-svelte';
	export let hint = { content: '??', isUnlocked: false };
	export let i = 1;
	export let url = false;
	function removeSearch(string: string): string {
		const urlMatch = string.match(/https?:\/\/[^\s/$.?#].[^\s]*/g);
		return urlMatch ? urlMatch[0] : '';
	}
</script>

<div class="max-w-72">
	{#if url}
		<a
			href={removeSearch(hint.content)}
			class="rounded-xl flex justify-center px-3 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1cb4] shadow-md border-r-2 border-l-2 border-[#C99949] max-h-72"
		>
			{removeSearch(hint.content).slice(0, 30) + '...'}
		</a>
	{:else}
		<div
			class="rounded-xl flex justify-center flex-wrap px-3 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1cb4] shadow-md border-r-2 border-l-2 border-[#C99949] max-h-72"
		>
			{hint.content || '??'}
		</div>
	{/if}
</div>
