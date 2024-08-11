<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	import { ChevronLeft } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { session } from '$lib/stores/member.store';
	import toast from 'svelte-french-toast';

	const submit = async (id: number) => {
		try {
			const response = await fetch('/api/bingo/redeem', {
				method: 'PATCH',
				body: JSON.stringify({
					ticket_id: id
				})
			});
			const data = await response.json();
			if (!response.ok) throw data || 'error';
			toast.success(data.message || 'ปลดล็อคสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 500);
		} catch (error: any) {
			toast.error(error.message);
		}
	};
</script>

<div class="flex relative text-white flex-col items-center w-full mt-10 p-5">
	<Border>
		<div class="relative flex justify-center h-full min-h-[710px]">
			<div class="z-10 mt-3">
				<div class="flex items-center justify-between mx-5 mt-5">
					<button class="flex items-center" on:click={() => (window.location.href = '/bingo')}>
						<ChevronLeft size={30} class="text-[#C99949]" />
						<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Ticket</p>
					</button>
				</div>
				<div>
					<nav
						class="bg-history min-h-[64px] min-w-[294px] mt-5 mx-5 rounded-2xl text-white shadow-md"
					>
						<div class="container mx-auto px-6 py-3">
							<div class="flex items-center justify-center">
								<p class="mangorn text-3xl">คุณได้รับ&nbsp;&nbsp;&nbsp;</p>
								<h1 class="text-4xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">
									{$session.ticket?.length || 0} ticket
								</h1>
							</div>
						</div>
					</nav>
				</div>
				<div class="grid grid-col-1 gap-4 mx-5 mt-4 overflow-y-scroll max-h-[32rem]">
					{#each $session.ticket || [] as item, i}
						<Dialog.Root>
							<Dialog.Trigger disabled={item.is_used}>
								<div
									class="bg-[#383527] mangorn flex flex-col gap-1 items-center justify-between p-4 rounded-2xl border-r-2 border-l-2 border-[#C99949] drop-shadow-md z-10"
								>
									<p class="text-2xl">
										{item.title}
									</p>
									<button
										class={`bg-gradient-to-r text-3xl w-full from-[#C99949] to-[#C99949]/80 drop-shadow-sm rounded-lg ${item.is_used ? 'grayscale ' : ''}`}
										>{item.is_used ? 'ใช้แล้ว' : 'ใช้งาน'}</button
									>
								</div>
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title class="flex justify-start"
										>คุณต้องการจะใช้ ticket ใช่ไหม ?</Dialog.Title
									>
									<Dialog.Description class="text-start">
										<p class="text-slate-100/60">หากใช้ ticket แล้วจะไม่สามารถกู้คืนได้</p>
									</Dialog.Description>
								</Dialog.Header>
								<Dialog.Footer>
									<button
										class="bg-gradient-to-r from-[#C99949] to-[#C99949]/80 py-2 text-md text-white rounded-md"
										on:click={() => {
											submit(item.id);
										}}>ยืนยัน</button
									>
								</Dialog.Footer>
							</Dialog.Content>
						</Dialog.Root>
					{/each}
				</div>
			</div>
		</div>
	</Border>
</div>

<style>
	.background-img {
		background-image: url('/border.webp');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-history {
		background-image: url('/กรอบtexthistorybingo.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
