<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { session, updateSession } from '$lib/stores/member.store';
	import { KeyRound } from 'lucide-svelte';
	import { toast } from 'svelte-french-toast';
	let chakra = [5, 5, 10, 10, 15, 20, 25];

	const unlock = async () => {
		try {
			const response = await fetch('/api/auth/hint/unlock', {
				method: 'PATCH',
				body: JSON.stringify({})
			});
			const data = await response.json();
			if (!response.ok) throw data || 'error';
			toast.success(data.message || 'ปลดล็อคสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 500);
			updateSession();
		} catch (error: any) {
			toast.error(error.message[0].message);
		}
	};
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	let shuffled = shuffleArray(['FIRE', 'EARTH', 'PLANT', 'WATER', 'LIGHTING', 'AIR']);
	shuffled.length = 3;
	$: dis = ($session.hint?.length || 0) >= 7;
</script>

<Dialog.Root>
	<Dialog.Trigger class="w-full relative" disabled={dis}>
		<div
			class="flex justify-center gap-2 items-center bg-gradient-to-tr from-[#1D1A17] to-[#302c1c6b] backdrop-blur-lg drop-shadow-lg mangorn text-5xl mt-5 mx-5 rounded-md shadow-md border-r-2 border-l-2 px-2 py-5 text-center text-[#C99949] border-[#C99949]"
		>
			<KeyRound size={35} />
			<p>ปลดคำใบ้</p>
		</div>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px] ">
		<Dialog.Header>
			<Dialog.Title class="text-center text-2xl maitree font-bold">
				ใช้ {chakra[$session?.hint?.length || 0]} จักระออร่า เพื่อรับการชี้แนะ
			</Dialog.Title>
		</Dialog.Header>
		<Dialog.Footer>
			<Button class="bg-[#C99949] hover:bg-[#C99949]/80" type="submit" on:click={unlock}
				>Submit</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
