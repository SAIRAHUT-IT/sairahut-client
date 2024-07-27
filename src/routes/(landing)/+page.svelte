<script lang="ts">
	    async function handleLogin() {
        try {
			const response = await fetch('/api/auth/signin');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
			if (jsonData.success) {
				window.location.href = jsonData.data;
			} else {
				console.error('Login failed:', jsonData.error);
			}
        } catch (error) {
            console.error('Login error:', error);
        }
    }
</script>

<!-- <div class="flex items-center justify-center space-y-10">
    <div class="bg-blue-800 w-full h-96 text-center">
        <div class="container bg-white mx-10">
            <p>ใครสายรหัสคืออะไร</p>
        </div>

        <div class="container">
            <p>ใครสายรหัสคืออะไร</p>
        </div>

        <div class="container">
            <p>ใครสายรหัสคืออะไร</p>
        </div>
    </div>
</div> -->
<div class="flex relative text-white flex-col items-center w-full h-dvh">
	<div class="absolute flex w-full justify-between z-10 pointer-events-none top-5">
		<img
			src="โคมไฟซ้าย.svg"
			class="bg-fixed scale-125 top-0 left-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="left_comb"
		/>
		<img
			src="โคมไฟขวา.svg"
			class="bg-fixed scale-125 top-0 right-0 drop-shadow-[0_3px_50px_#fae846]"
			alt="right_comb"
		/>
	</div>
	<div class="relative w-full">
		<img src="ริ้ว.svg" class="absolute bg-fixed w-full" alt="" />
		<img src="เขาหลัง.svg" class="absolute -bottom-1 bg-fixed w-full z-10" alt="" />
		<img src="หน้าปก.svg" class="bg-fixed w-full" alt="" />
	</div>
	<div class="p-3 relative w-[390px]">
		<div class="relative background-img flex flex-col justify-center min-w-[367px] min-h-[511px]">
			<img src="cloud.svg" class="absolute bottom-14 scale-110 overflow-visible" alt="" />
			<div class="mx-10 z-50">
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">สายรหัสคืออะไร</h1>
						<img src="กรอบหัวข้อ.svg" class="absolute w-32" alt="">
					</div>
					<p class="maitree text-xs">กิจกรรมสายรหัสครั้งที่ 9 จัดขึ้นเพื่อส่งเสริมความสัมพันธ์อันดีระหว่างรุ่นพี่ รุ่นน้อง เพื่อให้สามารถช่วยเหลือซึ่งกันและกันทั้งในด้านการเรียนและด้านอื่นๆ โดยกิจกรรมจัดขึ้นในช่วงวันที่
						1 - 17 สิงหาคม พ.ศ. 2567 ณ คณะเทคโนโลยีสารสนเทศ สจล.</p>
				</div>
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">ใครเข้าร่วมได้บ้าง</h1>
						<img src="กรอบหัวข้อ.svg" class="absolute w-36" alt="">
					</div>
					<p class="maitree text-xs">นักศึกษาคณะเทคโนโลยีสารสนเทศ สจล. รุ่นที่ 21 และรุ่นที่ 22สามารถเข้าร่วมเป็นพี่รหัสพี่-น้องรหัสได้ ในส่วนของรุ่นพี่รุ่นอื่นสามารถเข้าร่วมกิจกรรมในฐานะ visitor</p>
				</div>
				<div class="mb-5">
					<div class="relative flex justify-center items-center mb-2">
						<h1 class="text-[#FBE9B8] drop-shadow-[0_5px_11px_#DBA45E] mangorn text-2xl">เข้าร่วมอย่างไร</h1>
						<img src="กรอบหัวข้อ.svg" class="absolute w-32" alt="">
					</div>
					<p class="maitree text-xs">นักศึกษาต้องทำการกรอกข้อมูลส่วนตัว อุปนิสัย ความชอบหลังจากเข้าสู่ระบบ จึงจะนับได้ว่าเข้าร่วมกิจกรรมโดยสมบูรณ์</p>
				</div>
				<div class="relative flex justify-center items-center">
					<button on:click={handleLogin} class="flex justify-center items-center">
						<h1 class="z-50 tradewin">login with google</h1>
						<img src="ปุ่มล้อกอิน.svg" class="absolute bg-fixed w-44" alt="">
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="w-8/12 h-44 border text-center bg-blue-800 mt-20 rounded-3xl text-white">
        สายรหัสคืออะไร
    </div>
    <div class="w-8/12 h-44 border text-center bg-blue-800 mt-20 rounded-3xl text-white">
        ใครเข้าร่วมได้บ้าง
    </div>
    <div class="w-8/12 h-44 border text-center bg-blue-800 mt-20 rounded-3xl text-white">
        เข้าร่วมอย่างไร
    </div> -->
</div>

<!-- <footer class="bg-blue-950 w-full h-20 mt-10 flex items-center justify-center">
    <p class="text-white">Create by หม่ำ Team</p>
</footer> -->

<style>
	.background-img {
		background-image: url('ขอบlanding.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
