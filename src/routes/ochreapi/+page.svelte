<script>
	let { slugs } = $props();
</script>

<div class="page-container">
	<h1>Welcome to the OCHRE API Viewer</h1>
	<p>
		This is the landing page. Click the link below or enter a UUID in the URL to view an item's
		data.
	</p>
	<a href="/ochreapi/8824bf5e-152c-48af-b198-ef6888cc530f">View Example Item</a>
</div>

<!-- src/routes/ochreapi/+page.svelte -->
<style>
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #191970; /* Midnight Blue */
		color: white;
		text-align: center;
		padding: 2rem;
		font-family: sans-serif;
	}
	a {
		color: #87cefa;
		text-decoration: none;
		font-weight: bold;
		margin-top: 1rem;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
