<!-- New init for Homii project 

I ran into a few issues with this assignment and would really appreciate any pointers. I used AI to assist with styling, and I referenced the class slides for the other components.

I'm having trouble with object types — one of them keeps returning "[object Object]" — and although I believe my routing is set up correctly (based on your Vercel example), the pages don’t seem to be rendering as expected.

I’m submitting what I have, but please let me know if there’s an opportunity to resubmit with the missing or corrected components.

Best,  
Isaiah
-->

<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { getPropertyByLabel, getUniquePropertyLabels } from '@digitalculture/ochre-sdk';
	import { MapLibre, DefaultMarker } from 'svelte-maplibre';
	const { data } = $props();
	const setItems = data.set.items;
	const propertyLabels = data.set.items.length
		? getUniquePropertyLabels(data.set.items[0]!.properties)
		: [];
</script>

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

<div class="page-style">
	<div class="table-style">
		<Table.Root>
			<Table.Caption>My OCHRE Items</Table.Caption>
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
					<Table.Row>
						<Table.Cell>{item.identification.label}</Table.Cell>

						{#each propertyLabels as label}
							<Table.Cell>{getPropertyByLabel(item.properties, label)}</Table.Cell>
						{/each}
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>

<style>
	.page-style {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		color: white;
		background-color: white;
		padding: 2rem;
	}

	.table-style {
		width: 100%;
		max-width: 700px;
		color: black;
	}

	.map-style {
		margin: 2rem auto;
		max-width: 90%;
		width: 100%;
		height: 400px;
		align-items: center;
		justify-content: center;
		border: 2px solid #2f4f4f;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
	}
</style>
