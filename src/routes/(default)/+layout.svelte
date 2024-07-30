<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="relative min-h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
