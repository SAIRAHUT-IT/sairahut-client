<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { ShieldHalf } from 'lucide-svelte';
    export let isUnlocked = false;
	export let i = 1;
	export let shard = 5;
	let hint = [
		'01',
		'02',
		'03',
		'04',
		'05'
	];
</script>

<div class="mx-5">
	<label class="block text-lg font-bold mb-1 ml-2" for="field1">คำใบ้ {i}</label>
	<Dialog.Root>
		<Dialog.Trigger class="w-full relative" disabled={isUnlocked}>
            {#if !isUnlocked}
                <div class="absolute flex items-center justify-center bg-gray-200 w-full h-full rounded-2xl">
                    <ShieldHalf class="text-2xl text-white/95 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)]" />
                </div>
            {/if}
			<textarea
				class="border shadow rounded-2xl w-full h-12 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline pointer-events-none"
				id="field1"
				bind:value={hint[i-1]}
				readonly	
			></textarea>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title class="text-center text-xl font-semibold">Use {shard} shard to unlock</Dialog.Title>
			</Dialog.Header>
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>