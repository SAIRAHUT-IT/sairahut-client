<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<header>
	<Navbar />
</header>
<main class="relative z-10 overflow-y-scroll min-h-dvh">
	<slot />
</main>
