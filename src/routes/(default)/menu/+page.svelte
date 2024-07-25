<script lang="ts">
	import { session } from "../../../lib/stores/member.store";
	let door = [
		{
			title: 'Scan',
			leftDoorPath: 'menu/leftdoorred.svg',
			rightDoorPath: 'menu/rightdoorred.svg',
			mainColor: '#A63521',
			path: 'qrScanner',
			secondaryColor: ''
		},
		{
			title: 'Bingo',
			leftDoorPath: 'menu/leftdoorblue.svg',
			rightDoorPath: 'menu/rightdoorblue.svg',
			mainColor: '#3E80B1',
			path: 'bingo',
			secondaryColor: ''
		},
		{
			title: 'Hint',
			leftDoorPath: 'menu/leftdoorgreen.svg',
			rightDoorPath: 'menu/rightdoorgreen.svg',
			mainColor: '#009971',
			secondaryColor: '',
			path: 'hint'
		},
		{
			title: 'Picture',
			leftDoorPath: 'menu/leftdooryellow.svg',
			rightDoorPath: 'menu/rightdooryellow.svg',
			mainColor: '#E68636',
			path: 'puzzle',
			secondaryColor: ''
		}
	];
	let houseName = 'สำนักที่พลัดพลาก';
	let path = ['qrScanner', 'bingo', 'hint', 'puzzle'];
	function delayedNavigation(
		event: { preventDefault: () => void },
		url: string,
		delay: number | undefined
	) {
		event.preventDefault(); 

		setTimeout(() => {
			window.location.href = url;
		}, delay);
	}
</script>

<div class="flex relative text-white flex-col items-center w-full">
	<img src="menu/combo.svg" class="absolute bg-fixed w-full -top-24" alt="s" />
	<div class="absolute flex justify-between z-10 pointer-events-none top-20 w-full">
		<img
			src="/menu/leftlamp.svg"
			class="bg-fixed scale-125 bottom-0 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="/menu/rightlamp.svg"
			class="bg-fixed scale-125 top- right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
		<img src="/menu/cloud.svg" class="absolute w-full" alt="" />
		<img src="/menu/flower.png" class="absolute w-screen top-48 z-50" alt="flower" />
		<img src="/menu/flower.png" class="absolute w-screen top-[550px]" alt="flower" />
	</div>
	<div class="absolute">
		<div class="mt-10">
			<div id="house" class="relative mb-9">
				<span class="relative top-0 flex items-center justify-center">
					<img src="menu/สำนัก.png" alt="banner" class="absolute h-[60px] w-[215px]" />
					<img src="menu/logoHouse.svg" alt="house" class="z-50" />
					<p class="mangorn text-center text-3xl text-black z-50">{houseName}</p>
				</span>
			</div>
			<div class="max-h-dvh">
				{#each door as x}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						id="wrapper"
						class={`group bg-[#1C1A17]/90 hover:shadow-sm hover:shadow-yellow-200 relative flex items-center justify-center w-96 h-96 max-w-[220px] max-h-[220px] overflow-hidden rounded-full border-[6px] my-5 `}
						style="border-color: {x.mainColor};"
						on:click={(e) => delayedNavigation(e, x.path, 200)}
					>
						<img
							src={x.leftDoorPath}
							alt="left-door"
							class="absolute bg-[#1C1A17] door transition-all duration-300 group-hover:-translate-x-full"
							id="left-door"
						/>
						<img
							src={x.rightDoorPath}
							alt="right-door"
							class="absolute bg-[#1C1A17] door transition-all duration-300 group-hover:translate-x-full"
							id="right-door"
						/>
						<p
							class="text-white z-10 tradewin font-bold text-5xl drop-shadow-[0_3px_1px_rgba(0,0,0,1)]"
						>
							{x.title}
						</p>
					</div>
				{/each}
			</div>
		</div>
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