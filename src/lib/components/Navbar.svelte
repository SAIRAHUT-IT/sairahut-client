<script>
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<nav
	class="flex w-full justify-between items-center bg-gradient-to-r from-black to-yellow-900 px-4 z-40"
>
	<img src="/img/logo.svg" alt="logo" class="object-cover w-28" />
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
</nav>
