<script lang="ts">
	import QrScannerNong from '$lib/components/QrScannerNong.svelte';
	import QrScannerP from '$lib/components/QrScannerP.svelte';
	import { session } from '$lib/stores/member.store.js';

	export let data;
</script>

{#if $session.role == 'FRESHY'}
	<QrScannerNong />
{:else if data.qr_code && data.meta}
	<QrScannerP qr_code={data.qrcode} meta={data.meta} />
{/if}
