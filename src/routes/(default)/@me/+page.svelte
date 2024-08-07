<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import { elemental_parser } from '$lib/parser/elemental';
	import { ChevronLeft, Pencil } from 'lucide-svelte';
	import ChangeName from '$lib/components/ChangeName.svelte';
	$: secret_code = false;
	let nick_ =
		$session.nickname && $session.nickname.length > 9
			? $session.nickname.slice(0, 7) + '...'
			: $session.nickname || '';

	const enableSecretCode = () => {
		secret_code = !secret_code;
	};
</script>

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div class="relative background-img flex justify-center w-[367px] h-full max-h-[740px]">
		<img
			src="cloud.webp"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="z-50 mt-14">
			<div class="flex items-center mx-5 my-5 justify-between">
				<button class="flex items-center" on:click={() => (window.location.href = '/menu')}>
					<ChevronLeft size={30} class="text-[#C99949]" />
					<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Profile</p>
				</button>
			</div>
			<div>
				<div class="bg-profile mt-5 mx-5 text-white shadow-md min-h-[175px] min-w-[320px] relative">
					<div class="absolute right-5 top-5 z-[1500]">
						<ChangeName />
					</div>

					<div class="relative flex items-center justify-center container mx-auto px-6 py-3">
						{#if $session.paired_member?.elemental || ($session.elemental && $session.elemental !== 'NONE')}
							<div class="absolute flex justify-around w-full">
								<img
									class="w-[10rem] -rotate-12"
									src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
									alt="elemental_icon"
								/>
								<img
									class="transform -scale-x-100 w-[10rem] rotate-12"
									src={`/elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
									alt="elemental_icon"
								/>
							</div>
						{/if}
						<div class="flex items-center justify-center px-2 text-sm z-[1500]">
							<div class=" mangorn flex flex-col items-center">
								<p class="text-4xl">ชื่อจอมยุทธ์</p>
								<p class="text-7xl text-WHITE drop-shadow-md">
									{nick_ || 'SAIRAHUT'}
								</p>
								{#if $session.paired_member?.elemental || $session.elemental}
									<p class="text-4xl text-gray-300">
										{elemental_parser(
											$session.paired_member?.elemental || $session.elemental || ''
										)}
									</p>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- <div>
				<a href="/@me/history/code">
					<div
						class="bg-[#383527] mt-7 mx-5 rounded-md shadow-md border-r-2 border-l-2 border-[#C99949] drop-shadow-md"
					>
						<div class="container mx-auto px-6">
							<div class="flex items-center justify-between px-2">
								<div class="mangorn text-3xl">
									<p>ประวัติการกรอก code</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div> -->
			{#if new Date().getTime() > new Date('2024-08-05').getTime() && $session.role == 'FRESHY'}
				<div>
					<button
						on:click={() => {
							window.location.href = '/@me/history/bingo';
						}}
						class="w-full"
					>
						<div
							class="bg-[#383527] mt-10 mx-5 rounded-md shadow-md border-r-2 border-l-2 border-[#C99949]"
						>
							<div class="container mx-auto px-6">
								<div class="flex items-center justify-between px-2">
									<div class="mangorn text-3xl">
										<p>Bingo Ticket</p>
									</div>
								</div>
							</div>
						</div>
					</button>
				</div>
			{/if}
			{#if $session.role == 'SOPHOMORE'}
				<div>
					<button on:click={enableSecretCode} class="w-full">
						<div
							class="bg-[#383527] mt-7 mx-5 p-1 text-center rounded-md shadow-md border-r-2 border-l-2 border-[#C99949] drop-shadow-md"
						>
							<p class="text-5xl mangorn text-center">
								{secret_code ? $session.unique_key : 'รหัสลับ'}
							</p>
							<p class="text-lg text-red-500 mangorn">**ห้ามโชว์รหัสนี้ให้ใครเห็นเด็ดขาด</p>
						</div>
					</button>
				</div>
			{/if}

			<div class="w-full mt-10 flex justify-center scale-150">
				<a href="/api/auth/signout">
					<!-- <img src="/logout.svg" alt="logout" /> -->
					<div
						class="bg-[#383527] shadow-md rounded-3xl px-2 border-r-2 border-l-2 border-[#C99949]"
					>
						<div class="flex items-center justify-center">
							<p class="mangorn text-xl">ออกจากระบบ</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('/border.svg');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-profile {
		background-image: url('/กรอบtextprofile.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
