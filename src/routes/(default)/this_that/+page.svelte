<script lang="ts">
	import toast from 'svelte-french-toast';
	import Error from '../../+error.svelte';
	import { goto } from '$app/navigation';

	let arr = new Array(13).fill(undefined);
	let question_arr = [
		{ title: 'สายกิจกรรม', isSelect: false },
		{ title: 'สายเรียน', isSelect: false },
		{ title: 'แชท', isSelect: false },
		{ title: 'โทร', isSelect: false },
		{ title: 'อยู่บ้าน', isSelect: false },
		{ title: 'ไปเที่ยว', isSelect: false },
		{ title: 'เล่นกีฬา', isSelect: false },
		{ title: 'เล่นเกม', isSelect: false },
		{ title: 'ชอบโอ๋', isSelect: false },
		{ title: 'ชอบอ้อน', isSelect: false },
		{ title: 'วางแผน', isSelect: false },
		{ title: 'ด้นสด', isSelect: false },
		{ title: 'งานกลุ่ม', isSelect: false },
		{ title: 'งานเดี่ยว', isSelect: false },
		{ title: 'มินิมอล', isSelect: false },
		{ title: 'เยอะๆไว้ก่อน', isSelect: false },
		{ title: 'ย้อนอดีต', isSelect: false },
		{ title: 'ไปอนาคต', isSelect: false },
		{ title: 'เลี้ยงมังกร', isSelect: false },
		{ title: 'เลี้ยงยูนิคอร์น', isSelect: false },
		{ title: 'นอนเร็ว', isSelect: false },
		{ title: 'นอนดึก', isSelect: false },
		{ title: 'กินเผ็ด', isSelect: false },
		{ title: 'ไม่กินเผ็ด', isSelect: false },
		{ title: 'Real', isSelect: false },
		{ title: 'Fake', isSelect: false }
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
	};
	const submit = async () => {
		try {
			if (arr.includes(undefined)) throw 'กรุณากรอกให้ครบทุกข้อ';
			const result = await fetch('/api/this-that', {
				method: 'PATCH',
				body: JSON.stringify({
					payload: arr
				})
			});
			const data = await result.json();
			if (!result.ok) throw data.message;
			toast.success(data.message, {
				duration: 3000
			});
			goto('/menu');
		} catch (error: any) {
			toast.error(error, {
				duration: 3000
			});
			goto('/menu');
		}
	};
</script>

