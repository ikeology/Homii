<script lang="ts">
	import HomiiLogo from '$lib/components/ui/logo/HomiiLogo.svelte';

	let { slug } = $props(); // Keeping slug if you need it for dynamic content later

	const pageTitle = 'Travel Essentials: Pack Smart, Travel Light';
	const introText =
		"Navigating your packing list can be daunting. Our guide simplifies essential items, ensuring you're prepared for any adventure without overpacking.";

	// Section 1: Personal Care & Health
	const section1Title = 'Health & Personal Comfort';
	const section1Description =
		'Prioritizing your well-being on the go means having the right personal care and health items readily available. These essentials ensure comfort and readiness for minor incidents.';
	const item1_1 = '<b>Medication</b>: Prescription and over-the-counter essentials.';
	const item1_2 = '<b>First-Aid Kit</b>: Band-aids, antiseptic wipes, pain relievers.';
	const item1_3 = '<b>Toiletries</b>: Travel-sized shampoo, soap, toothbrush, toothpaste.';
	const item1_4 = '<b>Sunscreen & Insect Repellent</b>: Essential for outdoor activities.';

	// Section 2: Tech & Connectivity
	const section2Title = 'Tech & Connectivity Must-Haves';
	const section2Description =
		'Stay connected and powered up with smart tech choices. These items are crucial for navigation, communication, and capturing your travel memories.';
	const item2_1 = '<b>Universal Adapter</b>: For charging devices in any country.';
	const item2_2 = '<b>Portable Power Bank</b>: Keep your phone charged on the go.';
	const item2_3 = '<b>Headphones</b>: Noise-canceling or earbuds for travel comfort.';
	const item2_4 = '<b>Camera & Memory Cards</b>: Document your journey.';

	const closingText =
		"A well-packed bag contributes significantly to a smooth travel experience. Use this guide to ensure you have everything you need, and nothing you don't.";
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

	<div class="page-content-wrapper">
		<h1>{pageTitle}</h1>
		<p>
			{introText}
		</p>

		<img
			src="/path/to/your/travel-essentials-image.jpg"
			alt="Travel Essentials"
			class="main-image"
		/>

		<section class="content-section">
			<h2>{section1Title}</h2>
			<p>{section1Description}</p>
			<ul class="item-list">
				<li><span class="icon">🧴</span> {@html item1_1}</li>
				<li><span class="icon">🩹</span> {@html item1_2}</li>
				<li><span class="icon">🧼</span> {@html item1_3}</li>
				<li><span class="icon">☀️</span> {@html item1_4}</li>
			</ul>
		</section>

		<section class="content-section">
			<h2>{section2Title}</h2>
			<p>{section2Description}</p>
			<ul class="item-list">
				<li><span class="icon">🔌</span> {@html item2_1}</li>
				<li><span class="icon">🔋</span> {@html item2_2}</li>
				<li><span class="icon">🎧</span> {@html item2_3}</li>
				<li><span class="icon">📸</span> {@html item2_4}</li>
			</ul>
		</section>

		<p class="closing-text">{closingText}</p>
	</div>
</div>

<style>
	/* Global styles */
	:global(body) {
		margin: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		line-height: 1.6;
		font-size: 12px; /* Consistent with "Before You Go" page */
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

	/* Sticky Header Styles (Copied from previous pages) */
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

	/* Spacer to push content down from sticky header */
	.header-spacer {
		height: 4.5rem; /* Matches header height */
		width: 100%;
	}

	/* Main page content wrapper */
	.page-content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 900px; /* Consistent content width */
		padding: 2rem;
		box-sizing: border-box;
		color: #191970; /* Midnight Blue text for content */
		text-align: center;
		flex-grow: 1; /* Allows content area to fill remaining space */
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		line-height: 1.2;
		max-width: 800px;
	}

	p {
		margin-top: 1.5rem;
		max-width: 700px;
		font-size: 1rem;
		line-height: 1.6;
	}

	.main-image {
		width: 100%;
		max-width: 700px; /* Adjust as needed */
		height: auto;
		margin: 2rem 0;
		border-radius: 0.625rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.content-section {
		max-width: 900px;
		margin: 2rem auto; /* Adjusted margin for sections */
		padding: 0 1.5rem; /* Padding to match other content sections */
		text-align: center;
		box-sizing: border-box;
		width: 100%;
	}

	.content-section h2 {
		font-size: 2.2rem; /* Slightly smaller than main H1 */
		margin-bottom: 1rem;
		color: #cc5500; /* Homii burnt-orange */
	}

	.content-section p {
		font-size: 1rem;
		margin-bottom: 1rem;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
		color: #191970; /* Midnight Blue text */
	}

	.item-list {
		text-align: left;
		max-width: 700px;
		margin: 1.5rem auto;
		padding: 0;
		list-style: none; /* Remove default list bullets */
	}

	.item-list li {
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

	.closing-text {
		margin-top: 3rem; /* More space before closing text */
		font-style: italic;
	}

	/* Responsive Adjustments (Copied and adapted) */
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
			height: 7rem; /* Adjust height for stacked header */
		}
		.site-logo-wrapper {
			margin-bottom: 0.5rem;
		}

		h1 {
			font-size: 1.8rem;
			white-space: normal;
		}

		p {
			font-size: 0.9rem;
			padding: 0 1rem; /* Add padding for smaller screens */
		}

		.main-image {
			margin: 1.5rem 0;
		}

		.content-section {
			margin: 1.5rem auto;
			padding: 0 1rem;
		}

		.content-section h2 {
			font-size: 1.8rem;
		}

		.content-section p {
			font-size: 0.9rem;
		}

		.item-list {
			max-width: 90%;
			padding: 0 1rem;
		}

		.item-list li {
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
		h1 {
			font-size: 1.6rem;
		}
	}
</style>
