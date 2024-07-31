<script lang="ts">
	// @ts-nocheck

	import { Html5Qrcode } from 'html5-qrcode';
	import { onDestroy, onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { error } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';
	import { updateSession } from '$lib/stores/member.store';

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
		// console.warn(`Code scan error = ${error}`);
	}

	const submit = async () => {
		const id = toast.loading('กำลังยืนยันโค้ด...');
		if (!code) return toast.error('ไม่พบโค้ด', { id });
		try {
			const response = await fetch('/api/code-hunt/redeem', {
				method: 'POST',
				body: JSON.stringify({
					code: code
				})
			});
			const data = await response.json();
			if (!response.ok) throw data.message || 'error';
			toast.success(`กรอกโค้ดสำเร็จ!`, { id });
			updateSession();
			window.location.reload();
		} catch (error) {
			toast.error(error, { id });
		}
	};
</script>

<div class="flex relative text-white flex-col items-center w-full">
	<div class="relative flex flex-col background-img justify-center space-y-6">
		<img
			src="cloud.webp"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="flex items-center my-5 justify-between z-20">
			<div class="flex items-center">
				<a href="/menu">
					<img src="/ลูกศรกลับหน้าhome.webp" alt="" />
				</a>
				<p class="ml-2 text-2xl tradewin">Scan QR</p>
			</div>
			<a href="/leaderboard"><img src="/ranking.webp" alt="" /></a>
		</div>
		<div class="z-20">
			<Scorebar bind:score />
		</div>
		<div class="flex flex-col items-center justify-center">
			<div class="relative z-30">
				<img
					src="กรอบqr.webp"
					alt="qr"
					class="absolute bg-fixed -bottom-[15rem] left-[0.4rem] z-50 scale-110 overflow-visible pointer-events-none"
				/>
				<div
					class="flex items-center relative [margin-inline:_auto] aspect-square overflow-hidden rounded-xl w-[310px]"
				>
					<div id="reader" class="reader w-full"></div>
				</div>
				<!-- <div class="my-5 flex justify-center">
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
				</div> -->
			</div>
			<div class="flex flex-col items-center justify-center z-40 w-[300px] mt-10 ga">
				<div class="mangorn text-4xl p-2 text-center bg-code h-full w-full rounded-md">
					<input
						type="text"
						placeholder="code here"
						bind:value={code}
						class="p-2 w-full rounded-xl bg-transparent tradewin ring-0 outline-none text-center"
					/>
				</div>
				<div class="bg-[#26221E] p-3 mt-2 rounded-sm">
					<div class="flex justify-center">
						<img src="/Frame29.webp" alt="" />
					</div>
					<p class="text-xs maitree">
						จงออกตามหาศิษย์พี่มากหน้าหลายตาที่กระจัดกระจายกันอยู่ทั่วยุทธภพนี้
						โดยเหล่าศิษย์พี่นั้นจะมีตำราวิชาลับ (QR code) ของแต่ละคนเก็บซ่อนอยู่
						จงตามหาเหล่าศิษย์พี่เพื่อรับตำราลับ แล้วพัฒนาวรยุทธของพวกเจ้าซะ!
					</p>
				</div>
				<button class="flex w-full items-center justify-center mt-3" on:click={submit}>
					<img src="/submit.svg" alt="" />
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-code {
		background-image: url('/กรอบtext.png');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
