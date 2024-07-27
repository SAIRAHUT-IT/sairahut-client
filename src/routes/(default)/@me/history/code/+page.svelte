<script lang="ts">
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	let data = [
		{
			time: '02/08/67',
			code: 'INV001',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV002',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV003',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV004',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV005',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV006',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV007',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV008',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV009',
			name_P: 'วิน'
		},
		{
			time: '02/08/67',
			code: 'INV0010',
			name_P: 'วิน'
		}
	];
</script>

<!-- bass -->

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px]"
	>
		<div class="z-50">
			<div class="flex items-center mx-5 my-5 justify-start">
				<div class="flex items-center">
					<a href="/@me">
						<img src="/ลูกศรกลับหน้าhome.svg" alt="" />
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
							<h1 class="text-4xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">{data.length}</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="mx-5 my-5">
				<Table.Root>
					<Table.Header>
						<Table.Row class="bg-black mangorn text-2xl">
							<Table.Head class="w-[100px] text-white text-center">เวลา</Table.Head>
							<Table.Head class="text-white text-center">code</Table.Head>
							<Table.Head class="text-white text-center">ชื่อพี่</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body class="text-black maitree">
						{#each data as item, index}
							{#if index == 0}
								<Table.Row class="bg-[#86261C]">
									<Table.Cell class="font-medium text-center">{item.time}</Table.Cell>
									<Table.Cell class="text-center">{item.code}</Table.Cell>
									<Table.Cell class="text-center">{item.name_P}</Table.Cell>
								</Table.Row>
							{:else if index == 1}
								<Table.Row class="bg-[#C48E16]">
									<Table.Cell class="font-medium text-center">{item.time}</Table.Cell>
									<Table.Cell class="text-center">{item.code}</Table.Cell>
									<Table.Cell class="text-center">{item.name_P}</Table.Cell>
								</Table.Row>
							{:else if index == 2}
								<Table.Row class="bg-[#B2A068]">
									<Table.Cell class="font-medium text-center">{item.time}</Table.Cell>
									<Table.Cell class="text-center">{item.code}</Table.Cell>
									<Table.Cell class="text-center">{item.name_P}</Table.Cell>
								</Table.Row>
							{:else if index <= 9}
								<Table.Row class="bg-white">
									<Table.Cell class="font-medium text-center">{item.time}</Table.Cell>
									<Table.Cell class="text-center">{item.code}</Table.Cell>
									<Table.Cell class="text-center">{item.name_P}</Table.Cell>
								</Table.Row>
							{/if}
						{/each}
					</Table.Body>
				</Table.Root>
			</div>
			<div class="w-full mt-5 flex justify-center">
				<a href="/menu">
					<img src="/ปุ่มปิด.svg" alt="" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('/ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-history {
		background-image: url('/กรอบtexthistorycode.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>