<script></script>

<div class="button-box">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="button"
		on:click={() => {
			window.location.href = './Diary.pdf';
		}}
	>
		<img src="./PDF.png" alt="" />
	</div>
</div>

<style lang="scss">
	.button-box {
		margin-top: 2.5vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button {
		cursor: pointer;
		height: 60px;
		width: 220px;
		border-radius: 15px;
		margin-top: 2vh;
		margin-bottom: 2vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 900px) {
		.button {
			height: 50px;
			width: 180px;
		}
	}

	.button img {
		height: 100%;
		max-width: 100%;
	}
</style>
