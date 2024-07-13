<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { ShieldHalf } from 'lucide-svelte';
    export let isUnlocked = false;
</script>

<div class="mx-5">
	<label class="block text-lg font-bold mb-1 ml-2" for="field1">คำใบ้ 1</label>
	<Dialog.Root>
		<Dialog.Trigger class="w-full relative" disabled={isUnlocked}>
            {#if !isUnlocked}
                <div class="absolute flex items-center justify-center bg-gray-200 w-full h-full rounded-2xl">
                    <ShieldHalf class="text-2xl text-white/95 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" />
                </div>
            {/if}
			<input
				class="border shadow rounded-2xl w-full h-12 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline pointer-events-none"
				id="field1"
				type="text"
				placeholder="Lorem ipsum"
				readonly
			/>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title class="text-start text-xl font-semibold">abc</Dialog.Title>
			</Dialog.Header>
			<Input id="name" value="" placeholder="Provide Code Here" class="col-span-1" />
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>