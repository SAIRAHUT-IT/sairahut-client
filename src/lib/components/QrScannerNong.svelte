<script lang="ts">
	// @ts-nocheck

	import { Html5Qrcode } from 'html5-qrcode';
	import { onDestroy, onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import Scorebar from '$lib/components/Scorebar.svelte';
	import { error } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';
	import { updateSession } from '$lib/stores/member.store';
	import { ChevronLeft, List, Medal } from 'lucide-svelte';

	let scanning = false;
	/**
	 * @type {any}
	 */
	let code;
	/**
	 * @type {Html5Qrcode}
	 */
	let html5Qrcode;
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

<div class="flex text-white flex-col items-center w-full">
	<div class="relative flex flex-col background-img justify-center space-y-6">
		<img src="cloud.webp" class="absolute bg-fixed bottom-40 z-10 scale-110" alt="cloud" />
		<div class="flex items-center justify-between">
			<button class="flex items-center" on:click={() => (window.location.href = '/menu')}>
				<ChevronLeft size={30} class="text-[#C99949]" />
				<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Scan QR</p>
			</button>
			<button
				class="border border-[#C99949] rounded-md p-1"
				on:click={() => (window.location.href = '/leaderboard')}
			>
				<List class="opacity-80" size={25} />
			</button>
		</div>
		<div class="z-20">
			<Scorebar />
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
				<button class="flex w-full items-center justify-center mt-3" on:click={submit}>
					<img src="/submit.svg" alt="" />
				</button>
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
