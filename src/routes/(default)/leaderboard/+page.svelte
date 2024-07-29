<script lang="ts">
	import LeaderBoard from '$lib/components/LeaderBoard.svelte';
	export let data;
</script>

<LeaderBoard leaderboard={data.leaderboard} />
