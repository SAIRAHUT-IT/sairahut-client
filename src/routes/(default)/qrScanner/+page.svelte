<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	import QrScannerNong from '$lib/components/QrScannerNong.svelte';
	import QrScannerP from '$lib/components/QrScannerP.svelte';
	import { session } from '$lib/stores/member.store.js';

	export let data;
</script>

<div class="flex justify-center mt-10">
	<Border>
		<div class="p-6">
			{#if $session.role == 'FRESHY'}
				<QrScannerNong />
			{:else}
				<QrScannerP qr_code={data.qrcode} meta={data.meta} />
			{/if}
		</div>
	</Border>
</div>
