<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<header>
	<Navbar />
</header>
<main class="relative min-h-screen z-10 overflow-hidden">
	<slot />
</main>
