<script>
	import { onMount } from "svelte";
	/**
	 * @type {number}
	 */
	// @ts-ignore
	export let score;
	export let ranking = 80;

    /**
	 * @type {number}
	 */
    export let internalScore;

    onMount(() => {
        internalScore = score;
    });

    $: internalScore = score;
</script>

<div class="bg-gray-600 mx-12 rounded-3xl text-white shadow-md bg-score">
	<div class="container mx-auto px-6 py-3 flex">
		<div class="w-1/4 flex items-center justify-end">
			<h1 class="text-4xl">{ranking}</h1>
		</div>
		<div class="w-3/4 flex justify-center">
			<div>
				<div>คืออันดับของคุณ</div>
				<div>
					your point : {internalScore} pt
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bg-score{
		background-image: url('กรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
