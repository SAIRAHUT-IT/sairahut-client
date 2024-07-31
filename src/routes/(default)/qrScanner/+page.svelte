<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	import QrScannerNong from '$lib/components/QrScannerNong.svelte';
	import QrScannerP from '$lib/components/QrScannerP.svelte';
	import { session } from '$lib/stores/member.store.js';

	export let data;
</script>

<div class="flex justify-center h-screen mt-10">
	<Border>
		{#if $session.role == 'FRESHY'}
			<QrScannerP qr_code={data.qrcode} meta={data.meta} />
		{:else}
			<QrScannerNong />
		{/if}
	</Border>
</div>
