<script lang="ts">
	export let data: {
		item: {
			items?: {
				identification: { label: string };
				image?: { url?: string };
				properties: {
					label: string;
					values: { content: string }[];
				}[];
			}[];
		};
	};

	const setItem = data.item;
	const items = setItem.items ?? [];
</script>

{#each items as subItem}
	<h2>{subItem.identification.label}</h2>

	{#if subItem.image?.url}
		<img src={subItem.image.url} alt={subItem.identification.label} class="item-image" />
	{:else}
		<p class="no-image">[ No image available ]</p>
	{/if}

	<ul>
		{#each subItem.properties as prop}
			<li>{prop.label}: {prop.values[0]?.content ?? 'null'}</li>
		{/each}
	</ul>
{/each}

<style>
	h2 {
		margin-top: 1.5rem;
		font-size: 1.25rem;
		color: #2c3e50;
	}

	ul {
		padding-left: 1rem;
		margin-bottom: 2rem;
	}

	li {
		margin-bottom: 0.5rem;
	}
</style>
