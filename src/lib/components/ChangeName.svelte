<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer';
	import { Pencil } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import DrawerContent from './ui/drawer/drawer-content.svelte';
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
				class="bg-[#383527] text-white placeholder-white maitree"
				placeholder="ชื่อเล่นน้องๆ"
			/>
		</Drawer.Header>
		<Drawer.Footer>
			<Button class="bg-[#C99949]">Submit</Button>
			<Drawer.Close
				><Button variant="outline" class="w-full bg-transparent">Cancel</Button></Drawer.Close
			>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
