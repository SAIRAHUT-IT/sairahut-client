<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import { elemental_parser } from '$lib/parser/elemental';
</script>

<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div class="relative background-img flex justify-center w-[367px] h-full max-h-[740px]">
		<img
			src="cloud.webp"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="z-50 mt-20">
			<div class="flex items-center mx-5 my-5 justify-start">
				<div class="flex items-center">
					<a href="/menu">
						<img src="ลูกศรกลับหน้าhome.webp" alt="" />
					</a>
					<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Profile</p>
				</div>
			</div>
			<div>
				<div class="bg-profile mt-5 mx-5 text-white shadow-md min-h-[175px] min-w-[310px]">
					<div class="relative flex items-center justify-center container mx-auto px-6 py-3">
						{#if $session.paired_member?.elemental || ($session.elemental && $session.elemental !== 'NONE')}
							<div class="absolute flex justify-around w-full">
								<img
									class="w-[8rem] -rotate-12"
									src={`elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
									alt="elemental_icon"
								/>
								<img
									class="transform -scale-x-100 w-[8rem] rotate-12"
									src={`elemental/${$session.paired_member?.elemental || $session.elemental}.svg`}
									alt="elemental_icon"
								/>
							</div>
						{/if}
						<div class="flex items-center justify-center px-2 text-sm z-[1500]">
							<div class="mangorn flex flex-col items-center">
								<p class="text-4xl">ชื่อจอมยุทธ</p>
								<p class="text-7xl text-[#C99949]">
									{$session.nickname}
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
			<div>
				<a href="/@me/history/code">
					<div class="bg-[#383527] mt-7 mx-5 rounded-md shadow-md drop-shadow-[0_3px_6px_#C99949]">
						<div class="container mx-auto px-6">
							<div class="flex items-center justify-between px-2">
								<div class="mangorn text-3xl">
									<p>ประวัติการกรอก code</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
			<div>
				<a href="/@me/history/bingo">
					<div class="bg-[#383527] mt-10 mx-5 rounded-md shadow-md drop-shadow-[0_3px_6px_#C99949]">
						<div class="container mx-auto px-6">
							<div class="flex items-center justify-between px-2">
								<div class="mangorn text-3xl">
									<p>Bingo Ticket</p>
								</div>
							</div>
						</div>
					</div>
				</a>
			</div>
			<!-- <div class="w-full mt-5 flex justify-center">
				<a href="/menu">
					<img src="ปุ่มปิด.webp" alt="" />
				</a>
			</div> -->
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('ขอบกรอบ.svg');
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-profile {
		background-image: url('กรอบtextprofile.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
