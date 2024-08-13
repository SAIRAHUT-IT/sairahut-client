<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	import { session } from '$lib/stores/member.store';
	import { ChevronLeft } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';
	export let data;
	let pieces: { piece: string; isImage: boolean }[] = [];
	let unlocked_pieces: [number, number][] = $session.unlocked_puzzle || [];
	let code = '';

	let imageUrl = data.image;
	let targetWidth = 300;
	let targetHeight = 300;

	const submit = async () => {
		try {
			const response = await fetch('/api/puzzle', {
				method: 'PATCH',

				body: JSON.stringify({ code })
			});
			const data = await response.json();
			if (!response.ok) throw data || 'error';
			toast.success(data.message || 'ปลดล็อคสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error: any) {
			toast.error(error.message || 'เกิดข้อผิดพลาด');
		}
	};

	onMount(() => {
		loadFromUrl(imageUrl);
	});

	function loadFromUrl(url: string) {
		processImage(url);
	}

	function processImage(src: string) {
		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.onload = function () {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');

			const imgAspectRatio = img.width / img.height;
			const targetAspectRatio = targetWidth / targetHeight;

			let drawWidth = targetWidth;
			let drawHeight = targetHeight;
			let offsetX = 0;
			let offsetY = 0;

			if (imgAspectRatio > targetAspectRatio) {
				drawHeight = targetWidth / imgAspectRatio;
				offsetY = (targetHeight - drawHeight) / 2;
			} else {
				drawWidth = targetHeight * imgAspectRatio;
				offsetX = (targetWidth - drawWidth) / 2;
			}

			canvas.width = targetWidth;
			canvas.height = targetHeight;

			context?.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

			const pieceWidth = canvas.width / 3;
			const pieceHeight = canvas.height / 3;

			pieces = [];

			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					const pieceCanvas = document.createElement('canvas');
					const pieceContext = pieceCanvas.getContext('2d');
					pieceCanvas.width = pieceWidth;
					pieceCanvas.height = pieceHeight;

					pieceContext?.drawImage(
						canvas,
						j * pieceWidth,
						i * pieceHeight,
						pieceWidth,
						pieceHeight,
						0,
						0,
						pieceWidth,
						pieceHeight
					);

					const isUnlocked = unlocked_pieces.some((pos) => pos[0] === i && pos[1] === j);

					try {
						const piece = pieceCanvas.toDataURL();
						pieces.push({ piece, isImage: isUnlocked });
					} catch (e) {
						console.error('Error generating piece:', e);
						pieces.push({ piece: '', isImage: false });
					}
				}
			}
			pieces = [...pieces];
		};
		img.onerror = function () {
			console.error('Failed to load image.');
		};
		img.src = src;
	}
</script>

<div class="flex flex-col items-center w-full p-5 mt-10">
	<Border>
		<div class="flex items-center mx-5 mt-5 text-white">
			<button
				class="flex items-center justify-around w-fit"
				on:click={() => (window.location.href = '/menu')}
			>
				<ChevronLeft size={30} class="text-[#C99949] ml-2" />
				<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Puzzle</p>
			</button>
		</div>
		<p class="mx-7 maitree text-white text-sm mt-3">
			จำนวนครั้งที่เปิดได้ในวันนี้ (<span class="text-[#C99949]"
				>{3 - ($session.puzzle_count || 0)}/3</span
			>)
		</p>
		<div id="pieces" class="grid grid-cols-3 gap-1 place-items-center w-fit mx-auto p-2">
			{#each pieces as piece, index}
				{#if piece.isImage}
					<img
						class="w-full aspect-square ring-1 ring-slate-700 rounded-md"
						src={piece.piece}
						alt="P_{index}"
						loading="lazy"
					/>
				{:else}
					<img src="/puzzle.svg" class="rounded-md" alt="chart" loading="lazy" />
				{/if}
			{/each}
		</div>
		<div class="flex flex-col items-center justify-center w-full">
			<div class="mangorn text-6xl p-2 text-center bg-code h-full w-full rounded-md mr-2">
				<input
					type="text"
					maxlength="6"
					placeholder="secret code"
					bind:value={code}
					class="p-2 w-full rounded-xl bg-transparent mangorn outline-none text-center text-[#C99949] placeholder-slate-50/60"
				/>
			</div>
			<button
				on:click={submit}
				disabled={code.length < 6}
				class={`mt-2 mx-5 ${code.length < 6 ? 'grayscale' : ''}`}
			>
				<img src="/submit.svg" alt="submit" />
			</button>
		</div>
		<div class="flex flex-col items-center mt-4 bg-[#26221E]/70 text-white px-5 py-2 mb-5 mx-7">
			<div class="flex justify-center">
				<img src="/Frame29.webp" alt="" />
			</div>
			<p class="text-xs font-semibold maitree">
				คัมภีร์มังกรทอง คำอธิบายการใช้คัมภีร์ ในโลกแห่งยุทธภพอันกว้างใหญ่
				ไม่มีความลับใดสามารถผนึกได้ตลอดกาล ในเมื่อจอมยุทธน้อยกล้าแลกมาด้วยสิ่งมีค่า
				เจ้าก็จะได้สิ่งที่ต้องการกลับไป จงบูชายัญรายชื่อศิษย์พี่ในสำนักของเจ้าให้กับคัมภีร์มังกรทอง
				แล้วเจ้าจะได้รับสิ่งตอบแทนเป็นพลังในการหยั่งรู้เสี้ยวภาพลึกลับของศิษย์พี่ที่แท้จริงของเจ้าให้ได้ประจักษ์แจ้ง
			</p>
		</div>
	</Border>
</div>

<style>
	.bg-code {
		background-image: url('/กรอบtext.png');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
