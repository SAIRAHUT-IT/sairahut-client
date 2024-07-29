<script lang="ts">
	export let data;
</script>

<div class="flex relative text-white flex-col items-center w-full h-screen">
	<div class="absolute flex w-full justify-between z-10 pointer-events-none top-5">
		<img
			src="โคมไฟซ้าย.webp"
			class="bg-fixed scale-100 top-0 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="โคมไฟขวา.webp"
			class="bg-fixed scale-100 top-0 right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
	</div>
	<img src="ริ้ว.webp" class="absolute bg-fixed w-full" alt="" />
	<!-- <img src="เขาหลัง.webp" class="absolute bottom-0 bg-fixed w-full z-10" alt="" /> -->
	<img src="หน้าปก.webp" class="bg-fixed w-full" alt="" />
	<div class="p-3 relative w-[390px]">
		<div class="relative background-img flex flex-col justify-center min-w-[367px] min-h-[511px]">
			<img src="cloud.webp" class="absolute bottom-14 scale-110 overflow-visible" alt="" />
			<div class="mx-10 z-50">
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">
							สายรหัสคืออะไร
						</h1>
						<img src="กรอบหัวข้อ.webp" class="absolute w-32" alt="" />
					</div>
					<p class="maitree text-xs">
						กิจกรรมสายรหัสครั้งที่ 9 จัดขึ้นเพื่อส่งเสริมความสัมพันธ์อันดีระหว่างรุ่นพี่ รุ่นน้อง
						เพื่อให้สามารถช่วยเหลือซึ่งกันและกันทั้งในด้านการเรียนและด้านอื่นๆ
						โดยกิจกรรมจัดขึ้นในช่วงวันที่ 1 - 17 สิงหาคม พ.ศ. 2567 ณ คณะเทคโนโลยีสารสนเทศ สจล.
					</p>
				</div>
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">
							ใครเข้าร่วมได้บ้าง
						</h1>
						<img src="กรอบหัวข้อ.webp" class="absolute w-36" alt="" />
					</div>
					<p class="maitree text-xs">
						นักศึกษาคณะเทคโนโลยีสารสนเทศ สจล. รุ่นที่ 21 และรุ่นที่
						22สามารถเข้าร่วมเป็นพี่รหัสพี่-น้องรหัสได้
						ในส่วนของรุ่นพี่รุ่นอื่นสามารถเข้าร่วมกิจกรรมในฐานะ visitor
					</p>
				</div>
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">
							เข้าร่วมอย่างไร
						</h1>
						<img src="กรอบหัวข้อ.webp" class="absolute w-32" alt="" />
					</div>
					<p class="maitree text-xs">
						นักศึกษาต้องทำการกรอกข้อมูลส่วนตัว อุปนิสัย ความชอบหลังจากเข้าสู่ระบบ
						จึงจะนับได้ว่าเข้าร่วมกิจกรรมโดยสมบูรณ์
					</p>
				</div>
				<div class="relative flex justify-center items-center">
					<a href={data.url} class="flex justify-center items-center">
						<h1 class="z-50 tradewin">login with google</h1>
						<img src="ปุ่มล้อกอิน.webp" class="absolute bg-fixed w-44" alt="" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.background-img {
		background-image: url('ขอบlanding.webp');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
