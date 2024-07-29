<script lang="ts">
	import QrScannerNong from '$lib/components/QrScannerNong.svelte';
	import QrScannerP from '$lib/components/QrScannerP.svelte';
	import { session } from '$lib/stores/member.store.js';

	export let data;
</script>

{#if $session.role == 'FRESHY'}
	<QrScannerP qr_code={data.qrcode} meta={data.meta} />
{:else}
	<QrScannerNong />
{/if}
