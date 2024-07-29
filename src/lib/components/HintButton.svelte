<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	export let i = 1;
	export let shard = 5;
	export let hint = { content: '??', isUnlocked: false };
</script>

<div class="mx-5">
	<label class="block text-2xl text-white font-bold mb-1 ml-2 mangorn" for="field1"
		>คำใบ้ที่ {i}</label
	>
	<Dialog.Root>
		<Dialog.Trigger class="w-full relative" disabled={hint.isUnlocked}>
			<input
				class="rounded-xl px-3 py-2 w-full text-gray-700 bg-[#8D8C8A] pointer-events-none shadow-md drop-shadow-[0_1px_4px_#C99949]"
				bind:value={hint.content}
				readonly
			/>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title class="text-center text-xl font-semibold"
					>Use {shard} shard to unlock</Dialog.Title
				>
			</Dialog.Header>
			<Dialog.Footer>
				<Button type="submit">Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
