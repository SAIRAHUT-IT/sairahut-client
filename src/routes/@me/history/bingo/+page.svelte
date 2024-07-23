<script lang="ts">
	import { writable } from 'svelte/store';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	let ticket_count = new Array(5).fill('');

	const useticket = () => {
		ticket_count.pop();
		ticket_count = ticket_count;
	};
</script>

<!-- bass -->

<div class="sm:hidden block w-full h-screen bg-gray-200">
	<div class="flex items-center mx-5 my-5 justify-start">
		<div class="flex items-center">
			<a href="/profile">
				<ArrowLeftFromLine size={32} />
			</a>
			<p class="text-2xl">Bingo Ticket</p>
		</div>
	</div>
	<div>
		<nav class="bg-gray-600 mt-5 mx-5 rounded-2xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3">
				<div class="flex items-center justify-center">
					<p>คุณได้รับ&nbsp;&nbsp;&nbsp;</p>
					<h1 class="text-4xl">{ticket_count.length}</h1>
					<p>&nbsp;&nbsp;&nbsp;ticket</p>
				</div>
			</div>
		</nav>
	</div>
	<div class="grid grid-col-1">
		{#each ticket_count as item, i}
			<Dialog.Root>
				<Dialog.Trigger>
					<nav class="bg-white mt-5 mx-5 rounded-2xl shadow-md border border-black">
						<div class="container mx-auto px-6 py-3">
							<div class="flex items-center justify-between px-2">
								<div>
									<p>ใบที่ {i + 1}</p>
								</div>
								<div>
									<p>ใช้</p>
								</div>
							</div>
						</div>
					</nav>
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title class="flex justify-start">You want to use ticket ?</Dialog.Title>
						<Dialog.Description>
							<p class="flex justify-start">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consectetur culpa
								odit, aliquid soluta, placeat esse dolore illum voluptatem maiores perferendis non
								tempora eos provident. Corrupti vero modi repellat magnam!
							</p>
						</Dialog.Description>
					</Dialog.Header>
					<div class="flex justify-between mx-14">
						<Dialog.Footer>
							<button class="bg-red-500 py-3 pr-10 pl-3 text-white rounded-2xl" on:click={() => {}}
								>cancle</button
							>
						</Dialog.Footer>
						<Dialog.Footer>
							<button
								class="bg-green-500 py-3 pr-10 pl-3 text-white rounded-2xl"
								on:click={() => {
									useticket();
								}}>confirm</button
							>
						</Dialog.Footer>
					</div>
				</Dialog.Content>
			</Dialog.Root>
		{/each}
	</div>
	<div class="w-full mt-5 flex justify-center">
		<a href="/menu">
			<button class="px-12 py-3 bg-white rounded-xl border border-black">Close</button>
		</a>
	</div>
</div>
