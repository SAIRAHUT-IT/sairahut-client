<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let isCollapsed = false;
	let timer = 6000;
	let intervalId: number;

	function startTimer() {
		const endTime = Date.now() + timer;

		if (intervalId) {
			clearInterval(intervalId);
		}

		intervalId = setInterval(() => {
			const remainingTime = endTime - Date.now();
			if (remainingTime <= 0) {
				isCollapsed = true;
				clearInterval(intervalId);
			}
		}, 1000);
	}

	onMount(() => {
		startTimer();
	});
	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div
	class={`z-[1500] flex items-center justify-center bg-black ring-1 ring-slate-50 text-[#C99949] animated-div ${isCollapsed ? 'collapsed' : ''}`}
>
	<div class="mangorn text-4xl text-white">
		ตอนนี้มีคนได้รับ <span class="text-[#C99949]">Jackpot Ticket</span> แล้ว
	</div>
</div>

<style>
	@keyframes collapse {
		from {
			height: 64px;
		}
		to {
			height: 0px;
		}
	}

	.animated-div {
		@apply h-16;
		width: 100%;
		overflow: hidden;
		transition: height 300ms ease;
	}

	.collapsed {
		animation: collapse 300ms ease forwards;
	}
</style>
