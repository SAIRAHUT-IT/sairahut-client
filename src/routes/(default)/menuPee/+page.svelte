<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import { elemental_parser } from '$lib/parser/elemental';
	let door = [
		{
			title: 'Scan',
			leftDoorPath: 'menu/leftdoorred.webp',
			rightDoorPath: 'menu/rightdoorred.webp',
			mainColor: '#A63521',
			path: 'qrScanner',
			secondaryColor: ''
		},
		{
			title: 'Bingo',
			leftDoorPath: 'menu/leftdoorblue.webp',
			rightDoorPath: 'menu/rightdoorblue.webp',
			mainColor: '#3E80B1',
			path: 'bingo',
			secondaryColor: ''
		}
	];

	let houseIsUnlock = true;
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

<div class="flex relative text-white flex-col items-center w-full overflow-x-hidden">
	<img src="menu/combo.webp" class="absolute bg-fixed w-full -top-24" alt="s" />
	<!-- <img src="menuPee/frame.webp" class="absolute bg-fixed w-full" alt="frame" /> -->
	<img src="cloud.webp" class="absolute bg-fixed top-32 scale-125 w-screen -z-50" alt="" />
	<div class="absolute flex justify-between z-10 pointer-events-none top-20 w-full">
		<img
			src="/menu/leftlamp.webp"
			class="bg-fixed bottom-0 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="/menu/rightlamp.webp"
			class="bg-fixed top-0 right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
		<img src="/menu/flower.webp" class="absolute w-screen top-60 z-50" alt="flower" />
	</div>
	<div class="relative background-img flex justify-center min-w-[367px] min-h-[663px]">
		<div class="absolute">
			<div class="mt-10">
				<div id="house" class="relative mb-9">
					<span class="relative top-0 flex items-center justify-center">
						<img src="menu/สำนัก.webp" alt="banner" class="absolute h-[60px] w-[215px]" />
						<img src="menu/สำนัก.webp" alt="banner" class="absolute h-[60px] w-[215px]" />
						{#if houseIsUnlock}
							<img src="menu/logoHouse.webp" alt="house" class="z-50" />
							<p class="mangorn text-center text-3xl text-black z-50">
								{elemental_parser(String($session.elemental))}
							</p>
						{:else}
							<p class="mangorn text-center text-3xl text-[#767272] z-50">สำนักยังไม่เปิดเผย</p>
						{/if}
					</span>
				</div>
				<div class="max-h-dvh mt-15">
					{#each door as x}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							id="wrapper"
							class={`group bg-[#1C1A17]/90 hover:shadow-sm hover:shadow-yellow-200 relative flex items-center justify-center w-96 h-96 max-w-[240px] max-h-[240px] overflow-hidden rounded-full border-[6px] my-5 `}
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
</div>

<style>
	.background-img {
		background-image: url('menuPee/ขอบกรอบ.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
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
