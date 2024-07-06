<script lang="ts">
	import { stringify } from 'postcss';
	import type { PageData } from './$types';
	let arr = new Array(5).fill(undefined);
	let question_arr = [
		{ title: 'test1', isSelect: false },
		{ title: 'test2', isSelect: false },
		{ title: 'test3', isSelect: false },
		{ title: 'test4', isSelect: false },
		{ title: 'test5', isSelect: false },
		{ title: 'test6', isSelect: false },
		{ title: 'test7', isSelect: false },
		{ title: 'test8', isSelect: false },
		{ title: 'test9', isSelect: false },
		{ title: 'test10', isSelect: false }
	];
	const add_arr = (item: any, index: number) => {
		if (arr.includes(item.title)) {
			arr.splice(Math.floor(index / 2), 1, undefined);
		} else {
			arr.splice(Math.floor(index / 2), 1, item.title);
		}
		for (let i = 0; i < question_arr.length; i++) {
			if (arr.includes(question_arr[i].title)) {
				question_arr[i].isSelect = true;
			} else {
				question_arr[i].isSelect = false;
			}
		}
		console.log(arr);
	};
	const submit = () => {
		if (arr.includes(undefined)) {
			alert('Please select all answer.');
		} else {
			alert('Success!');
		}
	};
	export let data: PageData;
</script>

<div class="sm:hidden block eiei w-full h-screen bg-gray-200">
	<div class="text-2xl mt-5 px-6">THIS OR THAT</div>
	<div>
		<nav class="bg-gray-600 mt-5 mx-5 rounded-3xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3">
				<div class="flex items-center justify-center">
					<h1>Desrciption</h1>
				</div>
			</div>
		</nav>
	</div>
	<div>
		<nav class="bg-gray-600 mt-5 mx-5 rounded-3xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3">
				<div class="grid grid-cols-2 gap-3">
					{#each question_arr as item, index}
						<div class="flex justify-center items-center">
							<button
								class={`${item.isSelect ? 'bg-gray-700' : ''}`}
								on:click={() => {
									add_arr(item, index);
								}}>{item.title}</button
							>
						</div>
					{/each}
				</div>
			</div>
		</nav>
	</div>
	<div class="mt-5">
		<div class="flex justify-center items-center">
			<button class="bg-white p-2 rounded-xl border border-black shadow-md" on:click={submit}
				>Summit</button
			>
		</div>
	</div>
</div>
