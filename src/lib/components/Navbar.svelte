<script>
	import * as Avatar from '$lib/components/ui/avatar';
	import { session } from '$lib/stores/member.store';
	import JackpotNotice from './JackpotNotice.svelte';
</script>

<nav
	class="sticky flex w-full justify-between items-center bg-gradient-to-r from-black to-yellow-900 px-4 py-2 z-[1500]"
>
	<button
		on:click={() => {
			window.location.replace('/menu');
		}}
		class="flex items-center mangorn text-white text-4xl drop-shadow-[0_1px_3px_#FFFFFF]"
	>
		Sairahut IT22
	</button>

	<button
		on:click={() => {
			window.location.replace('/@me');
		}}
		class="flex items-center"
	>
		<Avatar.Root>
			<Avatar.Image src={$session.avatarURL} alt="@sairahut" />
			<Avatar.Fallback>IT</Avatar.Fallback>
		</Avatar.Root>
	</button>
</nav>
