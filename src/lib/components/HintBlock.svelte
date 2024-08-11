<script lang="ts">
	import { LockKeyhole } from 'lucide-svelte';
	export let hint = { content: '??', isUnlocked: false };
	export let i = 1;
	export let except = false;
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	let shuffled = shuffleArray(['FIRE', 'EARTH', 'PLANT', 'WATER', 'LIGHTING', 'AIR']);
	shuffled.length = 3;
</script>

<div class="w-full">
	{#if !except}
		<label class="block text-3xl text-white underline mb-1 mt-2 ml-2 mangorn" for="field1"
			>คำใบ้ที่ {i}</label
		>
	{/if}
	{#if hint.isUnlocked}
		<div
			class="rounded-xl maitree text-lg px-5 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1c96] pointer-events-none shadow-md border-r-2 border-l-2 border-[#C99949] drop-shadow-[0_1px_4px_#C99949]"
		>
			{hint.content || '??'}
		</div>
	{:else}
		<div
			class="rounded-xl flex justify-center flex-wrap px-3 py-3 w-full text-slate-50 bg-gradient-to-tr from-[#1D1A17] to-[#302c1cb4] pointer-events-none shadow-md border-r-2 border-l-2 border-[#C99949]"
		>
			{#each shuffled as item, i}
				{#if i === 1}
					<div
						class="rounded-full maitree bg-gradient-to-tr from-[#433b34] to-[#504a2f24] border ring-2 ring-offset-2 ring-[#C99949] basis-[25%] aspect-square m-2 grid place-items-center"
					>
						<LockKeyhole class="opacity-70" size={30} />
					</div>
				{:else}
					<div
						class="flex items-center justify-center rounded-full bg-gradient-to-tr from-[#433b34] to-[#504a2f24] border ring-2 ring-offset-2 ring-[#C99949] basis-[25%] aspect-square m-2"
					>
						<img class="w-[10em]" src={`/elemental/${item}.svg`} alt="lol" />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>
