<script>
	export let full = false;
	export let fluid = false;
</script>

<div class="__container" class:__fluid={fluid} class:__full={full}>
	<slot />
</div>

<style>
	.__container {
		@apply container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8;
	}

	.__container.__fluid {
		@apply max-w-7xl;
	}

	.__container.__full {
		@apply max-w-full px-0;
	}
</style>
