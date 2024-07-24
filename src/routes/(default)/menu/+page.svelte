<script lang="ts">
	let test = [
		{
			title: 'Scan',
			leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#A63521',
			secondaryColor: ''
		},
		{
			title: 'Bingo',
			leftDoorPath: 'Image Splitter Frame.png',
			rightDoorPath: 'Frame Divider Split.png',
			mainColor: '#3E80B1',
			secondaryColor: ''
		},
		{
			title: 'Hint',
			leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#009971',
			secondaryColor: ''
		},
		{
			title: 'Picture',
			leftDoorPath: 'Image Splitter Frame (1).png',
			rightDoorPath: 'กรอบหบ้ต่าง-split (1).png',
			mainColor: '#E68636',
			secondaryColor: ''
		}
	];
</script>

<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div class="mt-10">
		{#each test as x, i}
			<div
				id="wrapper"
				class="group hover:shadow-sm hover:shadow-yellow-200 relative flex items-center justify-center w-72 h-72 max-w-[300px] max-h-[300px] overflow-hidden rounded-full border-[5px]"
				style:border-color={x.mainColor}
			>
				<img
					src={`${x.leftDoorPath}`}
					alt="left-door"
					class="absolute door transition-all duration-300 group-hover:-translate-x-36"
					id="left-door"
				/>
				<img
					src={`${x.rightDoorPath}`}
					alt="right-door"
					class="absolute door transition-all duration-300 group-hover:translate-x-36"
					id="right-door"
				/>
				<p class="text-white">{x.title}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.door {
		position: absolute;
		top: 0;
		height: 100%;
		width: 50%;
		object-fit: cover;
		transform-origin: center;
	}
	#left-door {
		left: 0;
		transform-origin: left;
	}
	#right-door {
		right: 0;
		transform-origin: right;
	}
</style>
