<!-- <div class="w-full h-full m-2 bg-gray-600 items-center justify-center flex rounded-md shadow">
</div> -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import toast from 'svelte-french-toast';
	export let question;
	export let index;
	export let row;
	export let col;
	export let image;
	let answer = '';
	const unlock = async () => {
		try {
			const response = await fetch('/api/bingo/unlock', {
				method: 'PATCH',
				body: JSON.stringify({
					row,
					column: col,
					key: answer
				})
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
	<Dialog.Trigger
		disabled={question.is_checked}
		style="background-image: url({image});"
		class=" flex items-center justify-center text-white text-2xl font-semibold w-[3em] h-[3em] rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
	>
		{#if question.is_checked}
			<img src="/bingo/ปั้ม.svg" alt="s" />
		{/if}
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title class="text-start text-xl maitree font-bold"
				>{index + 1} | {question.question} (เคย/ไม่เคย)</Dialog.Title
			>
			<Dialog.Description class="text-start">
				<p class="text-slate-50/70">
					** จงตามหาเหล่าศิษย์พี่ที่ใจตรงกับเจ้า และถามคำถามด้านบนเพื่อรับพลัง
				</p>
			</Dialog.Description>
		</Dialog.Header>
		<Input
			id="name"
			bind:value={answer}
			placeholder="โค้ดลับจากศิษย์พี่"
			class="col-span-1 text-black"
		/>
		<Dialog.Footer>
			<Button on:click={unlock} type="submit" class="bg-[#C99949] hover:bg-[#C99949]/80"
				>ยืนยัน</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
