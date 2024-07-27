<script>
	import Student from '$lib/components/Student.svelte';
</script>

<section class="w-full h-dvh flex flex-col items-center">
	<div class="w-[330px] mt-4 border-2 border-yellow-600 px-7">
		<!-- Mum Team -->
		<div class="flex items-center justify-center h-[120px] rounded-3xl shadow-md bg-score tradewin">
			<p class="text-2xl text-white">MUM TEAM</p>
		</div>
		<!-- Member_list -->
		<div class="grid-col-1 grid-rows-4 space-y-4">
			<Student
				data={{
					name: 'PLEUK IT21',
					ig_name: 'IG : pl . xvii',
					image: 'pluk.jpg',
					ig_link: 'https://www.instagram.com/pl.xvii'
				}}
			></Student>
			<Student
				data={{
					name: 'BASS IT21',
					ig_name: 'IG : siwapat_bass',
					image: 'bass.jpg',
					ig_link: 'https://www.instagram.com/siwapat_bass'
				}}
			></Student>
			<Student
				data={{
					name: 'PHUFA IT21',
					ig_name: 'IG : phufa.phu',
					image: 'phufa.jpg',
					ig_link: 'https://www.instagram.com/phufa.phu'
				}}
			></Student>
			<Student
				data={{
					name: 'WIN IT21',
					ig_name: 'IG : nuttawit_nx',
					image: 'win.jpg',
					ig_link: 'https://www.instagram.com/nuttawit_nx'
				}}
			></Student>
			<Student
				data={{
					name: 'ICE IT21',
					ig_name: 'IG : anner.py',
					image: 'ice.jpg',
					ig_link: 'https://www.instagram.com/anner.py'
				}}
			></Student>
			<Student
				data={{
					name: 'JAME DSBA7',
					ig_name: 'IG : j.a.m.e._o',
					image: 'jame.jpg',
					ig_link: 'https://www.instagram.com/j.a.m.e._o'
				}}
			></Student>
		</div>
		<!-- close-btn -->
		<div class="w-full my-5 flex justify-center">
			<button
				class="px-12 py-1 bg-[#383527] text-white rounded-3xl text-base text-shadow tradewin border-x-2 border-[#A37745]"
			>
				<a href="/">close</a>
			</button>
		</div>
	</div>
</section>

<style>
	.bg-score {
		background-image: url('กรอบtextScore.svg');
		background-position: center;
		background-repeat: no-repeat;
	}
	.text-shadow {
		text-shadow: 4px 0px 15px rgba(255, 255, 255, 0.75);
	}
</style>
