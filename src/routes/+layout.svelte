<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<Navbar/>
<main class="relative min-h-screen">
    <slot />
</main>