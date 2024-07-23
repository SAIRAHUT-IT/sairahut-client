<script>
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ArrowLeftFromLine } from 'lucide-svelte';

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

<<<<<<< feat/qrscanner:src/routes/qrScanner/+page.svelte
<div class="sm:hidden block w-full h-screen bg-gray-200">
	<div class="flex items-center mx-5 my-5 justify-between">
		<div class="flex items-center">
			<a href="/">
				<ArrowLeftFromLine size={32} />
			</a>
			<p class="text-2xl">Phase 1 : Topic</p>
		</div>
		<a href="/">img stat</a>
	</div>
	<div class="my-5">
		<nav class="bg-gray-600 mt-5 mx-5 rounded-3xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3 flex">
				<div class="w-1/4 flex items-center justify-end">
					<h1 class="text-4xl">{ranking}</h1>
				</div>
				<div class="w-3/4 flex justify-center">
					<div>
						<div>คืออันดับของคุณ</div>
						<div>
							your point : {score} pt
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>

	<div class="flex flex-col items-center justify-center">
		<div
			class="flex items-center relative [margin-inline:_auto] w-2/3 aspect-square overflow-hidden border border-black rounded-xl"
		>
			<div id="reader" class="reader w-full"></div>
		</div>
		<div>
			{#if scanning}
				<button on:click={stop}>stop</button>
			{:else}
				<button on:click={start}>start</button>
			{/if}
		</div>
	</div>
	<div class="mx-5 my-5">
		<div class="my-5">
			<p class="text-base">Code</p>
		</div>
		<div class="my-5">
			<input
				type="text"
				bind:value={code}
				class="bg-white border border-black p-2 rounded-xl w-full"
			/>
		</div>
		<div class="flex justify-center">
			<button class="bg-white p-2 rounded-xl border border-black" on:click={() => {
                if (code == correctAns) {
                    score += 1000;
                }
            }}>
				<Dialog.Root>
					<Dialog.Trigger disabled={!code}>Submit</Dialog.Trigger>
					{#if checker(code)}
						<Dialog.Content class="bg-green-100">
							<Dialog.Header>
								<Dialog.Title>Your code is correct</Dialog.Title>
								<Dialog.Description>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consectetur culpa
									odit, aliquid soluta, placeat esse dolore illum voluptatem maiores perferendis non
									tempora eos provident. Corrupti vero modi repellat magnam!
								</Dialog.Description>
							</Dialog.Header>
						</Dialog.Content>
=======
<div class="flex relative bg-black text-white flex-col items-center w-full h-dvh">
	<div
		class="relative background-img flex flex-col justify-center w-[367px] h-full max-h-[740px] mt-10"
	>
		<div class="flex items-center mx-6 my-5 justify-between z-20">
			<div class="flex items-center">
				<a href="/menu">
					<ArrowLeftFromLine size={32} />
				</a>
				<p class="text-2xl">PHASE 1</p>
			</div>
			<a href="/leaderboard"><img src="ranking.svg" alt="" /></a>
		</div>
		<div class="mb-5 z-20">
			<Scorebar bind:score />
		</div>
		<div class="flex flex-col items-center justify-center z-20">
			<!-- <img
				src="กรอบqr.svg"
				alt=""
				class="absolute bg-fixed bottom-32 z-10 scale-110 overflow-visible pointer-events-none"
			/> -->
			<div class="z-30">
				<div
					class="flex items-center relative [margin-inline:_auto] aspect-square overflow-hidden rounded-xl w-[310px] border"
				>
					<div id="reader" class="reader w-full"></div>
				</div>
				<div class="my-3 flex justify-center">
					{#if scanning}
						<button on:click={stop}>stop</button>
>>>>>>> local:src/routes/(minigame)/qrScanner/+page.svelte
					{:else}
						<button on:click={start}>start</button>
					{/if}
				</div>
			</div>
		</div>
		<div class="mx-6 z-20">
			<p class="text-base">Password</p>
			<div class="my-3 flex justify-center">
				<input
					type="text"
					bind:value={code}
					class="p-2 w-full rounded-xl bg-[#8D8C8A] drop-shadow-[0_3px_11px_#C99949]"
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
					class=" p-2 rounded-xl border border-black"
					on:click={() => {
						if (code == correctAns) {
							score += 1000;
						}
					}}
				>
					<Dialog.Root>
						<Dialog.Trigger disabled={!code} class="bg-black"><img src="ปุม submit.svg" alt=""></Dialog.Trigger>
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
		background-image: url('ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-code {
		background-image: url('กรอบtext.svg');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-qr {
		background-image: url('กรอบqr.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
