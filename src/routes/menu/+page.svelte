<script lang="ts">
	// import type { PageData } from './$types';
	// export let data: PageData;

	let test = [
		{
			title: 'test1',
            leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#A63521',
			secondaryColor: ''
		},
        {
			title: 'test2',
            leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#E38626',
			secondaryColor: ''
		},
        {
			title: 'test3',
            leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#2B9972',
			secondaryColor: ''
		},
        {
			title: 'test4',
            leftDoorPath: 'image_part_001.png',
			rightDoorPath: 'image_part_002.png',
			mainColor: '#E38626',
			secondaryColor: ''
		}
	];
</script>

<div class="h-full w-full bg-[#1C1A17] flex flex-col gap-4 justify-center items-center">
	{#each test as x, i}
		<div
			id="wrapper"
			class={`group hover:shadow-sm hover:shadow-yellow-200 relative flex items-center justify-center w-72 h-72 max-w-[300px] max-h-[300px] overflow-hidden rounded-full border-[5px] border-[${x.mainColor}]`}
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
