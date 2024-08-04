<div class={`border_ border border-[#C99949] w-fit h-fit`}>
	<div class="circle top-circle"></div>
	<slot />
	<div class="bottom-borders"></div>
	<div class="circle bottom-circle"></div>
</div>

<style>
	.border_ {
		position: relative;
		display: inline-block;
	}

	.border_::before,
	.border_::after,
	.bottom-borders::before,
	.bottom-borders::after {
		content: '';
		position: absolute;
		height: 50px;
		width: 50px;
		background-size: cover;
	}

	.border_::before {
		top: -5px;
		left: -10px;
		background: url('/border/left_border.png') no-repeat;
	}

	.border_::after {
		top: -5px;
		right: -22px;
		background: url('/border/right_border.png') no-repeat;
	}

	.circle {
		position: absolute;
		height: 20px;
		width: 20px;
		background: url('/border/circle_border.png') no-repeat;
		background-size: cover;
	}

	.top-circle {
		top: -10px;
		left: calc(50% - 15px);
	}

	.bottom-circle {
		bottom: -10px;
		right: calc(50% - 15px);
	}

	.bottom-borders::before {
		bottom: -5px;
		left: -22px;
		background: url('/border/right_border.png') no-repeat;
		transform: rotate(180deg);
	}

	.bottom-borders::after {
		bottom: -5px;
		right: -10px;
		background: url('/border/left_border.png') no-repeat;
		transform: rotate(-180deg);
	}
</style>
