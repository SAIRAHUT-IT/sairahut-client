<script lang="ts">
	import { writable } from 'svelte/store';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	let ticket_count = new Array(10).fill('');

	const useticket = () => {
		ticket_count.pop();
		ticket_count = ticket_count;
	};
</script>

<!-- bass -->

<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div class="relative background-img flex justify-center w-[367px] h-full max-h-[740px] mt-10">
		<div class="z-50 mt-3">
			<div class="flex items-center mx-5 my-5 justify-start">
				<div class="flex items-center">
					<a href="/@me">
						<img src="/ลูกศรกลับหน้าhome.svg" alt="" />
					</a>
					<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Bingo Ticket</p>
				</div>
			</div>
			<div>
				<nav
					class="bg-history min-h-[64px] min-w-[294px] mt-5 mx-5 rounded-2xl text-white shadow-md"
				>
					<div class="container mx-auto px-6 py-3">
						<div class="flex items-center justify-center">
							<p class="mangorn text-3xl">คุณได้รับ&nbsp;&nbsp;&nbsp;</p>
							<h1 class="text-4xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">
								{ticket_count.length} ticket
							</h1>
						</div>
					</div>
				</nav>
			</div>
			<div class="grid grid-col-1 gap-4">
				{#each ticket_count as item, i}
					{#if i <= 4}
						<Dialog.Root>
							<Dialog.Trigger>
								<div class="bg-[#8D8C8A] mt-5 mx-5 rounded-2xl drop-shadow-[0_3px_7px_#C99949]">
									<div class="container mx-auto px-6 py-3">
										<div class="flex items-center justify-between px-2">
											<div>
												<p class="maitree">ใบที่ {i + 1}</p>
											</div>
											<div>
												<button
													class="tradewin bg-[#D9D9D9] p-1 px-3 text-black text-center rounded-md"
													>use</button
												>
											</div>
										</div>
									</div>
								</div>
							</Dialog.Trigger>
							<Dialog.Content class="bg-[#1C1A17] drop-shadow-[0_3px_11px_#C99949] text-white">
								<Dialog.Header>
									<Dialog.Title class="flex justify-start">You want to use ticket ?</Dialog.Title>
									<Dialog.Description>
										<p class="flex justify-start">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consectetur
											culpa odit, aliquid soluta, placeat esse dolore illum voluptatem maiores
											perferendis non tempora eos provident. Corrupti vero modi repellat magnam!
										</p>
									</Dialog.Description>
								</Dialog.Header>
								<div class="flex justify-between mx-14">
									<Dialog.Footer>
										<button
											class="bg-red-500 py-3 pr-10 pl-3 text-white rounded-2xl"
											on:click={() => {}}>cancle</button
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
					{/if}
				{/each}
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
		background-image: url('/กรอบtexthistorybingo.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
