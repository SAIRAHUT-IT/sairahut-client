<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { session } from '$lib/stores/member.store';
	export let open = false;
	export let name = 'วิน';
</script>

<Dialog.Root
	onOutsideClick={(e) => {
		e.preventDefault();
	}}
	open={true}
>
	<Dialog.Content class="bg-transparent ring-0 border-0">
		<div
			class="z-50 overflow-hidden flex flex-col gap-3 items-center justify-center text-white mx-5 border-2 border-[#C99949] rounded-xl p-5 my-4 bg-gradient-to-tr from-[#1D1A17] to-[#302c1c96] backdrop-blur-md"
		>
			<h1
				class="mangorn text-5xl text-center text-[#ECBF74] drop-shadow-[0_2px_10px_rgba(100,100,100,0.8)]"
			>
				ท่านได้พบกับความจริง
			</h1>
			<p class="maitree text-center text-xl">
				ท่านได้พบศิษย์พี่ของท่านแล้ว<br /> ศิษย์พี่ของท่านนั้นมีนามว่า....
			</p>

			<p class="mangorn text-center text-5xl text-[#F4EFD4] drop-shadow-lg">
				ศิษย์พี่<span class="underline text-[#ECBF74]">{name}</span>
			</p>
			<!-- <button
				on:click={() => {
					window.location.reload();
				}}
				class="w-full flex justify-center scale-150 outline-none mt-2"
			>
				<div class="bg-[#383527] shadow-md rounded-3xl px-2 border-r-2 border-l-2 border-[#C99949]">
					<div class="flex items-center justify-center">
						<p class="mangorn text-xl">close</p>
					</div>
				</div>
			</button> -->
			<div class="absolute -z-10 opacity-40">
				<img
					src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
					alt="logo"
				/>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
