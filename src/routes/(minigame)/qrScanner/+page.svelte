<script>
	// @ts-nocheck

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
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

<div class="sm:hidden block w-full h-screen bg-gray-200">
	<div class="flex items-center mx-5 my-5 justify-between">
		<div class="flex items-center">
			<a href="/menu">
				<ArrowLeftFromLine size={32} />
			</a>
			<p class="text-2xl">Phase 1 : Topic</p>
		</div>
		<a href="/qrScanner/ranking"><img src="ranking.png" alt=""></a>
	</div>
	<div class="my-5">
		<Scorebar bind:score={score}/>
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
			<button
				class="bg-white p-2 rounded-xl border border-black"
				on:click={() => {
					if (code == correctAns) {
						score += 1000;
					}
				}}
			>
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
