<script lang="ts">
	// import type { PageData } from './$types';
	import { ArrowLeftFromLine, ShieldHalf } from 'lucide-svelte';
	import HintButton from '$lib/components/HintButton.svelte';
	let point = 0;
	// export let data: PageData;
	let hint = [
		{
			question: 'Hint 1: What is the name of your father?'
		}
	];
</script>

<div class="h-dvh mt-4 overflow-y-scroll">
	<div class="space-y-5">
		<div id="game-header" class="flex items-center justify-between mx-5 h-12">
			<div class="flex items-center justify-center gap-2">
				<a href="/">
					<ArrowLeftFromLine size={32} />
				</a>
				<p class="text-2xl font-bold text-start">Phase 3: Topic</p>
			</div>
		</div>
		<div id="description" class="border shadow rounded-2xl mx-5 px-4 py-2 text-lg">Description</div>
		<div
			id="score"
			class="flex justify-center items-center bg-gray-600 rounded-2xl px-4 py-3 mx-5 text-white text-xl font-bold"
		>
			<span class="pr-2">Your point :</span>
			<p class="text-4xl">{point} pt</p>
		</div>
        <HintButton isUnlocked={false}/>
    </div>
</div>