<div class="flex relative text-white flex-col items-center w-full">
	<div class="absolute flex w-full justify-between z-10 pointer-events-none">
		<img
			src="โคมไฟซ้าย_thisorthat.webp"
			class="bg-fixed scale-125 top-0 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="โคมไฟขวา_thisorthat.webp"
			class="bg-fixed scale-125 top-0 right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
	</div>
	<div
		class="relative flex flex-col justify-center bg-[#5A271F] w-[330px] h-full min-h-[764.67px] overflow-visible mt-5"
	>
		<img
			src="cloud.webp"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="absolute group-img w-full h-full bottom-0 pointer-events-none"></div>
		<div class="p-5 z-30">
			<div class="max-w-60 mx-auto">
				<h1 class="text-3xl text-center tradewin drop-shadow-[0_3px_11px_#ffffff]">THIS OR THAT</h1>
				<img src="/arcane.webp" alt="arcane" />
				<p class="text-[10px] maitree">
					ปุจฉาอัขรา เหล่าจอมยุทธเอ๋ย <br />จงเลือกตัวเลือกที่ิอธิบายความเป็นตัวเจ้าได้มากที่สุด
				</p>
			</div>
			<div class="mt-5 mx-5 rounded-3xl text-white">
				<div class="container mx-auto px-6 py-3">
					<div class=" grid grid-cols-2 gap-1">
						{#each question_arr as item, index}
							<div class="relative flex justify-center items-center">
								<button
									class={`${item.isSelect ? 'drop-shadow-[0_3px_11px_#E6E0AE] text-[#E6E0AE]' : ''} mangorn text-2xl text-center z-50`}
									on:click={() => {
										add_arr(item, index);
									}}>{item.title}</button
								>
								{#if item.isSelect}
									<img src="Clip path group.webp" class="absolute bg-fixed top-0" alt="" />
									<img
										src="Clip path group.webp"
										class="absolute bg-fixed bottom-0 rotate-180"
										alt=""
									/>
								{/if}
							</div>
						{/each}
					</div>
					<div class="mt-5">
						<div class="flex justify-center items-center">
							<button class="" on:click={submit}><img src="ปุม submit.webp" alt="" /></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.background-red {
		background-image: url('พื้นหลังสีแดง.webp');
		/* background-position: 54% 33%; */
		background-repeat: no-repeat;
	}

	.arcane-description {
		background-image: url('arcane.webp');
		/* background-position: 54% 33%; */
		background-repeat: no-repeat;
	}

	.group-img {
		background-image: url('group.webp');
		background-position: center top;
		background-repeat: no-repeat;
	}

	.left-lamp {
		background-image: url('โคมไฟซ้าย_thisorthat.webp');
		background-position: left top;
		background-repeat: no-repeat;
		/* overflow: hidden;
		position: relative;
		transform: translateX(0);
		transition: transform 2s linear;
		transform: translateX(0%) rotate(360deg); */
	}

	.right-lamp {
		background-image: url('โคมไฟขวา_thisorthat.webp');
		background-position: right top;
		background-repeat: no-repeat;
	}

	.could {
		background-image: url('เมฆตกแต่ง.webp');
		background-position: 50% 120%;
		background-repeat: no-repeat;
	}

	.left-light {
		background-image: url('แสงซ้าย.webp');
		background-position: left 7%;
		background-repeat: no-repeat;
	}

	.right-light {
		background-image: url('แสงขวา.webp');
		background-position: right 7%;
		background-repeat: no-repeat;
	}

	.glow {
		/* box-shadow:0 0 60px 10px #fffac0;
		border-top: #fffac0;
		border-bottom: #fffac0; */
		-webkit-animation: glow 1s ease-in-out infinite alternate;
		-moz-animation: glow 1s ease-in-out infinite alternate;
		animation: glow 1s ease-in-out infinite alternate;
	}
	@-webkit-keyframes glow {
		from {
			text-shadow:
				0 0 10px #fff7f7,
				0 0 20px #fff7f7,
				0 0 30px #fff584,
				0 0 40px #fff584,
				0 0 50px #fff584,
				0 0 60px #fff584,
				0 0 70px #fff584;
		}
		to {
			text-shadow:
				0 0 20px #fff7f7,
				0 0 30px #fffac0,
				0 0 40px #fffac0,
				0 0 50px #fffac0,
				0 0 60px #fffac0,
				0 0 70px #fffac0,
				0 0 80px #fffac0;
		}
	}
	@-moz-keyframes glow {
		from {
			text-shadow:
				0 0 10px #fff7f7,
				0 0 20px #fff7f7,
				0 0 30px #fff584,
				0 0 40px #fff584,
				0 0 50px #fff584,
				0 0 60px #fff584,
				0 0 70px #fff584;
		}
		to {
			text-shadow:
				0 0 20px #fff7f7,
				0 0 30px #fffac0,
				0 0 40px #fffac0,
				0 0 50px #fffac0,
				0 0 60px #fffac0,
				0 0 70px #fffac0,
				0 0 80px #fffac0;
		}
	}
	@keyframes glow {
		from {
			text-shadow:
				0 0 10px #fff7f7,
				0 0 20px #fff7f7,
				0 0 30px #fff584,
				0 0 40px #fff584,
				0 0 50px #fff584,
				0 0 60px #fff584,
				0 0 70px #fff584;
		}
		to {
			text-shadow:
				0 0 20px #fff7f7,
				0 0 30px #fffac0,
				0 0 40px #fffac0,
				0 0 50px #fffac0,
				0 0 60px #fffac0,
				0 0 70px #fffac0,
				0 0 80px #fffac0;
		}
	}
</style>
