<script lang="ts">
	import Border from '$lib/components/Border.svelte';
	import SophomoreInfo from '$lib/components/SophomoreInfo.svelte';
	import { session } from '$lib/stores/member.store';
	import toast from 'svelte-french-toast';
	let name = '';
	let guess = '';

	const submit = async () => {
		try {
			const response = await fetch('/api/guess', {
				method: 'POST',
				body: JSON.stringify({
					guess
				})
			});
			const data = await response.json();
			name = data?.info?.real_nickname || '';
			if (!response.ok) throw data || 'error';
		} catch (error: any) {
			toast.error(error.message);
		}
	};
</script>

<SophomoreInfo open={name.length > 0} {name} />

<div class="flex flex-col w-full min-h-screen items-center mt-10 p-5">
	<!-- <div
		class="absolute z-50 overflow-hidden flex flex-col gap-3 items-center justify-center text-white mx-5 border-2 border-[#C99949] rounded-xl p-5 my-4 bg-gradient-to-tr from-[#1D1A17] to-[#302c1c96] backdrop-blur-md"
	>
		<h1 class="mangorn text-6xl drop-shadow-[0_2px_10px_rgba(100,100,100,0.8)]">hee</h1>
		<p class="maitree">ท่านได้พบศิษย์พี่ของท่านแล้ว ศิษย์พี่ของท่านนั้นมีนามว่า....</p>

		<div class="absolute -z-10 opacity-40">
			<img
				src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
				alt="logo"
			/>
		</div>
	</div> -->
	<Border class_="p-3 w-full">
		<div class="flex flex-col space-y-10 my-10">
			<div class="flex flex-col gap-2 items-center justify-center w-full">
				<h1 class="mangorn text-5xl text-white text-center">รหัสลับของศิษย์พี่</h1>
				<!-- <div class="relative flex items-center justify-center">
					<img src="/elemental_phase/textbg.png" alt="textbg" />
					<input type="text" class="absolute bg-transparent" />
				</div> -->
				<div class="mangorn text-6xl p-2 text-center bg-code h-full w-full rounded-md mr-2">
					<input
						type="text"
						maxlength="6"
						placeholder="secret code"
						bind:value={guess}
						class="p-2 w-full rounded-xl bg-transparent mangorn outline-none text-center text-[#C99949] placeholder-slate-50/60"
					/>
				</div>
				<button
					disabled={guess.length < 6}
					on:click={submit}
					class="w-full flex justify-center scale-150 mt-4"
				>
					<div
						class="bg-[#383527] shadow-md rounded-3xl px-2 border-r-2 border-l-2 border-[#C99949] w-1/2"
					>
						<div class="flex items-center justify-center">
							<p class="mangorn text-xl text-white">SUBMIT</p>
						</div>
					</div>
				</button>
			</div>
			<div class="flex flex-col items-center mt-4 bg-[#26221E]/70 text-white px-5 py-2 mb-5 mx-7">
				<div class="flex justify-center">
					<img src="/Frame29.webp" alt="" />
				</div>
				<p class="text-xs font-semibold maitree">
					เวลาในการสืบทอดพลังใกล้จะหมดลงทุกที... ก่อนที่ทุกอย่างจะสายเกินไป
					จงรับอักขระลับประจำตัวจากศิษย์พี่ที่แท้จริง แล้วสลักมันลงบนคมดาบของเจ้าเสีย !!
					"ยุทธภพนั้นกว้างใหญ่ แต่ศิษย์พี่ที่จริงใจมีเพียงหนึ่ง"
				</p>
			</div>
		</div>
	</Border>
</div>

<style>
	.bg-code {
		background-image: url('/elemental_phase/textbg.png');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
