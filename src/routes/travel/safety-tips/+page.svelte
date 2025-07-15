<script lang="ts">
	import HomiiLogo from '$lib/components/ui/logo/HomiiLogo.svelte';

	const pageTitle = 'Safety Tips';
	const mainHeading = 'Stay Safe, Explore Freely';
	const subHeading =
		'Your well-being is our priority. Learn how Homii helps you navigate new places with confidence.';
	const callToActionText = 'Explore Resources';

	const section1Heading = "Homii's Approach to Safety";
	const section1Paragraph1 =
		"At Homii, we believe that true belonging starts with feeling secure. We've designed our platform with multiple layers of safety in mind, from verified profiles to community-driven insights, ensuring you have the tools and information to make informed decisions.";
	const section1Paragraph2 =
		"Our goal is to empower you with knowledge and resources, fostering a trusted environment where you can connect, explore, and live without undue worry. Your safety is a shared responsibility, and we're here to support you every step of the way.";

	const tipsHeading = 'Essential Safety Tips for Travelers';
	const tip1 = {
		title: 'Trust Your Instincts',
		description:
			'If a situation feels off, it probably is. Prioritize your gut feeling and remove yourself from uncomfortable situations.',
		icon: '💡'
	};
	const tip2 = {
		title: 'Share Your Itinerary',
		description:
			'Always let a trusted friend or family member know your travel plans, accommodations, and expected return dates.',
		icon: '📍'
	};
	const tip3 = {
		title: 'Secure Your Valuables',
		description:
			'Use hotel safes, keep important documents secure, and be aware of your surroundings, especially in crowded areas.',
		icon: '🔒'
	};
	const tip4 = {
		title: 'Local Emergency Contacts',
		description:
			"Familiarize yourself with local emergency numbers (police, ambulance) and your country's embassy or consulate.",
		icon: '🚨'
	};
	const tip5 = {
		title: 'Stay Connected',
		description:
			'Ensure your phone is charged, and consider a local SIM card or eSIM for reliable communication and data access.',
		icon: '📱'
	};
	const tip6 = {
		title: 'Research Local Customs',
		description:
			'Understanding local norms and traditions can help you avoid misunderstandings and show respect.',
		icon: '🌍'
	};

	const communitySafetyHeading = 'Community Guidelines & Reporting';
	const communitySafetyParagraph =
		'Homii thrives on trust and mutual respect. We have strict community guidelines to ensure a safe environment for all members. If you encounter any behavior that violates these guidelines, please report it immediately. Our moderation team is dedicated to reviewing reports and taking appropriate action to maintain a positive and secure community space.';

	const additionalResources =
		'For additional safety information and travel advisories, consult official government travel websites and local authorities.';
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
		<h2>{section1Heading}</h2>
		<p class="problem-statement">
			{section1Paragraph1}
		</p>
		<p class="solution-intro">
			{section1Paragraph2}
		</p>
	</section>

	<section class="content-section features">
		<h2>{tipsHeading}</h2>
		<div class="feature-grid">
			<div class="feature-card">
				<span class="feature-icon">{tip1.icon}</span>
				<h3>{tip1.title}</h3>
				<p>{tip1.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{tip2.icon}</span>
				<h3>{tip2.title}</h3>
				<p>{tip2.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{tip3.icon}</span>
				<h3>{tip3.title}</h3>
				<p>{tip3.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{tip4.icon}</span>
				<h3>{tip4.title}</h3>
				<p>{tip4.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{tip5.icon}</span>
				<h3>{tip5.title}</h3>
				<p>{tip5.description}</p>
			</div>
			<div class="feature-card">
				<span class="feature-icon">{tip6.icon}</span>
				<h3>{tip6.title}</h3>
				<p>{tip6.description}</p>
			</div>
		</div>
	</section>

	<section class="content-section">
		<h2>{communitySafetyHeading}</h2>
		<p>{communitySafetyParagraph}</p>
		<p class="launch-cities">{additionalResources}</p>
		<button class="cta-button secondary-cta"> Report an Issue </button>
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

	.secondary-cta {
		background-color: var(--homii-dark-brown);
	}

	.secondary-cta:hover {
		background-color: oklch(0.2 0 0);
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

	/* Features Section Specific Styles */
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

	.launch-cities {
		font-style: italic;
		margin-top: 1.5rem;
		color: var(--muted-foreground);
	}

	/* Responsive Adjustments */
	@media (max-width: 1024px) {
		.feature-grid {
			grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
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
			grid-template-columns: 1fr; /* 1 column on mobile */
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
