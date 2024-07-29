<script>
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<nav
	class="sticky top-0 flex w-full justify-between items-center bg-gradient-to-r from-black to-yellow-900 px-4 z-[1500]"
>
	<a href="/">
		<img src="/logo.svg" alt="logo" class="object-cover w-28" />
	</a>
	<a href="/@me">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@sairahut" />
			<Avatar.Fallback>IT</Avatar.Fallback>
		</Avatar.Root>
	</a>
</nav>
