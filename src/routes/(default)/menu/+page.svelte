<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import { elemental_parser } from '$lib/parser/elemental';
	let door = [
		{
			title: 'ล่าหาพลัง',
			leftDoorPath: 'menu/leftdoorred.webp',
			rightDoorPath: 'menu/rightdoorred.webp',
			mainColor: '#A63521',
			path: 'qrScanner',
			secondaryColor: ''
		},
		{
			title: 'กลีบดอกเหมย',
			leftDoorPath: 'menu/leftdoorblue.webp',
			rightDoorPath: 'menu/rightdoorblue.webp',
			mainColor: '#3E80B1',
			path: 'bingo',
			secondaryColor: ''
		},
		{
			title: 'ใบ้บอกทิศ',
			leftDoorPath: 'menu/leftdoorgreen.webp',
			rightDoorPath: 'menu/rightdoorgreen.webp',
			mainColor: '#009971',
			secondaryColor: '',
			path: 'hint'
		},
		{
			title: 'เผยโฉมฉาย',
			leftDoorPath: 'menu/leftdooryellow.webp',
			rightDoorPath: 'menu/rightdooryellow.webp',
			mainColor: '#E68636',
			path: 'puzzle',
			secondaryColor: ''
		}
	];

	const checkPhaseDay = (path: string) => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth();
		if (month !== 7) {
			return false;
		}
		switch (path) {
			case 'this_that':
				return day >= 1;
			case 'qrScanner':
				return day >= 2;
			case 'bingo':
				return day >= 5;
			case 'hint':
				return day >= 8;
			case 'puzzle':
				return day >= 14;
			default:
				return true;
		}
	};
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
	<img src="/menu/Group 37.svg" class="absolute bg-fixed w-full -top-24" alt="s" />
	<div class="absolute flex justify-between z-10 pointer-events-none top-10 w-full">
		<img
			src="/menu/leftlamp.webp"
			class="bg-fixed scale-100 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="/menu/rightlamp.webp"
			class="bg-fixed scale-100 right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
	</div>
	<img src="/menu/cloud.webp" class="absolute w-full pointer-events-none" alt="" />
	<img
		src="/menu/flower.webp"
		class="absolute w-screen top-48 z-50 pointer-events-none"
		alt="flower"
	/>
	<img
		src="/menu/flower.webp"
		class="absolute w-screen top-[550px] pointer-events-none"
		alt="flower"
	/>
	<div class="absolute">
		<div class="mt-10">
			<div id="house" class="relative mb-9">
				<span class="relative top-0 flex items-center justify-center">
					<img src="/menu/สำนัก.webp" alt="banner" class="absolute h-[60px] w-[215px]" />
					<img src="/menu/สำนัก.webp" alt="banner" class="absolute h-[60px] w-[215px]" />
					{#if $session.paired_member?.elemental || ($session.elemental && $session.elemental !== 'NONE')}
						<img
							src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
							alt="house"
							class="z-50"
						/>
						<p class="mangorn text-center text-3xl text-black z-50">
							{elemental_parser($session.paired_member?.elemental || $session.elemental || '')}
						</p>
					{:else}
						<p class="mangorn text-center text-3xl text-[#767272] z-50">สำนักยังไม่เปิดเผย</p>
					{/if}
				</span>
			</div>
			<div class="max-h-screen">
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
							class="text-white z-10 mangorn font-bold text-6xl drop-shadow-[0_3px_1px_rgba(0,0,0,1)]"
						>
							{!checkPhaseDay(x.path) ? '????' : x.title}
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
