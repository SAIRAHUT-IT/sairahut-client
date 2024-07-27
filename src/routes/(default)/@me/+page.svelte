<script lang="ts">
	import { session } from '$lib/stores/member.store';
	import { ArrowLeftFromLine } from 'lucide-svelte';
	import { ArrowRightFromLine } from 'lucide-svelte';
	let data = {
		fullname: 'Nuttawit P.',
		nickname: 'วิน',
		sumnak: 'สำนักอิอิ',
		elemental: 'FIRE',
		isshowsumnak: false
	};
	$: console.log($session);
</script>

<!-- BASS -->
<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div class="relative background-img flex justify-center w-[367px] h-full max-h-[740px] mt-10">
		<img
			src="cloud.svg"
			class="absolute bg-fixed bottom-40 z-10 scale-110 overflow-visible"
			alt=""
		/>
		<div class="z-50 mt-3">
			<div class="flex items-center mx-5 my-5 justify-start">
				<div class="flex items-center">
					<a href="/menu">
						<img src="ลูกศรกลับหน้าhome.svg" alt="" />
					</a>
					<p class="ml-2 text-2xl tradewin drop-shadow-[0_3px_11px_#FFFFFF]">Profile</p>
				</div>
			</div>
			<div>
				<div class="bg-profile mt-5 mx-5 text-white shadow-md min-h-[175px] min-w-[310px]">
					<div class="relative flex items-center justify-center container mx-auto px-6 py-3">
						{#if data.isshowsumnak}
							<div class="absolute flex justify-around w-full">
								<img
									class="transform -scale-x-100 w-[6rem] rotate-12"
									src="/elemental/fire.svg"
									alt="elemental_icon"
								/>
								<img class="w-[6rem] -rotate-12" src="/elemental/fire.svg" alt="elemental_icon" />
							</div>
						{/if}
						<div class="flex items-center justify-center px-2 text-sm">
							<div class="mangorn flex flex-col items-center">
								<p class="text-4xl">ชื่อจอมยุทธ</p>
								<p class="text-7xl">{$session.email}</p>
								{#if data.isshowsumnak}
									<p class="text-4xl">{data.sumnak}</p>
								{:else}
									<p class="text-4xl text-[#767272]">สำนักยังไม่เปิดเผย</p>
								{/if}
								<!-- <p class="my-2">ชื่อ-นามสกุล : {data.fullname}</p>
								<p class="my-2">ชื่อเล่น : {data.nickname}</p>
								<p class="my-2">สาขา : {data.branch}</p>
								<p class="my-2">ช่องทางการติดต่อ : {data.contact}</p> -->
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
			<div class="w-full mt-5 flex justify-center">
				<a href="/menu">
					<img src="ปุ่มปิด.svg" alt="" />
				</a>
			</div>
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
		background-image: url('กรอบtextprofile.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
