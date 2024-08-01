<script lang="ts">
	import { session } from '$lib/stores/member.store';

	let score = $session.token;
	let text = 'your point : ' + score + ($session.role == 'FRESHY' ? ' chakras' : ' soul');
</script>

<div class="mx-5 rounded-lg text-white shadow-md bg-score tradewin">
	<div class="container mx-auto px-6 py-3 flex">
		<div class="w-1/4 flex items-center justify-end">
			<h1 class="text-4xl">{$session.ranking || 999}</h1>
		</div>
		<div class="w-3/4 flex justify-center">
			<div>
				<div class="mangorn text-3xl">คืออันดับของคุณ</div>
				<div>
					{text}
				</div>
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
