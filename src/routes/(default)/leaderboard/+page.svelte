<script lang="ts">
	import LeaderBoardNong from '$lib/components/LeaderBoardNong.svelte'
	import LeaderBoardP from '$lib/components/LeaderBoardP.svelte'
	import { session } from '$lib/stores/member.store.js';
</script>

{#if $session.role == 'FRESHY'}
	<LeaderBoardNong />
{:else}
	<LeaderBoardP />
{/if}
