<script lang="ts">
	import { session } from '$lib/stores/member.store';

	let score = $session.token;
	let text = 'your point : ' + score + ($session.role == 'FRESHY' ? ' chakra' : ' soul');
</script>

<div class="mx-5 rounded-lg text-white shadow-md bg-score tradewin">
	<div class="flex items-center justify-around mx-auto px-6 py-3 max-h-24">
		<h1 class="text-4xl">{$session.ranking || 999}</h1>
		<div class="w-full h-fit flex flex-col justify-center mangorn text-2xl px-5">
			<div>คืออันดับของคุณ</div>
			<div>
				{text}
			</div>
		</div>
	</div>
</div>

<style>
	.bg-score {
		background-image: url('/scoreborder.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
