<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { session } from '$lib/stores/member.store';
	import { PackageOpen } from 'lucide-svelte';
</script>

<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px] mt-10"
	>
		<div class="z-50">
			<div class="flex items-center mx-5 my-5 justify-start">
				<div class="flex items-center">
					<a href="/@me">
						<img src="/ลูกศรกลับหน้าhome.webp" alt="" />
					</a>
					<p class="ml-2 text-4xl mangorn">ประวัติการกรอก code</p>
				</div>
			</div>
			<div>
				<div
					class="bg-history min-h-[64px] min-w-[294px] mt-5 mx-5 rounded-2xl text-white shadow-md"
				>
					<div class="container mx-auto px-6 py-3">
						<div class="flex items-center justify-center">
							<p class="mangorn text-2xl">คุณกรอก Code ไปทั้งหมด&nbsp;&nbsp;&nbsp;</p>
							<h1 class="text-4xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">
								{$session.redeemed_codes?.length || 0}
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-5 my-5">
				<Table.Root>
					<Table.Header>
						<Table.Row class="bg-black mangorn text-2xl">
							<Table.Head class="w-[100px] text-white text-center">ID</Table.Head>
							<Table.Head class="text-white text-center">code</Table.Head>
							<!-- <Table.Head class="text-white text-center">ชื่อพี่</Table.Head> -->
						</Table.Row>
					</Table.Header>
					<Table.Body class="text-black maitree">
						{#if ($session.redeemed_codes || []).length || 0 <= 0}
							<Table.Row class="bg-white h-96">
								<Table.Cell colspan={3}>
									<div class="flex flex-col gap-1 items-center justify-center text-center">
										<PackageOpen class="opacity-50" size={32} />
										<p class="font-semibold opacity-50">ยังไม่มีข้อมูล</p>
									</div>
								</Table.Cell>
							</Table.Row>
						{:else}
							{#each $session.redeemed_codes || [] as item, index}
								{#if index == 0}
									<Table.Row class="bg-[#86261C]">
										<Table.Cell class="font-medium text-center">{index + 1}</Table.Cell>
										<Table.Cell class="text-center">{item.code}</Table.Cell>
										<!-- <Table.Cell class="text-center">{item.creator.username}</Table.Cell> -->
									</Table.Row>
								{:else if index == 1}
									<Table.Row class="bg-[#C48E16]">
										<Table.Cell class="font-medium text-center">{index + 1}</Table.Cell>
										<Table.Cell class="text-center">{item.code}</Table.Cell>
										<!-- <Table.Cell class="text-center">{item.creator.username}</Table.Cell> -->
									</Table.Row>
								{:else if index == 2}
									<Table.Row class="bg-[#B2A068]">
										<Table.Cell class="font-medium text-center">{index + 1}</Table.Cell>
										<Table.Cell class="text-center">{item.code}</Table.Cell>
										<!-- <Table.Cell class="text-center">{item.creator.username}</Table.Cell> -->
									</Table.Row>
								{:else if index <= 9}
									<Table.Row class="bg-white">
										<Table.Cell class="font-medium text-center">{index + 1}</Table.Cell>
										<Table.Cell class="text-center">{item.code}</Table.Cell>
										<!-- <Table.Cell class="text-center">{item.creator.username}</Table.Cell> -->
									</Table.Row>
								{/if}
							{/each}
						{/if}
					</Table.Body>
				</Table.Root>
			</div>
			<!-- <div class="w-full mt-5 flex justify-center">
				<a href="/menu">
					<img src="/ปุ่มปิด.webp" alt="" />
				</a>
			</div> -->
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('/border.webp');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-history {
		background-image: url('/กรอบtexthistorycode.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
