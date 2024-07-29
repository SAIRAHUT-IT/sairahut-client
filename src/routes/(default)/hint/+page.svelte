<script lang="ts">
	// import type { PageData } from './$types';
	import { ArrowLeftFromLine, ShieldHalf } from 'lucide-svelte';
	import HintButton from '$lib/components/HintButton.svelte';
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { session } from '$lib/stores/member.store';
	import { onMount } from 'svelte';
	let point = 0;
	let score = 0;
	let shard = [5, 10, 15, 20, 25];
	let hint = new Array(7).fill({ content: '??', isUnlocked: false });
	onMount(() => {
		// @ts-ignore
		const member_hint = $session.paired_member.hint.map((e: any) => e.content);
		console.log($session);
		member_hint.forEach((content: string, i: number) => {
			hint[i] = { content, isUnlocked: true };
		});
	});

	$: console.log(hint);
</script>

<div class="flex justify-center w-full">
	<div
		id="background-img"
		class="relative flex flex-col justify-center w-[367px] min-h-[837px] px-3 overflow-y-scroll mx-5"
	>
		<div>
			<div id="game-header" class="flex items-center justify-between h-12">
				<div class="flex items-center justify-center gap-2">
					<a href="/">
						<ArrowLeftFromLine size={32} color="#C99949" />
					</a>
					<p class="text-2xl font-bold text-start tradewin text-white">Phase 3</p>
				</div>
			</div>
			<div class="mx-5">
				<img src="describe.svg" alt="" />
				<p class="text-white maitree text-sm">
					อธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้า
				</p>
			</div>
			<div class="z-20">
				<Scorebar />
			</div>

			{#each hint as hint, i}
				<HintButton i={i + 1} shard={shard[i]} {hint} />
			{/each}
		</div>
	</div>
</div>

<style>
	#background-img {
		background-image: url('bingo/ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
