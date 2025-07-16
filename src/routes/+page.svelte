<script lang="ts">
	import HomiiLogo from '$lib/components/ui/logo/HomiiLogo.svelte';

	const siteTitle = 'Homii';
	const mainHeading = 'Belong Anywhere';
	const subHeading =
		'Redefining global experiences for digital nomads, slow travelers, and expats. Find your community, safely.';
	const callToActionText = 'Join Homii';

	const problemStatement =
		'Digital nomads, slow travelers, and expats deserve safe, reliable experiences and recommendations from trusted sources. Local businesses want to connect directly with new regulars. Creators need a digital space to host their followers and build community.';
	const solutionIntro =
		'Homii is where logistics meet belonging. We’re building the infrastructure for identity-aware travel planning, city-specific guides, trusted local business reviews, and real-time connections.';
	const featuresHeading = 'More Than Just Travel';
	const feature1 = {
		title: 'Identity-Aware Connections',
		description:
			'Create profiles reflecting who you are (LGBTQ+, Black, Muslim, solo female, etc.) and get curated insights from shared experiences.',
		icon: '👥'
	};
	const feature2 = {
		title: 'Trusted Local Guides',
		description:
			'Discover housing, events, visa info, coworking spots, and more, all reviewed by a community you trust.',
		icon: '📍'
	};
	const feature3 = {
		title: 'Empowering Local Businesses & Communities',
		description:
			'Local businesses gain visibility, and community groups can host events and welcome newcomers with dedicated tools.',
		icon: '🤝'
	};
	const missionStatement =
		'The travel industry has spent decades optimizing for booking. Homii is optimizing for belonging. We’re not just building a marketplace; we’re building the system people didn’t know they needed—but won’t travel without again.';
	const launchCities =
		'Launching first in high-growth cities like Hanoi, Medellín, and Bangkok, where travelers seek trusted connections from day one.';
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
		<h2>Why Homii?</h2>
		<p class="problem-statement">
			{problemStatement}
		</p>
		<p class="solution-intro">
			{solutionIntro}
		</p>
	</section>

	<section class="content-section features">
		<h2>{featuresHeading}</h2>
		<div class="feature-grid">
			<div class="feature-card">
				<span class="feature-icon">{feature1.icon}</span>
				<h3>{feature1.title}</h3>
				<p>{feature1.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{feature2.icon}</span>
				<h3>{feature2.title}</h3>
				<p>{feature2.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{feature3.icon}</span>
				<h3>{feature3.title}</h3>
				<p>{feature3.description}</p>
			</div>
		</div>
	</section>

	<section class="content-section">
		<h2>Our Mission</h2>
		<p>{missionStatement}</p>
		<p class="launch-cities">{launchCities}</p>
		<button class="cta-button">
			{callToActionText}
		</button>
	</section>
</div>

<style>
	/* Removed :root variables and applied colors directly */

	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.6;
		font-size: 14px; /* Keeping the 14px you had in :root */
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
		font-weight: 400; /* Directly set font-weight-normal */
		transition: color 0.3s ease;
	}

	.main-nav li a:hover {
		color: #fff8f0; /* Homii cream on hover for navigation */
	}

	.nav-cta {
		background-color: #cc5500; /* Homii burnt-orange */
		color: white !important; /* Ensure white text */
		padding: 0.6rem 1.2rem;
		border-radius: 0.625rem; /* Directly set radius */
		transition: background-color 0.3s ease;
	}

	.nav-cta:hover {
		background-color: #e67e22; /* Homii warm-orange */
		color: white !important;
	}

	/* Spacer to prevent content from hiding under sticky header */
	.header-spacer {
		height: 4.5rem;
		width: 100%;
	}

	/* Hero Content Styles */
	.hero-content {
		text-align: center;
		color: #030213; /* Foreground color */
		padding: 1.5rem;
		max-width: 900px;
		box-sizing: border-box;
		margin-top: 3rem;
	}

	.main-heading {
		font-size: 3.5rem;
		font-weight: 500; /* Directly set font-weight-medium */
		margin: 0;
		line-height: 1.15;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: inline-block;
		color: #030213; /* Foreground color */
	}

	.sub-heading {
		font-size: 1.5rem;
		font-weight: 400; /* Directly set font-weight-normal */
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
		font-weight: 500; /* Directly set font-weight-medium */
		color: white; /* Direct white */
		background-color: #cc5500; /* Homii burnt-orange */
		border: none;
		border-radius: 0.625rem; /* Directly set radius */
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			transform 0.2s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.cta-button:hover {
		background-color: #e67e22; /* Homii warm-orange */
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
		font-weight: 500; /* Directly set font-weight-medium */
		margin-bottom: 1.5rem;
		color: #cc5500; /* Homii burnt-orange */
	}

	.problem-statement,
	.solution-intro {
		font-size: 1.1rem;
		margin-bottom: 1rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		color: #030213; /* Foreground color */
	}

	/* Features Section Specific Styles */
	.features {
		background-color: #fff8f0; /* Homii cream (was muted) */
		padding: 4rem 2rem;
		margin: 3rem 0;
		width: 100%;
		box-sizing: border-box;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 2rem;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.feature-card {
		background-color: #ffeee6; /* Homii light peach (was background) */
		padding: 2rem;
		border-radius: 0.625rem; /* Directly set radius */
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
		color: #cc5500; /* Homii burnt-orange */
	}

	.feature-card h3 {
		font-size: 1.4rem;
		font-weight: 500; /* Directly set font-weight-medium */
		margin-bottom: 0.6rem;
		color: #030213; /* Foreground color */
	}

	.feature-card p {
		font-size: 0.95rem;
		color: #717182; /* Muted-foreground color */
	}

	.launch-cities {
		font-style: italic;
		margin-top: 1.5rem;
		color: #717182; /* Muted-foreground color */
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
