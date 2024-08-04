<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import Input from './ui/input/input.svelte';
	import Button from './ui/button/button.svelte';
	import toast from 'svelte-french-toast';
	let real_nickname = '';
	let contact = '';
	let branch = '';
	$: disabled = !real_nickname || !contact || !branch;

	const submit = async () => {
		try {
			const response = await fetch('/api/auth/@me/info', {
				method: 'PATCH',
				body: JSON.stringify({
					real_nickname,
					contact,
					branch
				})
			});
			const data = await response.json();
			if (!response.ok) throw data || 'error';
			toast.success(data.message || 'ปลดล็อคสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 500);
		} catch (error: any) {
			toast.error(error.message[0].message || error.message || 'error');
		}
	};
</script>

<Dialog.Root
	onOutsideClick={(e) => {
		e.preventDefault();
	}}
	open={true}
>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title class="text-2xl">โปรดอ่านคำอธิบาย</Dialog.Title>
			<Dialog.Description class="text-[#C99949] font-semibold text-xl maitree">
				** ใส่นามเรียกของท่านจอมยุทธ์ ต้องเป็นชื่อเล่นที่แท้จริงและท่านมีโอกาสใส่เพียงครั้งเดียว
			</Dialog.Description>
		</Dialog.Header>
		<div class="flex flex-col gap-2 w-full mt-2">
			<Input
				bind:value={real_nickname}
				class="bg-[#C99949]/50 text-white placeholder-white/80 maitree text-lg"
				placeholder="ชื่อเล่น (ห้ามนามสมมติ)"
			/>
			<Input
				bind:value={branch}
				class="bg-[#C99949]/50 text-white placeholder-white/80 maitree text-lg"
				placeholder="สาขา (IT, DSBA, AIT)"
			/>
			<Input
				bind:value={contact}
				class="bg-[#C99949]/50 text-white placeholder-white/80 maitree text-lg"
				placeholder="กรุณาใส่ลิงก์โปรไฟล์ เช่น (instagram.com/pl.xvii)"
			/>
		</div>
		<Dialog.Footer class="mt-2">
			<Button
				on:click={submit}
				{disabled}
				class="bg-[#C99949] hover:bg-[#C99949]/80 p-2 rounded-md font-semibold w-full text-lg"
				>ยืนยัน</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
