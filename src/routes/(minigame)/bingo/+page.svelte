<script lang="ts">
	let bingoScore = 0;
	import Bingo from '$lib/components/Bingo.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	let question = [
		{
			id: 1,
			question: 'Question 1: What is the name of your father?',
			is_checked: false
		},
		{
			id: 2,
			question: 'Question 2: What is the name of your mother?',
			is_checked: false
		},
		{
			id: 3,
			question: 'Question 3: What is the name of your father?',
			is_checked: false
		},
		{
			id: 4,
			question: 'Question 4: What is the name of your mother?',
			is_checked: false
		},
		{
			id: 5,
			question: 'Question 5: What is the name of your father?',
			is_checked: false
		},
		{
			id: 6,
			question: 'Question 6: What is the name of your mother?',
			is_checked: false
		},
		{
			id: 7,
			question: 'Question 7: What is the name of your father?',
			is_checked: false
		},
		{
			id: 8,
			question: 'Question 8: What is the name of your mother?',
			is_checked: true
		},
		{
			id: 9,
			question: 'Question 9: What is the name of your father?',
			is_checked: false
		},
		{
			id: 10,
			question: 'Question 10: What is the name of your mother?',
			is_checked: true
		},
		{
			id: 11,
			question: 'Question 11: What is the name of your father?',
			is_checked: false
		},
		{
			id: 12,
			question: 'Question 12: What is the name of your mother?',
			is_checked: false
		},
		{
			id: 13,
			question: 'Question 13: What is the name of your father?',
			is_checked: false
		},
		{
			id: 14,
			question: 'Question 14: What is the name of your mother?',
			is_checked: false
		},
		{
			id: 15,
			question: 'Question 15: What is the name of your father?',
			is_checked: false
		},
		{
			id: 16,
			question: 'Question 16: What is the name of your mother?',
			is_checked: false
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
				<p class="text-2xl font-bold text-start">Phase 2: Topic</p>
			</div>
			<p class="text-right font-semibold"><span class="text-red-500">{bingoScore}</span> BINGO</p>
		</div>
		<div class="">
			<div class="grid grid-cols-4 grid-rows-4 mx-5 gap-4">
				{#each question as question, i}
					<Bingo {question} />
				{/each}
			</div>
		</div>
		<div id="reset-submit" class="flex justify-center">
			<Button class="w-full mx-5 text-base font-bold uppercase">Submit</Button>
		</div>
	</div>
	<div
		class="flex flex-col items-center mx-5 mt-10 bg-gray-600 text-white text-s rounded-[20px] p-5"
	>
		<h1 class="text-2xl font-bold">HOW TO PLAY</h1>
		<p class="text-lg font-semibold">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam a dolorem quas officiis aperiam
			iure, ab accusamus, vero molestias odit vitae adipisci sint. Laborum in rerum doloremque
			aliquam sequi ducimus?
		</p>
	</div>
</div>
