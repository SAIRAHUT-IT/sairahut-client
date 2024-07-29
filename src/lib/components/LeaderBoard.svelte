<script lang="ts">
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	export let leaderboard;
</script>

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px] mt-10"
	>
		<div id="game-header" class="flex items-center justify-between mx-5 h-12">
			<div class="flex items-center justify-center gap-2">
				<a href="/menu">
					<ArrowLeftFromLine size={32} color="#C99949" />
				</a>
				<p class="text-2xl font-bold text-start tradewin text-white">Phase 2</p>
			</div>
		</div>
		<Scorebar />
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
					{#each leaderboard as item, i (i)}
						{#if i == 0}
							<Table.Row class="bg-[#86261C]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.nickname}</Table.Cell>
								<Table.Cell class="text-right">{item.reputation} pt</Table.Cell>
							</Table.Row>
						{:else if i == 1}
							<Table.Row class="bg-[#C48E16]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.nickname}</Table.Cell>
								<Table.Cell class="text-right">{item.reputation} pt</Table.Cell>
							</Table.Row>
						{:else if i == 2}
							<Table.Row class="bg-[#B2A068]">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.nickname}</Table.Cell>
								<Table.Cell class="text-right">{item.reputation} pt</Table.Cell>
							</Table.Row>
						{:else}
							<Table.Row class="bg-white">
								<Table.Cell class="">{i + 1}</Table.Cell>
								<Table.Cell>{item.nickname}</Table.Cell>
								<Table.Cell class="text-right">{item.reputation} pt</Table.Cell>
							</Table.Row>
						{/if}
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('ขอบกรอบ.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
