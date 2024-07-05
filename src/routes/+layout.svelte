<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>
<!-- <div class="block sm:hidden"> -->
	<header>
		<Navbar/>
	</header>
	<main class="relative min-h-screen">
		<slot />
	</main>
<!-- </div> -->