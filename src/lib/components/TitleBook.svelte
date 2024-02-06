<script></script>

<div>
	<img src="./book_tilted.png" alt="Diary Cover" class="book-tilted" />
	<img src="./book_straight.png" alt="Diary Cover" class="book-straight" />
</div>

<style>
	div {
		width: min(85vw, 575px);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2vh;
	}

	img {
		height: 100%;
		max-width: 100%;
	}

	.book-straight {
		opacity: 0;
		visibility: hidden;
		z-index: -10000;
		height: 0px;
		width: 0px;
	}

	@media (min-width: 900px) {
		.book-tilted {
			opacity: 0;
			visibility: hidden;
			z-index: -10000;
			height: 0px;
			width: 0px;
		}

		.book-straight {
			opacity: 1;
			visibility: visible;
			z-index: 0;
			height: auto;
			width: auto;
		}
	}

	@media (min-width: 900px) and (max-width: 1000px) {
		div {
			width: min(50vw, 300px);
		}
	}

	@media (min-width: 1000px) {
		div {
			width: min(50vw, 400px);
		}
	}
</style>
