<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import JackpotNotice from '$lib/components/JackpotNotice.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<!-- {#if $page.url.pathname === '/menu'}
	<JackpotNotice />
{/if} -->
<div class="relative min-h-screen">
	<slot />
</div>
<Footer />
