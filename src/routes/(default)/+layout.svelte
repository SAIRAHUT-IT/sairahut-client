<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="relative min-h-screen">
	<slot />
</div>
<Footer />
