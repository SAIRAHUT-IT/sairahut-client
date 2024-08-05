<script lang="ts">
	import { session } from '$lib/stores/member.store';

	let score = $session.token;
	let text = 'your point : ' + score + ($session.role == 'FRESHY' ? ' chakras' : ' souls');
</script>

<div class="mx-5 rounded-lg text-white shadow-md bg-score tradewin">
	<div class="flex items-center justify-center gap-5 py-5">
		<h1 class="text-4xl text-end">{$session.ranking || 999}</h1>

		<div class="flex flex-col">
			<div>คืออันดับของคุณ</div>
			<div>
				{text}
			</div>
		</div>
	</div>
	<!-- <div class="w-5/6 h-fit mangorn text-2xl px-5"></div> -->
</div>

<style>
	.bg-score {
		background-image: url('/scoreborder.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
