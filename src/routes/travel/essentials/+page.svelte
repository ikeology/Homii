<script lang="ts">
	import HomiiLogo from '$lib/components/ui/logo/HomiiLogo.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { getPropertyByLabel, getUniquePropertyLabels } from '@digitalculture/ochre-sdk';
	import { MapLibre, DefaultMarker } from 'svelte-maplibre';

	// Keep your API/map specific variables
	const { data } = $props();
	const setItems = data.set.items;
	const propertyLabels = data.set.items.length
		? getUniquePropertyLabels(data.set.items[0]!.properties)
		: [];

	// Page-specific content for Essentials
	const pageTitle = 'Travel Essentials';
	const mainHeading = 'Your Go-To Guide for Seamless Travel';
	const subHeading =
		'Everything you need to know, from packing smart to staying connected, ensuring your journey is effortless.';
	const callToActionText = 'Get Started';

	const introHeading = 'Navigating New Horizons with Ease';
	const introParagraph1 =
		'Preparing for a trip can be overwhelming, but with Homii, you have a curated resource for all your travel essentials. We focus on practical advice and reliable information to help you manage logistics, so you can focus on the experience.';
	const introParagraph2 =
		'From visa requirements to local transportation tips, our Essentials section is designed to equip you with the fundamental knowledge for a smooth transition into any new city or country.';

	const essentialsHeading = 'Key Travel Essentials';
	const essential1 = {
		title: 'Packing Smart',
		description:
			'Tips for efficient packing, essential items, and adapting your wardrobe to different climates and cultures.',
		icon: '🎒'
	};
	const essential2 = {
		title: 'Connectivity Abroad',
		description:
			"Options for staying online: eSIMs, local SIM cards, and reliable Wi-Fi hotspots, ensuring you're always connected.",
		icon: '📶'
	};
	const essential3 = {
		title: 'Local Transportation',
		description:
			'Guides to public transport, ride-sharing apps, and navigating local travel networks in your destination.',
		icon: '🚗'
	};
	const essential4 = {
		title: 'Health & Wellness',
		description:
			'Information on travel insurance, local medical facilities, and maintaining your well-being on the go.',
		icon: '❤️'
	};
	const essential5 = {
		title: 'Banking & Currency',
		description:
			'Advice on managing money, currency exchange, international banking, and secure payment methods.',
		icon: '💸'
	};
	const essential6 = {
		title: 'Cultural Etiquette',
		description:
			'Insights into local customs, social norms, and respectful interactions to enhance your experience.',
		icon: '🤝'
	};

	const additionalInfoHeading = 'Deep Dive into Specifics';
	const additionalInfoParagraph =
		"Beyond these core essentials, our community shares in-depth guides and recommendations on specific topics. Whether it's finding the best local coffee shop with reliable Wi-Fi or understanding the nuances of apartment hunting, Homii has you covered.";
</script>

