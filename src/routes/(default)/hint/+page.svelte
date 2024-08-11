<script lang="ts">
	import { ArrowLeftFromLine, ChevronLeft, KeyRound } from 'lucide-svelte';
	import HintButton from '$lib/components/HintButton.svelte';
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { session } from '$lib/stores/member.store';
	import { onMount } from 'svelte';
	import Border from '$lib/components/Border.svelte';
	import HintBlock from '$lib/components/HintBlock.svelte';
	import FreshyInfo from '$lib/components/FreshyInfo.svelte';
	let hint = new Array(7).fill({ content: '??', isUnlocked: false });
	let freshy = $session.paired_with || [];

	onMount(() => {
		// @ts-ignore
		const member_hint = $session.hint;
		// @ts-ignore
		if (member_hint) {
			member_hint.forEach((content: string, i: number) => {
				hint[i] = { content, isUnlocked: true };
			});
		}
	});
</script>

<img
	class="fixed w-[2000px] object-cover scale-[2] -left-[calc(50%)] -top-20 opacity-30 mt-20 -z-[1500]"
	src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
	alt="ss"
/>

<div class="flex justify-center w-full p-3 mb-5">
	<Border>
		<div class="relative flex flex-col justify-center px-3 mx-5 my-5 mb-10">
			<div>
				<button class="flex items-center" on:click={() => (window.location.href = '/menu')}>
					<ChevronLeft size={30} class="text-[#C99949]" />
					<p class="ml-2 text-3xl text-white tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Hint</p>
				</button>

				<div class="mx-5">
					<img src="/describe.svg" alt="" />
					<p class="text-white maitree text-xs mb-2">
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
				{#if $session.role == 'FRESHY'}
					<HintButton />
				{/if}
				<div class="flex flex-col items-center gap-1 mt-3 px-3 z-20">
					{#if $session.role == 'FRESHY'}
						{#each hint as hint, i}
							<HintBlock except={false} i={i + 1} {hint} />
						{/each}
					{:else}
						<div>
							{#each freshy as item, i}
								<label
									class="block text-3xl text-white underline mb-1 mt-2 ml-2 mangorn"
									for="field1"
								>
									น้องคนที่ {i + 1}
								</label>
								<div class="flex flex-col gap-3">
									<FreshyInfo
										i={i + 1}
										hint={{
											content: item.real_nickname || 'น้องยังไม่กรอกข้อมูล',
											isUnlocked: true
										}}
									/>
									<FreshyInfo
										i={i + 1}
										hint={{ content: item.student_id || 'น้องยังไม่กรอกข้อมูล', isUnlocked: true }}
									/>
									<FreshyInfo
										i={i + 1}
										url
										hint={{ content: item.contact || 'น้องยังไม่กรอกข้อมูล', isUnlocked: true }}
									/>
									<FreshyInfo
										i={i + 1}
										hint={{ content: item.branch || 'น้องยังไม่กรอกข้อมูล', isUnlocked: true }}
									/>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</Border>
</div>

<style>
	#background-img {
		background-image: url('/bingo/ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
