<script lang="ts">
	import HomiiLogo from '$lib/components/ui/logo/HomiiLogo.svelte';

	let { slug } = $props(); // Keeping slug if you need it for dynamic content later

	const pageTitle = 'Before You Go: Your Ultimate Pre-Travel Checklist';
	const introText =
		"Ensure a smooth and stress-free journey with our comprehensive guide to pre-departure essentials. From vital documents to cultural insights, we've got you covered.";

	const tip1 =
		'<b>Confirm</b> visa and entry requirements for your destination and check passport validity.';
	const tip2 =
		'<b>Research</b> local health advisories, vaccinations, and pack a basic first-aid kit.';
	const tip3 =
		'<b>Understand</b> local currency, banking options, and inform your bank of travel dates.';
	const tip4 =
		'<b>Plan</b> connectivity using an eSIM, international roaming, or a local SIM card.';
	const tip5 = '<b>Familiarize</b> yourself with local customs, etiquette, and basic phrases.';
	const tip6 =
		'<b>Organize</b> travel insurance covering medical emergencies, cancellations, and lost luggage.';
	const tip7 = '<b>Pack</b> adaptors and voltage converters, checking local power standards.';
	const tip8 =
		'<b>Make</b> copies of important documents and store them securely, physically and digitally.';

	const closingText =
		"With these preparations, you're set to embrace your adventure with confidence and peace of mind.";
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

	<div class="page-content-wrapper">
		<h1>{pageTitle}</h1>
		<p>
			{introText}
		</p>

		<ul class="tip-list">
			<li><span class="icon">🧳</span> {@html tip1}</li>
			<li><span class="icon">🧳</span> {@html tip2}</li>
			<li><span class="icon">🧳</span> {@html tip3}</li>
			<li><span class="icon">🧳</span> {@html tip4}</li>
			<li><span class="icon">🧳</span> {@html tip5}</li>
			<li><span class="icon">🧳</span> {@html tip6}</li>
			<li><span class="icon">🧳</span> {@html tip7}</li>
			<li><span class="icon">🧳</span> {@html tip8}</li>
		</ul>

		<p>{closingText}</p>
	</div>
</div>

<style>
	/* Explicit Colors - Removed CSS variables */

	/* Homii Brand Colors (defined here for clarity, but used directly below) */
	/* --homii-burnt-orange: #cc5500; */
	/* --homii-dark-brown: #4a2c2a; */
	/* --homii-light-peach: #ffeee6; */
	/* --homii-cream: #fff8f0; */
	/* --homii-warm-orange: #e67e22; */
	/* --homii-connection: #f39c12; */
	/* --homii-midnight-blue: #191970; */

	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.6;
		font-size: 12px; /* Set directly */
		color: #030213; /* Near black foreground */
		background-color: #ffeee6; /* Homii light peach background for the entire page */
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
		background-color: #030213; /* Very dark blue/black primary */
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
		color: #ffeee6; /* Light peach primary-foreground */
		text-decoration: none;
		font-weight: 400;
		transition: color 0.3s ease;
	}

	.main-nav li a:hover {
		color: #fff8f0; /* Homii cream on hover for navigation */
	}

	.nav-cta {
		background-color: #cc5500; /* Homii burnt-orange */
		color: white !important; /* Ensure white text */
		padding: 0.6rem 1.2rem;
		border-radius: 0.625rem;
		transition: background-color 0.3s ease;
	}

	.nav-cta:hover {
		background-color: #e67e22; /* Homii warm-orange */
		color: white !important;
	}

	/* New wrapper for page content to replace the old .page-container for background purposes */
	.page-content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* min-height needs to account for the header's height if it's not a full-page background color */
		min-height: calc(100vh - 4.5rem); /* Adjust min-height to account for header */
		/* Removed background-color here as it's now on the global body */
		color: #191970; /* Midnight Blue text */
		text-align: center;
		padding: 2rem;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		flex-grow: 1;
		width: 100%;
		max-width: 900px; /* Constrain content width */
		box-sizing: border-box;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		line-height: 1.2;
		max-width: 800px;
	}

	.tip-list {
		text-align: left;
		max-width: 700px;
		margin: 1.5rem auto;
		padding: 0;
		list-style: none;
	}

	.tip-list li {
		margin: 0.8rem 0;
		font-size: 1rem;
		line-height: 1.5;
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.icon {
		font-size: 1.2em;
		line-height: 1.5;
		flex-shrink: 0;
	}

	p {
		margin-top: 1.5rem;
		max-width: 700px;
		font-size: 1rem;
		line-height: 1.6;
	}

	/* Responsive Adjustments */
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

		h1 {
			font-size: 1.8rem;
			white-space: normal;
		}

		.tip-list {
			max-width: 90%;
			padding: 0 1rem;
		}

		.tip-list li {
			font-size: 0.9rem;
		}

		p {
			font-size: 0.9rem;
			padding: 0 1rem;
		}
	}

	@media (max-width: 480px) {
		.main-nav li a {
			padding: 0.3rem 0.5rem;
		}
		.nav-cta {
			padding: 0.5rem 1rem;
		}
		h1 {
			font-size: 1.6rem;
		}
	}
</style>
