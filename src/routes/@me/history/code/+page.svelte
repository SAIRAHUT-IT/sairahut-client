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

<div class="sm:hidden block w-full h-screen bg-gray-200">
	<div class="flex items-center mx-5 my-5 justify-start">
		<div class="flex items-center">
			<a href="/profile">
				<ArrowLeftFromLine size={32} />
			</a>
			<p class="text-2xl">ประวัติการกรอก code</p>
		</div>
	</div>
	<div>
		<nav class="bg-gray-600 mt-5 mx-5 rounded-2xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3">
				<div class="flex items-center justify-center">
					<p>คุณกรอก Code ไปทั้งหมด&nbsp;&nbsp;&nbsp;</p>
					<h1 class="text-4xl">{data.length}</h1>
				</div>
			</div>
		</nav>
	</div>
	<div class="mx-5 my-5">
		<Table.Root>
			<Table.Header>
				<Table.Row class="bg-black">
					<Table.Head class="w-[100px] text-white text-center">เวลา</Table.Head>
					<Table.Head class="text-white text-center">code</Table.Head>
					<Table.Head class="text-white text-center">ชื่อพี่</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data as item}
					<Table.Row class="bg-white">
						<Table.Cell class="font-medium text-center">{item.time}</Table.Cell>
						<Table.Cell class="text-center">{item.code}</Table.Cell>
						<Table.Cell class="text-center">{item.name_P}</Table.Cell>
					</Table.Row>
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
