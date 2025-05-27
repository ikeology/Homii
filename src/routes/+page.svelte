<script>
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class="page">
	<h1>Congratulations Isaiah on Your Graduation! We love to see it.</h1>
	<p>
		Visit
		<a href="https://www.uchicago.edu" target="_blank" rel="noopener noreferrer">
			the University of Chicago homepage
		</a>
		to celebrate your next chapter.
	</p>
	<br /><Button>buttontonowhere</Button>
	<p>
		<img
			class="character-img"
			src="https://static.wikia.nocookie.net/yasuke/images/c/c2/Yasuke.png"
			alt="Yasuke"
		/>
	</p>
</div>

<style>
	.page {
		background-color: maroon;
		color: white;
		font-family: sans-serif;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;
	}

	a {
		color: white;
		text-decoration: underline;
	}

	.character-img {
		mix-blend-mode: multiply;
		max-width: 300px;
		margin-top: 1rem;
	}
</style>
