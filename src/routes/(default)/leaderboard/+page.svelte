<script lang="ts">
	import LeaderBoard from '$lib/components/LeaderBoard.svelte';
	export let data;
</script>

{#if data}
	<LeaderBoard leaderboard={data.leaderboard} />
{/if}
