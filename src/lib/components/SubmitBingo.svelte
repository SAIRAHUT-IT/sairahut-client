<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import toast from 'svelte-french-toast';
	import Button from './ui/button/button.svelte';

	const submit = async () => {
		try {
			const response = await fetch('/api/bingo/submit', {
				method: 'POST',

				body: JSON.stringify({})
			});
			const data = await response.json();
			if (!response.ok) throw data || 'error';
			toast.success(data.message || 'ปลดล็อคสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 500);
		} catch (error: any) {
			toast.error(error.message);
		}
	};
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button class="w-full text-base font-bold uppercase bg-transparent hover:bg-transparent">
			<img src="/submit.svg" alt="" />
		</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header class="text-start maitree">
			<Dialog.Title class="text-2xl">ท่านมั่นใจที่จะส่งคำตอบแล้วใช่หรือไม่</Dialog.Title>
			<Dialog.Description class="text-[#C99949]"
				>- หากทำการกดส่งแล้วจะเป็นการล้างกระดาน <br />
				- ทุก ๆ bingo 5 ครั้งจะสามารถแลกตั๋วได้ 1 ใบ และหากเหลือ bingo เป็นเศษก็จะถูกลบไปด้วย</Dialog.Description
			>
		</Dialog.Header>
		<Dialog.Footer>
			<Button on:click={submit} type="submit" class="bg-[#C99949] hover:bg-[#C99949]/80 w-full"
				>ยืนยัน</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
