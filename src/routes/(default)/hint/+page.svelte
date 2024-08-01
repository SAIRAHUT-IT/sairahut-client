<script lang="ts">
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import HintButton from '$lib/components/HintButton.svelte';
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { session } from '$lib/stores/member.store';
	import { onMount } from 'svelte';
	let shard = [5, 10, 15, 20, 25];
	let hint = new Array(7).fill({ content: '??', isUnlocked: false });
	onMount(() => {
		// @ts-ignore
		const member_hint = $session.hint;
		// @ts-ignore
		member_hint.forEach((content: string, i: number) => {
			hint[i] = { content, isUnlocked: true };
		});
	});
</script>

<div class="flex justify-center w-full">
	<div
		id="background-img"
		class="relative flex flex-col justify-center w-[367px] min-h-[837px] px-3 mx-5"
	>
		<div>
			<div id="game-header" class="flex items-center justify-between h-12">
				<div class="flex items-center justify-center gap-2">
					<a href="/menu">
						<ArrowLeftFromLine size={32} color="#C99949" />
					</a>
					<p class="text-2xl font-bold text-start tradewin text-white">Phase 3</p>
				</div>
			</div>
			<div class="mx-5">
				<img src="/describe.svg" alt="" />
				<p class="text-white maitree text-[0.6rem] -mt-2 line-clamp-6">
					บันทึกของผู้เฒ่าเซียน ผู้เฒ่าเซียน เป็นผู้แกร่งกล้าวิชาไม่เป็นสองรองใครในยุทธภพแห่งนี้
					ท่านผู้โอบอ้อมอารีได้ฝึกฝนขัดเกลาจอมยุทธนับร้อย ให้ได้พบกับเส้นทางของตนเอง คราวนี้ล่ะ
					ถึงเวลาของเจ้าแล้ว… การพบปะกับเหล่าเซียนทั้งหลายที่ผ่านมาในอดีต
					บัดนี้ได้กลายมาเป็นกุญแจชิ้นสำคัญ เพื่อที่เจ้าจะได้ฝากตัวเป็นศิษย์น้องกับบุคคลที่ถูกต้อง
					จงตามหาศิษย์พี่ที่แท้จริงให้พบ
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
		background-image: url('/bingo/ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
