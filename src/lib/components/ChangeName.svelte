<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import { Pencil } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import toast from 'svelte-french-toast';

	let val = '';

	const submit = async () => {
		try {
			const response = await fetch('/api/auth/nickname', {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ nickname: val })
			});

			const data = await response.json();
			if (!response.ok) throw data.message || 'error';

			toast.success('อัพเดทชื่อเล่นสำเร็จ');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		} catch (error: any) {
			toast.error('ไม่สามารถตั้งชื่อแบบนี้ได้');
		}
	};
</script>

<Drawer.Root>
	<Drawer.Trigger>
		<Pencil class="rounded-md opacity-30" size={20} />
	</Drawer.Trigger>
	<Drawer.Content class="bg-[#383527] text-white border-0">
		<Drawer.Header class="text-start">
			<Drawer.Title>Change your nickname</Drawer.Title>
			<Drawer.Description class="text-white/60 maitree">ใช้สำหรับเปลี่บยเชื่อ</Drawer.Description>
			<Input
				bind:value={val}
				class="bg-[#383527] text-white placeholder-white maitree"
				placeholder="ชื่อเล่นน้องๆ"
			/>
		</Drawer.Header>
		<Drawer.Footer>
			<Button on:click={submit} class="bg-[#C99949] hover:bg-[#C99949]/90">Submit</Button>
			<Drawer.Close>
				<Button variant="outline" class="w-full bg-transparent">Cancel</Button>
			</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