<div class="landing-page-container">
	<header class="site-header">
		<div class="header-left">
			<a href="/" class="site-logo-wrapper">
				<HomiiLogo size="md" variant="full" />
			</a>
		</div>
		<nav class="main-nav">
			<ul>
				<li><a href="/travel/before-you-go">Before You Go</a></li>
				<li><a href="/travel/essentials">Essentials</a></li>
				<li><a href="/travel/safety-tips">Safety Tips</a></li>
				<li><a href="/travel/join-the-waitlist" class="nav-cta">Join the Waitlist</a></li>
			</ul>
		</nav>
	</header>

	<div class="header-spacer"></div>

	<div class="hero-content">
		<p class="main-heading">{mainHeading}</p>
		<p class="sub-heading">{subHeading}</p>
		<button class="cta-button">
			{callToActionText}
		</button>
	</div>

	<section class="content-section">
		<h2>{introHeading}</h2>
		<p class="problem-statement">
			{introParagraph1}
		</p>
		<p class="solution-intro">
			{introParagraph2}
		</p>
	</section>

	<section class="content-section features">
		<h2>{essentialsHeading}</h2>
		<div class="feature-grid">
			<div class="feature-card">
				<span class="feature-icon">{essential1.icon}</span>
				<h3>{essential1.title}</h3>
				<p>{essential1.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{essential2.icon}</span>
				<h3>{essential2.title}</h3>
				<p>{essential2.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{essential3.icon}</span>
				<h3>{essential3.title}</h3>
				<p>{essential3.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{essential4.icon}</span>
				<h3>{essential4.title}</h3>
				<p>{essential4.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{essential5.icon}</span>
				<h3>{essential5.title}</h3>
				<p>{essential5.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{essential6.icon}</span>
				<h3>{essential6.title}</h3>
				<p>{essential6.description}</p>
			</div>
		</div>
	</section>

	<section class="content-section">
		<h2>Local Insights (Placeholder Data)</h2>
		<p class="problem-statement">
			This section uses placeholder data to demonstrate how Homii might integrate local information,
			such as interesting places or community recommendations, to help you get started in a new
			location.
		</p>
		<div class="map-style">
			<MapLibre
				zoom={4}
				center={[33.9292, 36.0369]}
				class="h-[400px]"
				style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
			>
				{#each setItems as item}
					{#if item.coordinates}
						<DefaultMarker lngLat={[item.coordinates.longitude, item.coordinates.latitude]} />
					{/if}
				{/each}
			</MapLibre>
		</div>

		<div class="table-style">
			<Table.Root>
				<Table.Caption>My OCHRE Items (Placeholder Table)</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Name</Table.Head>
						{#each propertyLabels as property}
							<Table.Head>{property}</Table.Head>
						{/each}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each setItems as item}
						{#if item.identification?.label}
							<Table.Row>
								<Table.Cell>{item.identification.label}</Table.Cell>
								{#each propertyLabels as label}
									<Table.Cell>{getPropertyByLabel(item.properties, label)}</Table.Cell>
								{/each}
							</Table.Row>
						{/if}
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</section>

	<section class="content-section">
		<h2>Ready for Your Next Adventure?</h2>
		<p>
			With Homii's essential guides, you're always prepared. Let us help you unlock a world of
			seamless travel and meaningful connections.
		</p>
		<button class="cta-button"> Join the Homii Community </button>
	</section>
</div>

<style>
	/* New Color Palette Variables */
	:root {
		--font-size: 14px;
		--background: #ffffff;
		--foreground: oklch(0.145 0 0); /* Near black */
		--primary: #030213; /* Very dark blue/black */
		--primary-foreground: oklch(1 0 0); /* White */
		--secondary: oklch(0.95 0.0058 264.53); /* Light bluish grey */
		--secondary-foreground: #030213;
		--muted: #ececf0; /* Light grey */
		--muted-foreground: #717182; /* Medium grey */
		--accent: #e9ebef; /* Very light grey */
		--accent-foreground: #030213;
		--destructive: #d4183d; /* Red */
		--destructive-foreground: #ffffff;
		--border: rgba(0, 0, 0, 0.1);
		--input: transparent;
		--input-background: #f3f3f5;
		--switch-background: #cbced4;
		--font-weight-medium: 500;
		--font-weight-normal: 400;
		--ring: oklch(0.708 0 0); /* Medium grey */
		--radius: 0.625rem;

		/* Homii Brand Colors - Adjusted to new values */
		--homii-burnt-orange: #cc5500;
		--homii-dark-brown: #4a2c2a;
		--homii-light-peach: #ffeee6;
		--homii-cream: #fff8f0;
		--homii-warm-orange: #e67e22;
		--homii-connection: #f39c12;
	}

	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.6;
		font-size: var(--font-size);
		color: var(--foreground);
		background-color: var(--background);
	}

	.landing-page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
	}

	/* Sticky Header Styles */
	.site-header {
		position: sticky;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: var(--primary);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		z-index: 100;
		box-sizing: border-box;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.site-logo-wrapper {
		text-decoration: none;
		display: inline-block;
	}

	.main-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 2rem;
	}

	.main-nav li a {
		color: var(--primary-foreground);
		text-decoration: none;
		font-weight: var(--font-weight-normal);
		transition: color 0.3s ease;
	}

	.main-nav li a:hover {
		color: var(--homii-light-peach);
	}

	.nav-cta {
		background-color: var(--homii-burnt-orange);
		color: var(--white) !important;
		padding: 0.6rem 1.2rem;
		border-radius: var(--radius);
		transition: background-color 0.3s ease;
	}

	.nav-cta:hover {
		background-color: var(--homii-warm-orange);
		color: var(--white) !important;
	}

	/* Spacer to prevent content from hiding under sticky header */
	.header-spacer {
		height: 4.5rem;
		width: 100%;
	}

	/* Hero Content Styles */
	.hero-content {
		text-align: center;
		color: var(--foreground);
		padding: 1.5rem;
		max-width: 900px;
		box-sizing: border-box;
		margin-top: 3rem;
	}

	.main-heading {
		font-size: 3.5rem;
		font-weight: var(--font-weight-medium);
		margin: 0;
		line-height: 1.15;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		color: var(--foreground);
	}

	.sub-heading {
		font-size: 1.5rem;
		font-weight: var(--font-weight-normal);
		margin-top: 1rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		opacity: 0.9;
	}

	.cta-button {
		margin-top: 2rem;
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		font-weight: var(--font-weight-medium);
		color: var(--white);
		background-color: var(--homii-burnt-orange);
		border: none;
		border-radius: var(--radius);
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.cta-button:hover {
		background-color: var(--homii-warm-orange);
		transform: translateY(-2px);
	}

	/* Content Section Styles */
	.content-section {
		max-width: 900px;
		margin: 3rem auto;
		padding: 0 2rem;
		text-align: center;
		box-sizing: border-box;
		width: 100%;
	}

	.content-section h2 {
		font-size: 2.8rem;
		font-weight: var(--font-weight-medium);
		margin-bottom: 1.5rem;
		color: var(--homii-burnt-orange);
	}

	.problem-statement,
	.solution-intro {
		font-size: 1.1rem;
		margin-bottom: 1rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		color: var(--foreground);
	}

	/* Features Section Specific Styles (reused for Essentials) */
	.features {
		background-color: var(--muted);
		padding: 4rem 2rem;
		margin: 3rem 0;
		width: 100%; /* Ensures background spans full width */
		box-sizing: border-box;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Forces 3 columns on one line for larger screens */
		gap: 1.5rem;
		margin-top: 2rem;
		max-width: 900px; /* Centers the grid content within the full-width section */
		margin-left: auto;
		margin-right: auto;
	}

	.feature-card {
		background-color: var(--background);
		padding: 2rem;
		border-radius: var(--radius);
		box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
		text-align: left;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
	}

	.feature-icon {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 0.8rem;
		color: var(--homii-burnt-orange);
	}

	.feature-card h3 {
		font-size: 1.4rem;
		font-weight: var(--font-weight-medium);
		margin-bottom: 0.6rem;
		color: var(--foreground);
	}

	.feature-card p {
		font-size: 0.95rem;
		color: var(--muted-foreground);
	}

	/* Map and Table Specific Styles (from original code) */
	.map-style {
		margin: 2rem auto; /* Adjusted to keep it centered and spaced */
		max-width: 90%;
		width: 100%;
		height: 400px;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--homii-dark-brown); /* Using a brand color */
		border-radius: var(--radius);
		overflow: hidden;
		position: relative;
	}

	.table-style {
		width: 100%;
		max-width: 700px;
		color: var(--foreground); /* Use foreground color for text */
		margin: 2rem auto; /* Center the table */
		text-align: left; /* Align table content to left for readability */
	}

	/* Override Table.Root background to match page background */
	:global(.table-style .TableRoot) {
		background-color: var(--background);
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}
	/* Override Table.Header and Table.Row colors for better contrast */
	:global(.table-style .TableHeader) {
		background-color: var(--accent); /* Light background for header */
		color: var(--foreground);
	}
	:global(.table-style .TableRow) {
		border-bottom: 1px solid var(--border);
	}
	:global(.table-style .TableHead) {
		padding: 1rem;
		font-weight: var(--font-weight-medium);
		color: var(--foreground);
	}
	:global(.table-style .TableCell) {
		padding: 1rem;
		color: var(--foreground);
	}
	:global(.table-style .TableCaption) {
		caption-side: top; /* Position caption at top */
		padding: 1rem 0;
		font-size: 1.2rem;
		font-weight: var(--font-weight-medium);
		color: var(--foreground);
		text-align: center;
	}

	/* Responsive Adjustments */
	@media (max-width: 1024px) {
		.feature-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.site-header {
			flex-direction: column;
			padding: 1rem;
		}
		.main-nav ul {
			gap: 1rem;
			margin-top: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}
		.header-spacer {
			height: 7rem;
		}
		.site-logo-wrapper {
			margin-bottom: 0.5rem;
		}

		.main-heading {
			font-size: 2.5rem;
			white-space: normal;
		}

		.sub-heading {
			font-size: 1.1rem;
			margin-top: 1rem;
		}

		.cta-button {
			padding: 0.8rem 2rem;
			font-size: 1rem;
			margin-top: 1.5rem;
		}

		.content-section {
			margin: 2rem auto;
			padding: 0 1.5rem;
		}

		.content-section h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}

		.problem-statement,
		.solution-intro {
			font-size: 1rem;
			margin-bottom: 0.8rem;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}

		.features {
			padding: 2.5rem 1.5rem;
			margin: 2rem 0;
		}

		.feature-card {
			padding: 1.5rem;
		}

		.feature-icon {
			font-size: 2rem;
		}

		.feature-card h3 {
			font-size: 1.2rem;
		}

		.feature-card p {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 480px) {
		.main-nav li a {
			padding: 0.3rem 0.5rem;
		}
		.nav-cta {
			padding: 0.5rem 1rem;
		}
		.main-heading {
			font-size: 2rem;
		}
		.sub-heading {
			font-size: 0.9rem;
		}
		.hero-content {
			padding: 1rem;
		}
	}
</style>
