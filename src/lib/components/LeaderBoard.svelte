<script lang="ts">
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { ChevronLeft, RefreshCcw } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	export let leaderboard;
	let spinning = false;

	function refreshy() {
		spinning = true;
		const url = new URL(window.location.href);
		const freshy = url.searchParams.get('freshy');
		if (freshy) {
			url.searchParams.delete('freshy');
		} else {
			url.searchParams.set('freshy', 'true');
		}
		window.location.replace(url.toString());
	}
</script>

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div
		class="background-img flex flex-col justify-center w-[367px] max-w-[367px] h-full max-h-[740px]"
	>
		<div class="flex items-center justify-between mt-7 mx-5">
			<button class="flex items-center" on:click={() => (window.location.href = '/menu')}>
				<ChevronLeft size={30} class="text-[#C99949]" />
				<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Leaderboard</p>
			</button>
			<button
				class="bg-transparent hover:bg-transparent text-white hover:text-white p-3"
				class:animate-spin={spinning}
				on:click={refreshy}
			>
				<RefreshCcw size={25} />
			</button>
		</div>
		<Scorebar />
		<div class="scale-90 z-20 -mt-4">
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
		background-image: url('/border.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
