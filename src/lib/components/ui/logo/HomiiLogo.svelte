<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let variant: 'full' | 'icon' | 'text' = 'full';
	export let className: string = '';

	const iconSizes = {
		sm: { width: 32, height: 32 },
		md: { width: 48, height: 48 },
		lg: { width: 64, height: 64 },
		xl: { width: 96, height: 96 }
	};

	// Derived properties for SVG dimensions
	$: svgWidth = iconSizes[size].width;
	$: svgHeight = iconSizes[size].height;

	// Derived properties for text font sizes
	$: textFontSize =
		size === 'sm' ? '18px' : size === 'md' ? '24px' : size === 'lg' ? '32px' : '48px';
</script>

{#if variant === 'icon'}
	<div class="inline-flex {className}">
		<svg
			width={svgWidth}
			height={svgHeight}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="flex-shrink-0"
		>
			<circle
				cx="24"
				cy="24"
				r="22"
				fill="var(--homii-light-peach)"
				stroke="var(--homii-cream)"
				stroke-width="2"
			/>

			<path
				d="M16 28V20C16 18.5 17 16 19 16H29C31 16 32 18.5 32 20V28"
				fill="var(--homii-dark-brown)"
				stroke="var(--homii-dark-brown)"
				stroke-width="2"
				stroke-linejoin="round"
			/>

			<path
				d="M14 20L24 12L34 20"
				fill="none"
				stroke="var(--homii-burnt-orange)"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>

			<circle cx="20" cy="24" r="2" fill="var(--homii-warm-orange)" />
			<circle cx="28" cy="24" r="2" fill="var(--homii-warm-orange)" />
			<circle cx="24" cy="20" r="2" fill="var(--homii-connection)" />

			<path
				d="M20 24L24 20L28 24"
				stroke="var(--homii-connection)"
				stroke-width="1.5"
				stroke-linecap="round"
				opacity="0.7"
			/>

			<rect x="15" y="28" width="18" height="4" rx="2" fill="var(--homii-burnt-orange)" />

			<rect
				x="22"
				y="24"
				width="4"
				height="8"
				rx="2"
				fill="var(--homii-cream)"
				stroke="var(--homii-dark-brown)"
				stroke-width="1"
			/>
		</svg>
	</div>
{:else if variant === 'text'}
	<div class="inline-flex {className}">
		<span
			class="tracking-tight"
			style:font-family={'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}
			style:font-size={textFontSize}
			style:font-weight="600"
			style:color="var(--homii-dark-brown)"
		>
			Hom<span style:color="var(--homii-burnt-orange)">ii</span>
		</span>
	</div>
{:else}
	<div class="inline-flex items-center gap-3 {className}">
		<svg
			width={svgWidth}
			height={svgHeight}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="flex-shrink-0"
		>
			<circle
				cx="24"
				cy="24"
				r="22"
				fill="var(--homii-light-peach)"
				stroke="var(--homii-cream)"
				stroke-width="2"
			/>

			<path
				d="M16 28V20C16 18.5 17 16 19 16H29C31 16 32 18.5 32 20V28"
				fill="var(--homii-dark-brown)"
				stroke="var(--homii-dark-brown)"
				stroke-width="2"
				stroke-linejoin="round"
			/>

			<path
				d="M14 20L24 12L34 20"
				fill="none"
				stroke="var(--homii-burnt-orange)"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>

			<circle cx="20" cy="24" r="2" fill="var(--homii-warm-orange)" />
			<circle cx="28" cy="24" r="2" fill="var(--homii-warm-orange)" />
			<circle cx="24" cy="20" r="2" fill="var(--homii-connection)" />

			<path
				d="M20 24L24 20L28 24"
				stroke="var(--homii-connection)"
				stroke-width="1.5"
				stroke-linecap="round"
				opacity="0.7"
			/>

			<rect x="15" y="28" width="18" height="4" rx="2" fill="var(--homii-burnt-orange)" />

			<rect
				x="22"
				y="24"
				width="4"
				height="8"
				rx="2"
				fill="var(--homii-cream)"
				stroke="var(--homii-dark-brown)"
				stroke-width="1"
			/>
		</svg>
		<span
			class="tracking-tight"
			style:font-family={'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}
			style:font-size={textFontSize}
			style:font-weight="600"
			style:color="var(--homii-dark-brown)"
		>
			Hom<span style:color="var(--homii-burnt-orange)">ii</span>
		</span>
	</div>
{/if}
