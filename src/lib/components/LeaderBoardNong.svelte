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

<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px] mt-10"
	>
		<div class="flex items-center mx-6 my-5 justify-between z-20">
			<div class="flex items-center">
				<a href="/qrScanner">
					<img src="ลูกศรกลับหน้าhome.svg" alt="" />
				</a>
				<p class="text-2xl text-white tradewin ml-2">Ranking</p>
			</div>
		</div>
		<Scorebar {score} internalScore={score} />
		<div class="scale-90 z-50">
			<Table.Root>
				<Table.Header>
					<Table.Row class="bg-black mangorn text-2xl">
						<Table.Head class="w-[100px] text-white">อันดับ</Table.Head>
						<Table.Head class="text-white">ชื่อ</Table.Head>
						<Table.Head class="text-right text-white">คะแนน</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body class="text-black maitree font-extrabold">
					{#each ranking as item, i (i)}
						{#if i == 0}
							<Table.Row class="bg-[#86261C]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell class="text-right">{item.score} pt</Table.Cell>
							</Table.Row>
						{:else if i == 1}
							<Table.Row class="bg-[#C48E16]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell class="text-right">{item.score} pt</Table.Cell>
							</Table.Row>
						{:else if i == 2}
							<Table.Row class="bg-[#B2A068]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell class="text-right">{item.score} pt</Table.Cell>
							</Table.Row>
						{:else}
							<Table.Row class="bg-white">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.name}</Table.Cell>
								<Table.Cell class="text-right">{item.score} pt</Table.Cell>
							</Table.Row>
						{/if}
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<div class="w-full flex justify-center">
			<a href="/menu">
				<img src="ปุ่มปิด.svg" alt="" />
			</a>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
