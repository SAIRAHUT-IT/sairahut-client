<script lang="ts">
	import { ArrowLeftFromLine } from 'lucide-svelte';
    import { ArrowRightFromLine } from 'lucide-svelte';
	let data = { fullname: 'Nuttawit P.', nickname: 'win', branch: 'IT', contact: '6607xxxx@kmitl.ac.th' };
</script>

<div class="sm:hidden block w-full h-screen bg-gray-200">
	<div class="flex items-center mx-5 my-5 justify-start">
		<div class="flex items-center">
			<a href="/menu">
				<ArrowLeftFromLine size={32} />
			</a>
			<p class="text-2xl">Profile</p>
		</div>
	</div>
	<div>
		<nav class="bg-gray-600 mt-5 mx-5 rounded-2xl text-white shadow-md">
			<div class="container mx-auto px-6 py-3">
				<div class="flex items-center justify-start px-2 text-sm">
					<div>
						<p class="my-2">ชื่อ-นามสกุล : {data.fullname}</p>
                        <p class="my-2">ชื่อเล่น : {data.nickname}</p>
                        <p class="my-2">สาขา : {data.branch}</p>
                        <p class="my-2">ช่องทางการติดต่อ : {data.contact}</p>
					</div>
				</div>
			</div>
		</nav>
	</div>
    <div>
        <a href="/profile/history_code">
            <nav class="bg-white mt-5 mx-5 rounded-2xl shadow-md border border-black">
                <div class="container mx-auto px-6 py-3">
                    <div class="flex items-center justify-between px-2">
                        <div>
                            <p>ประวัติการกรอก code</p>
                        </div>
                        <div>
                            <ArrowRightFromLine size={32} />
                        </div>
                    </div>
                </div>
            </nav>
        </a>
	</div>
    <div>
        <a href="/profile/bingo_ticket">
            <nav class="bg-white mt-5 mx-5 rounded-2xl shadow-md border border-black">
                <div class="container mx-auto px-6 py-3">
                    <div class="flex items-center justify-between px-2">
                        <div>
                            <p>Bingo Ticket</p>
                        </div>
                        <div>
                            <ArrowRightFromLine size={32} />
                        </div>
                    </div>
                </div>
            </nav>
        </a>
	</div>
    <div class="w-full mt-5 flex justify-center">
        <a href="/menu">
            <button class="px-12 py-3 bg-white rounded-xl border border-black">Close</button>
        </a>
    </div>
</div>
