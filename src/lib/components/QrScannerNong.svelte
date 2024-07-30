<script>
	// @ts-nocheck

	import { Html5Qrcode } from 'html5-qrcode';
	import { onDestroy, onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import Scorebar from '$lib/components/Scorebar.svelte';

	let scanning = false;
	/**
	 * @type {any}
	 */
	let code;
	/**
	 * @type {Html5Qrcode}
	 */
	let html5Qrcode;
	let score = 0;
	let ranking = 80;
	let correctAns = 'FhVdFkA3I$3';

	const checker = (/** @type {string} */ codee) => {
		if (codee == correctAns) {
			return true;
		} else {
			return false;
		}
	};

	onMount(init);
	onDestroy(() => {
		stop();
	});

	function init() {
		html5Qrcode = new Html5Qrcode('reader');
		start();
	}

	function start() {
		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 1,
				qrbox: { width: 250, height: 250 },
				aspectRatio: 1
			},
			onScanSuccess,
			onScanFailure
		);
		scanning = true;
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	/**
	 * @param {any} decodedText
	 * @param {any} decodedResult
	 */
	function onScanSuccess(decodedText, decodedResult) {
		code = decodedText;
	}

	/**
	 * @param {any} error
	 */
	function onScanFailure(error) {
		console.warn(`Code scan error = ${error}`);
	}
</script>

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px] mt-10"
	>
		<img
			src="cloud.webp"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="flex items-center mx-6 my-5 justify-between z-20">
			<div class="flex items-center">
				<a href="/menu">
					<img src="ลูกศรกลับหน้าhome.webp" alt="" />
				</a>
				<p class="ml-2 text-2xl tradewin">PHASE 1</p>
			</div>
			<a href="/leaderboard"><img src="ranking.webp" alt="" /></a>
		</div>
		<div class="mb-10 z-20">
			<Scorebar bind:score />
		</div>
		<div class="flex flex-col items-center justify-center z-20">
			<div class="relative z-30">
				<img
					src="กรอบqr.webp"
					alt="qr"
					class="absolute bg-fixed -bottom-[10.5rem] left-[0.4rem] z-50 scale-110 overflow-visible pointer-events-none"
				/>
				<div
					class="flex items-center relative [margin-inline:_auto] aspect-square overflow-hidden rounded-xl w-[310px]"
				>
					<div id="reader" class="reader w-full"></div>
				</div>
				<div class="my-5 flex justify-center">
					{#if scanning}
						<button on:click={stop}
							><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
								><path
									fill="currentColor"
									d="M208 56h-27.72l-13.63-20.44A8 8 0 0 0 160 32H96a8 8 0 0 0-6.65 3.56L75.71 56H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m-44 76a36 36 0 1 1-36-36a36 36 0 0 1 36 36"
								/></svg
							></button
						>
					{:else}
						<button on:click={start}
							><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
								><path
									fill="currentColor"
									d="M232 80v112a24.5 24.5 0 0 1-.45 4.65a4 4 0 0 1-6.9 2L86 46.08a4 4 0 0 1-.37-4.91l3.74-5.61A8 8 0 0 1 96 32h64a8 8 0 0 1 6.66 3.56L180.28 56H208a24 24 0 0 1 24 24m-18.08 130.62a8 8 0 1 1-11.84 10.76l-4.89-5.38H48a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h3.73l-9.65-10.62a8 8 0 1 1 11.84-10.76ZM148 161.92l-47.88-52.68A36 36 0 0 0 148 161.92"
								/></svg
							></button
						>
					{/if}
				</div>
			</div>
		</div>
		<div class="mx-6 z-20">
			<p class="text-base tradewin">Password</p>
			<div class="my-3 flex justify-center">
				<input
					type="text"
					bind:value={code}
					class="p-2 w-full rounded-xl bg-[#8D8C8A] drop-shadow-[0_3px_11px_#C99949] tradewin pl-4"
				/>
			</div>
			<!-- <div class="my-3 flex justify-center">
				<input
					type="text"
					bind:value={code}
					class="border border-black p-2 text-center bg-code h-full min-h-[77px] w-[296px] text-2xl"
				/>
			</div> -->
			<!-- <div class="bg-[#26221E] pb-3 px-3 my-5 rounded-sm">
				<div class="flex justify-center">
					<img src="Frame29.svg" alt="" />
				</div>
				<p class="text-sm">
					อธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอธิบายวิธีเล่นเกมรอพีอามาใส่จ้าอ
				</p>
			</div> -->
			<div class="flex justify-center">
				<button
					class=" p-2 rounded-xl"
					on:click={() => {
						if (code == correctAns) {
							score += 1000;
						}
					}}
				>
					<Dialog.Root>
						<Dialog.Trigger disabled={!code} class=""
							><img src="ปุม submit.webp" alt="" /></Dialog.Trigger
						>
						{#if checker(code)}
							<Dialog.Content class="bg-green-100">
								<Dialog.Header>
									<Dialog.Title>Your code is correct</Dialog.Title>
									<Dialog.Description>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consectetur culpa
										odit, aliquid soluta, placeat esse dolore illum voluptatem maiores perferendis
										non tempora eos provident. Corrupti vero modi repellat magnam!
									</Dialog.Description>
								</Dialog.Header>
							</Dialog.Content>
						{:else}
							<Dialog.Content class="bg-red-100">
								<Dialog.Header>
									<Dialog.Title>Your code is not correct</Dialog.Title>
									<Dialog.Description>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, sint facilis!
										Eveniet pariatur quia nisi, architecto nobis laborum saepe culpa, sequi voluptas
										unde ipsa nostrum qui provident iure repellendus atque?
									</Dialog.Description>
								</Dialog.Header>
							</Dialog.Content>
						{/if}
					</Dialog.Root>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('/border.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
