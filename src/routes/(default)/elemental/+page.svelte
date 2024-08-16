<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import gsap from 'gsap';
	import Border from '$lib/components/Border.svelte';
	import { text } from '@sveltejs/kit';

	export let data: { matcher?: 'matched' | 'not_matched' | 'fake'; code?: any };
	$: matcher = data.matcher || 'not_matched';
	$: is_fake = matcher === 'fake';
	$: is_triggered = false;
	const color_context = {
		matched: {
			color: '#C99949',
			text: 'ยินดีด้วย!!',
			description:
				'ยินดีกับท่านจอมยุทธ์น้อยด้วยที่เดินทางมาจนเจอเมืองแห่งพลังธาตุ ของตน ศิษย์พี่ของเจ้าอยู่ที่นี้ ขอให้ได้รับพลังอย่างเต็มที่!!'
		},
		not_matched: {
			color: '#D73C37',
			text: 'เสียใจด้วย',
			description: 'ท่านจอมยุทธ์น้อยท่านหลงทางแล้ว โปรดเปลี่ยนเมืองเพื่อตามหาศิษย์พี่และรับพลัง!!'
		},
		fake: {
			color: '#8c8c89',
			text: 'คุณโดนหลอกแล้ว...',
			description:
				'น่าเสียดายยิ่งที่ต้องกล่าวว่าท่านถูกหลอกแล้วจอมยุทธ์น้อยจงหาอันที่ถูกต้องภายในเมืองนี้'
		}
	};
	const triggerAnimate = () => {
		const tl = gsap.timeline({
			delay: 1.5,
			onStart: () => {
				setTimeout(() => {
					is_triggered = true;
				}, 2000);
			},
			onComplete: () => {
				window.location.href = '/guess';
			}
		});
		tl.to('#pane', { duration: 2, top: 50 });
		tl.to('#pane', { delay: 2, duration: 2, top: '-200%' });
		tl.to('#quotes', { delay: 3.3, duration: 3, opacity: 0, ease: 'power2.out' }, '-=1');
	};
</script>

<div class="absolute h-screen z-[70] -top-[300%] max-w-2xl pointer-events-none" id="pane">
	<img src="/elemental_phase/door.svg" class="w-full" alt="door" />
</div>
<div class="flex flex-col w-full min-h-screen items-center justify-center p-5">
	<div class="mb-28" id="quotes">
		{#if is_triggered}
			<h1
				class="text-4xl mangorn text-center text-[#E6E0AE] drop-shadow-[0_2px_10px_rgba(100,100,100,1)]"
			>
				จอมยุทธ์น้อยเอ๋ย...<br />
				เดินทางมาไกลเช่นนี้เหนื่อยแล้วใช่หรือไม่<br />
				เวลานี้ท่านใกล้จะเข้าสู่ความจริงแล้ว<br />
				จงนำรหัสลับที่คิดว่าเป็นของศิษย์พี่ของท่านมาใส่<br />
				แล้วท่านจะได้พบกับความจริง...
				<!-- จอมยุทธ์น้อยเดินทางมาไกล <br />ตอนนี้ท่านใกล้จะเข้าสู่ความจริง
				<br />
				นำรหัสลับที่คิดว่าเป็นของศิษย์พี่
				<br />ท่านมาใส่แล้วท่านจะได้พบกับความจริง -->
			</h1>
		{:else}
			<Border class_="p-3">
				<h1 class="text-white mangorn text-5xl text-center">กลลวงร้อยเล่ห์</h1>
				<div
					class="relative flex flex-col gap-3 items-center justify-center text-white mx-5 border-2 rounded-xl p-5 my-4 bg-gradient-to-tr from-[#1D1A17] to-[#302c1c96] backdrop-blur-md"
					style="border-color: {color_context[matcher].color};"
				>
					<h1
						class="mangorn text-6xl drop-shadow-[0_2px_10px_rgba(100,100,100,0.8)]"
						style="color: {color_context[matcher].color}; "
					>
						{color_context[matcher].text}
					</h1>
					<p class="maitree">
						{color_context[matcher].description}
					</p>

					{#if matcher == 'matched' || is_fake}
						<button
							disabled={is_triggered}
							on:click={triggerAnimate}
							class="w-full flex justify-center scale-150 mt-4"
							style={is_fake ? 'display:none;' : ''}
						>
							<div
								class="bg-[#383527] shadow-md rounded-3xl px-2 border-r-2 border-l-2 border-[#C99949]"
							>
								<div class="flex items-center justify-center">
									<p class="mangorn text-xl">ไปต่อเลยยย</p>
								</div>
							</div>
						</button>
						<div
							class="absolute -z-10 opacity-40"
							style={is_fake ? 'filter: grayscale(100%);' : ''}
						>
							<img
								src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
								alt="logo"
							/>
						</div>
					{/if}
				</div>
			</Border>
		{/if}
	</div>
</div>
