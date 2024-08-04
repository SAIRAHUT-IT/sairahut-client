<script lang="ts">
	import { onDestroy } from 'svelte';
	import Bingo from '$lib/components/Bingo.svelte';
	import Border from '$lib/components/Border.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Button } from '$lib/components/ui/button';
	import { ChevronLeft, Ticket } from 'lucide-svelte';
	import SubmitBingo from '$lib/components/SubmitBingo.svelte';
	import Progress from '$lib/components/ui/progress/progress.svelte';

	const block_image = [
		'bingo/00.svg',
		'bingo/01.svg',
		'bingo/02.svg',
		'bingo/03.svg',
		'bingo/10.svg',
		'bingo/11.svg',
		'bingo/12.svg',
		'bingo/13.svg',
		'bingo/20.svg',
		'bingo/21.svg',
		'bingo/22.svg',
		'bingo/23.svg',
		'bingo/30.svg',
		'bingo/31.svg',
		'bingo/32.svg',
		'bingo/33.svg'
	];

	const split_chunk = (val: any) => {
		const chunkSize = 4;
		const bingoPayload = [];

		for (let i = 0; i < val.length; i += chunkSize) {
			const chunk = val.slice(i, i + chunkSize);
			bingoPayload.push(chunk);
		}
		return bingoPayload;
	};

	export let data;

	const estimateScore = (payload: any) => {
		let score = 0;

		payload.forEach((row: any) => {
			if (row.every((cell: any) => cell.is_checked)) {
				score++;
			}
		});

		for (let col = 0; col < 4; col++) {
			let columnBingo = true;
			for (let row = 0; row < 4; row++) {
				if (!payload[row][col].is_checked) {
					columnBingo = false;
					break;
				}
			}
			if (columnBingo) {
				score++;
			}
		}

		let mainDiagonalBingo = true;
		for (let i = 0; i < 4; i++) {
			if (!payload[i][i].is_checked) {
				mainDiagonalBingo = false;
				break;
			}
		}
		if (mainDiagonalBingo) {
			score++;
		}

		let antiDiagonalBingo = true;
		for (let i = 0; i < 4; i++) {
			if (!payload[i][3 - i].is_checked) {
				antiDiagonalBingo = false;
				break;
			}
		}
		if (antiDiagonalBingo) {
			score++;
		}
		return score;
	};
	$: question = split_chunk(data.board) || [];
	$: score = estimateScore(question);
</script>

<div class="flex justify-center w-full">
	<div class="p-6 mt-10">
		<Border>
			<div class="relative flex flex-col justify-center text-white">
				<div class="space-y-5">
					<div class="flex items-center justify-between mx-5 mt-5">
						<button class="flex items-center" on:click={() => (window.location.href = '/menu')}>
							<ChevronLeft size={30} class="text-[#C99949]" />
							<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Bingo</p>
						</button>
						<button
							class="border border-[#C99949] rounded-md p-1"
							on:click={() => (window.location.href = '/@me/history/bingo')}
						>
							<Ticket size={25} class="-rotate-12" />
						</button>
					</div>
					<div class="mx-5">
						<div class="flex gap-2 maitree">
							<p class="text-sm">ความคืบหน้า</p>
							<p class="text-sm text-white">(<span class="text-[#C99949]">{score}</span> / 10)</p>
						</div>
						<Progress value={score * 10} />
					</div>
					<div class="flex justify-center">
						<div class="grid grid-cols-4 grid-rows-4 gap-2">
							{#each question as row, i}
								{#each row as question, j}
									<Bingo
										{question}
										row={i}
										col={j}
										index={i * 4 + j}
										image={block_image[i * 4 + j]}
									/>
								{/each}
							{/each}
						</div>
					</div>
					<div id="reset-submit" class="flex justify-center">
						<SubmitBingo />
					</div>
				</div>
				<div class="flex flex-col items-center mx-5 mt-4 bg-[#26221E]/70 text-white px-5 py-2 mb-5">
					<div class="flex justify-center">
						<img src="/Frame29.webp" alt="" />
					</div>
					<p class="text-xs font-semibold maitree line-clamp-5">
						เจ้าจะสังเกตได้ว่าเมื่อพลิกแผ่นกระดานขึ้นมาจะมีคำถาม จงทดคำตอบของเจ้าไว้ในใจ
						แล้วออกตามหาศิษย์พี่ที่มีสิ่ง ๆ นั้นเหมือนกันกับเจ้า
						เมื่อพบแล้วก็จงทำเครื่องหมายบนกระดานเพื่อ bingo! ยุทธภพนั้นกว้างใหญ่ไพศาล
						แต่ศิษย์พี่ที่จริงใจนั้นจะมีเพียงคนเดียว!!
					</p>
				</div>
			</div>
		</Border>
	</div>
</div>

<style>
	#background-img {
		background-image: url('/bingo/ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
