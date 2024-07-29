<!-- <div class="w-full h-full m-2 bg-gray-600 items-center justify-center flex rounded-md shadow">
</div> -->
<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	export let question;
</script>

<Dialog.Root>
	<Dialog.Trigger
		style="background-image: url({question.image});"
		class=" flex items-center justify-center text-white text-2xl font-semibold w-[3em] h-[3em] rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
	>
		{#if question.is_checked}
			<img src="/bingo/ปั้ม.svg" alt="s" />
		{/if}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title class="text-start text-xl font-semibold">{question.question}</Dialog.Title>
		</Dialog.Header>
		<Input id="name" value="" placeholder="Provide Code Here" class="col-span-1" />
		<Dialog.Footer>
			<Button type="submit">Submit</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
