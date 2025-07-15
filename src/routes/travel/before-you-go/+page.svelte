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

	<div class="page-container">
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
	/* New Color Palette Variables - Copied from your home page */
	:root {
		--font-size: 12px; /* Changed base font size */
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
		--homii-midnight-blue: #191970; /* Added Midnight Blue */
	}

	/* Global styles - ensure these are applied globally, e.g., in app.css or layout.svelte */
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.6;
		font-size: var(--font-size); /* Uses new base font size */
		color: var(--foreground);
		background-color: var(--background);
	}

	/* Styles for the overall page wrapper, copied from home page */
	.landing-page-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
	}

	/* Sticky Header Styles - Copied from home page */
	.site-header {
		position: sticky;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: var(--primary); /* Dark header */
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
		color: var(--primary-foreground); /* White text for header links */
		text-decoration: none;
		font-weight: var(--font-weight-normal);
		transition: color 0.3s ease;
	}

	.main-nav li a:hover {
		color: var(--homii-light-peach); /* Light peach on hover */
	}

	.nav-cta {
		background-color: var(--homii-burnt-orange);
		color: var(--white) !important; /* Ensure white text */
		padding: 0.6rem 1.2rem;
		border-radius: var(--radius);
		transition: background-color 0.3s ease;
	}

	.nav-cta:hover {
		background-color: var(--homii-warm-orange);
		color: var(--white) !important;
	}

	/* Specific styles for this page's content area */
	.page-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: calc(100vh - 4.5rem); /* Adjust min-height to account for header */
		background-color: var(--homii-burnt-orange); /* Burnt orange background */
		color: var(--homii-midnight-blue); /* Text color changed to Midnight Blue */
		text-align: center;
		padding: 2rem;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		flex-grow: 1; /* Allow it to take up available space */
		width: 100%; /* Ensure it spans full width */
		box-sizing: border-box; /* Include padding in width */
	}

	h1 {
		/* Adjusted font size relative to the new base font size (12px) */
		font-size: 2rem; /* Adjusted from 2.5rem */
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
		font-size: 1rem; /* Adjusted from 1.15rem */
		line-height: 1.5;
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.icon {
		/* Renamed from .star-icon to .icon for generic use */
		font-size: 1.2em; /* Slightly larger than text for visibility */
		line-height: 1.5;
		flex-shrink: 0;
	}

	p {
		margin-top: 1.5rem;
		max-width: 700px;
		font-size: 1rem; /* Adjusted from 1.1rem */
		line-height: 1.6;
	}

	/* Responsive Adjustments (Copied from home page, adjusted for this page) */
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
			font-size: 1.8rem; /* Adjusted */
			white-space: normal;
		}

		.tip-list {
			max-width: 90%;
			padding: 0 1rem;
		}

		.tip-list li {
			font-size: 0.9rem; /* Adjusted */
		}

		p {
			font-size: 0.9rem; /* Adjusted */
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
			font-size: 1.6rem; /* Adjusted */
		}
	}
</style>
