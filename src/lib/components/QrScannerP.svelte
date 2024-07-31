<script lang="ts">
	// @ts-nocheck

	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import Scorebar from '$lib/components/Scorebar.svelte';

	export let qr_code, meta;

	let scanning = false;
	/**
	 * @type {any}
	 */
	$: code = meta.code;
	/**
	 * @type {Html5Qrcode}
	 */
	let html5Qrcode;
	$: qr =
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN6SURBVO3BO65jSwIDwWRB+99yThvPoFWAcKTbn2FE/IWZ/xxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmHGbKi4eS8JNUWhJuVFoSblRuknCj0pLwk1SeOMyUw0w5zJQXH6bySUm4UXlC5SepfFISPukwUw4z5TBTXnxZEt6h8o4k3KjcJKGptCR8UxLeofJNh5lymCmHmfLiL6dyk4Sm0pLwhMq/5DBTDjPlMFNe/OWS0FSayo3KjUpLQktCU/mbHWbKYaYcZsqLL1P5JpWWhKbSktBUWhJuVFoSnlD5kxxmymGmHGbKiw9Lwk9KQlNpSWgqLQlNpSXhk5LwJzvMlMNMOcyU+At/sSTcqDyRhBuVf8lhphxmymGmxF/4gyThRuUmCe9Q+aYkNJWWhKbSktBUWhKayhOHmXKYKYeZ8uKhJNyo3CShqTyhcpOEn6TyjiTcJOGbDjPlMFMOM+XFQyotCTdJaCo3SXiHyo1KS8LvpNKS8DsdZsphphxmyosPU3lHEm5U/mQqN0loKi0JNyo3Sfikw0w5zJTDTIm/8EASblRuktBUWhJ+kkpLwu+k0pLQVD7pMFMOM+UwU178Zio3Ki0JTaUl4YkkNJWbJNyotCQ0lZaEG5VvOsyUw0w5zJQXH6bSktBUbpLwhEpLQlP5JJWbJNwk4R1JuFF54jBTDjPlMFPiLzyQhKbyTUm4UWlJuFF5RxKaSktCU7lJwjtUvukwUw4z5TBTXvywJNyotCS8IwlN5SYJTaUloam0JNwk4QmVloQblScOM+UwUw4z5cVDKu9QeYfKTRJ+UhJuVN6RhHeotCR80mGmHGbKYaa8eCgJP0mlqTyh0pLQVFoS3pGEpvInO8yUw0w5zJQXH6bySUm4ScKNyk0SbpLQVFoSblQ+KQlN5ZMOM+UwUw4z5cWXJeEdKu9QaUloSXiHSktCS8JNEj4pCU3lmw4z5TBTDjPlxT9GpSXhCZWWhBuVloQblSeS0FSeOMyUw0w5zJQX/+dUbpJwo/IOlXckoal802GmHGbKYaa8+DKVn5SEptKS8ITKTRKaSktCU2lJaCo/6TBTDjPlMFNefFgS/mQq71D5piTcJKGpfNNhphxmymGmxF+Y+c9hphxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGm/A9DS34Y6IUwZAAAAABJRU5ErkJggg==';
	let correctAns = 'FhVdFkA3I$3';

	const checker = (/** @type {string} */ codee) => {
		if (codee == correctAns) {
			return true;
		} else {
			return false;
		}
	};
</script>

<div class="flex relative text-white flex-col items-center w-full">
	<div class="relative flex flex-col background-img justify-center">
		<div class="flex items-center mx-6 my-5 justify-between z-20">
			<div class="flex items-center">
				<a href="/menu">
					<img src="/ลูกศรกลับหน้าhome.webp" alt="" />
				</a>
				<p class="ml-2 text-2xl tradewin">Scan QR</p>
			</div>
			<a href="/leaderboard"><img src="/ranking.webp" alt="" /></a>
		</div>
		<div class="flex flex-col items-center justify-center">
			<div class="relative z-30">
				<div class="z-30">
					<img
						src={qr_code || qr}
						class="flex items-center relative [margin-inline:_auto] aspect-square overflow-hidden rounded-xl w-[288px] z-50"
						alt=""
					/>
				</div>
				<img
					src="กรอบqr.webp"
					alt=""
					class="absolute bg-fixed -bottom-[14.5rem] z-50 scale-105 overflow-visible pointer-events-none"
				/>
			</div>
			<div class="z-20 mt-6 mx-5 max-w-72 overflow-hidden space-y-2">
				<p class="text-base tradewin">Code</p>
				<div
					class="flex items-center justify-center mangorn text-5xl text-center bg-code w-full rounded-md h-[77px]"
				>
					<p type="text" class="mangorn text-6xl">
						{code}
					</p>
				</div>
				<div class="bg-[#26221E] p-3 rounded-sm">
					<div class="flex justify-center">
						<img src="/Frame29.webp" alt="" />
					</div>
					<p class="text-xs maitree">
						เกมนี้จะให้น้องมาแสกน QR code ของเราหรือให้เราที่เป็นพี่ มอบ code ให้กับน้อง ซึ่งเมื่อ
						code ของเราถูกใช้งาน แต้ม disciple soul ก็จะเพิ่มขึ้น โดย code 1 อันสามารถใช้ได้ 1 ครั้ง
						(อย่าลืม reset qr code เมื่อน้องแสกนไปแล้ว)
					</p>
				</div>
				<div class="flex justify-center mt-3">
					<button on:click={() => window.location.reload()} class=" p-2 rounded-xl">
						<img src="/reset.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* .background-img {
		background-image: url('/border.webp');
		background-position: center;
		background-repeat: no-repeat;
	} */

	.bg-code {
		background-image: url('/กรอบtext.png');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
