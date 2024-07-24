<script lang="ts">
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { onMount } from 'svelte';

	let ranking = [
		{
			name: 'สิวะภัทร์ สมานตระกูลชัย',
			score: 200
		},
		{
			name: 'INV002',
			score: 500
		},
		{
			name: 'INV003',
			score: 300
		},
		{
			name: 'INV004',
			score: 700
		},
		{
			name: 'INV005',
			score: 800
		},
		{
			name: 'INV006',
			score: 1000
		},
		{
			name: 'INV007',
			score: 100
		},
		{
			name: 'INV008',
			score: 400
		},
		{
			name: 'INV009',
			score: 600
		},
		{
			name: 'INV0010',
			score: 900
		}
	];

	onMount(() => {
		ranking.sort(function (a, b) {
			return b.score - a.score;
		});
		ranking = ranking;
	});
	let score = 0;
	// let ranking = 80;
</script>

<div class="w-full h-dvh">
	<div class="flex items-center justify-start">
		<div class="flex items-center">
			<a href="/qrScanner">
				<ArrowLeftFromLine size={32} class="text-white" />
			</a>
			<p class="text-2xl text-white">Ranking</p>
		</div>
	</div>
	<Scorebar {score} internalScore={score} />
	<div>
		<Table.Root>
			<Table.Header>
				<Table.Row class="bg-black">
					<Table.Head class="w-[100px] text-white">อันดับ</Table.Head>
					<Table.Head class="text-white">ชื่อ</Table.Head>
					<Table.Head class="text-right text-white">คะแนน</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each ranking as item, i (i)}
					{#if i == 0}
						<Table.Row class="bg-yellow-400">
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{item.name}</Table.Cell>
							<Table.Cell class="text-right">{item.score} pt</Table.Cell>
						</Table.Row>
					{:else if i == 1}
						<Table.Row class="bg-gray-400">
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{item.name}</Table.Cell>
							<Table.Cell class="text-right">{item.score} pt</Table.Cell>
						</Table.Row>
					{:else if i == 2}
						<Table.Row class="bg-red-400">
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{item.name}</Table.Cell>
							<Table.Cell class="text-right">{item.score} pt</Table.Cell>
						</Table.Row>
					{:else}
						<Table.Row class="bg-white">
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{item.name}</Table.Cell>
							<Table.Cell class="text-right">{item.score} pt</Table.Cell>
						</Table.Row>
					{/if}
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="w-full mt-5 flex justify-center">
		<a href="/menu">
			<button class="px-12 py-3 bg-white rounded-xl border border-black">Close</button>
		</a>
	</div>
</div>
