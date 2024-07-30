<script lang="ts">
	let bingoScore = 0;
	import Bingo from '$lib/components/Bingo.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	let question = [
		{
			id: 1,
			question: 'Question 1: What is the name of your father?',
			is_checked: false,
			image: 'bingo/00.svg'
		},
		{
			id: 2,
			question: 'Question 2: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/01.svg'
		},
		{
			id: 3,
			question: 'Question 3: What is the name of your father?',
			is_checked: false,
			image: 'bingo/02.svg'
		},
		{
			id: 4,
			question: 'Question 4: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/03.svg'
		},
		{
			id: 5,
			question: 'Question 5: What is the name of your father?',
			is_checked: false,
			image: 'bingo/10.svg'
		},
		{
			id: 6,
			question: 'Question 6: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/11.svg'
		},
		{
			id: 7,
			question: 'Question 7: What is the name of your father?',
			is_checked: false,
			image: 'bingo/12.svg'
		},
		{
			id: 8,
			question: 'Question 8: What is the name of your mother?',
			is_checked: true,
			image: 'bingo/13.svg'
		},
		{
			id: 9,
			question: 'Question 9: What is the name of your father?',
			is_checked: false,
			image: 'bingo/20.svg'
		},
		{
			id: 10,
			question: 'Question 10: What is the name of your mother?',
			is_checked: true,
			image: 'bingo/21.svg'
		},
		{
			id: 11,
			question: 'Question 11: What is the name of your father?',
			is_checked: false,
			image: 'bingo/22.svg'
		},
		{
			id: 12,
			question: 'Question 12: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/23.svg'
		},
		{
			id: 13,
			question: 'Question 13: What is the name of your father?',
			is_checked: false,
			image: 'bingo/30.svg'
		},
		{
			id: 14,
			question: 'Question 14: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/31.svg'
		},
		{
			id: 15,
			question: 'Question 15: What is the name of your father?',
			is_checked: false,
			image: 'bingo/32.svg'
		},
		{
			id: 16,
			question: 'Question 16: What is the name of your mother?',
			is_checked: false,
			image: 'bingo/33.svg'
		}
	];
</script>

<div class="flex justify-center w-full">
	<div
		id="background-img"
		class="relative flex flex-col justify-center w-[367px] min-h-[837px] px-3"
	>
		<div class="space-y-5">
			<div id="game-header" class="flex items-center justify-between mx-5 h-12">
				<div class="flex items-center justify-center gap-2">
					<a href="/">
						<ArrowLeftFromLine size={32} color="#C99949" />
					</a>
					<p class="text-2xl font-bold text-start tradewin text-white">Phase 2</p>
				</div>
				<p class="text-right font-semibold text-white tradewin">Your get {bingoScore} Bingo</p>
			</div>
			<div class="flex justify-center">
				<div class="grid grid-cols-4 grid-rows-4 gap-2">
					{#each question as question}
						<Bingo {question} />
					{/each}
				</div>
			</div>
			<div id="reset-submit" class="flex justify-center">
				<Button
					class="w-full mx-5 text-base font-bold uppercase bg-transparent hover:bg-transparent"
				>
					<img src="submit.svg" alt="" />
				</Button>
			</div>
		</div>
		<div class="flex flex-col items-center mx-5 mt-10 bg-[#26221E]/70 text-white px-5 py-2">
			<!-- <h1 class="text-2xl font-bold">HOW TO PLAY</h1> -->
			<img src="describe.svg" alt="desc" class="w-32 bg-fixed" />
			<p class="text-sm font-semibold maitree line-clamp-5">
				อธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้า
			</p>
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
