<script lang="ts">
	import { onMount } from 'svelte';

	let pieces: { piece: string; isImage: boolean }[] = [];

	let unlocked_pieces = [
		// [0, 0],
		[0, 1],
		// [0, 2],
		// [1, 0],
		// [1, 1],
		// [1, 2],
		// [2, 0],
		[2, 1],
		[2, 2]
	];

	let imageUrl =
		'https://media.discordapp.net/attachments/1134763980871712768/1261681743963099136/IMG_1321.jpg?ex=6693d830&is=669286b0&hm=9d563de53441c869f1db83b19e7fae58ea4f15a91f3a79fc79171933983c11eb&=&format=webp&width=896&height=1194';

	onMount(() => {
		loadFromUrl(imageUrl);
	});

	function loadFromUrl(url: string) {
		processImage(url);
	}

	function processImage(src: string) {
		const img = new Image();
		img.crossOrigin = 'Tanansorn';
		img.onload = function () {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');
			const pieceWidth = img.width / 3;
			const pieceHeight = img.height / 3;

			pieces = [];

			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					canvas.width = pieceWidth;
					canvas.height = pieceHeight;
					context?.drawImage(
						img,
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
						const piece = canvas.toDataURL();
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
			console.error('Failed to load image. Please ensure the URL allows cross-origin requests.');
		};
		img.src = src;
	}
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-center">
		<div id="pieces" class="grid grid-cols-3 gap-1 max-w-xl p-2 mt-4">
			{#each pieces as piece, index}
				{#if piece.isImage}
					<img
						class="w-full aspect-square ring-1 ring-black"
						src={piece.piece}
						alt="Piece {index}"
					/>
				{:else}
					<div class="flex bg-white justify-center items-center aspect-square ring-1 ring-black">
						{index + 1}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
