<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<header>
	<Navbar />
</header>
<main class="relative min-h-screen z-10 overflow-hidden p-3">
	<slot />
</main>
