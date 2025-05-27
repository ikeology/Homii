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

<div class="container">
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
						{#each propertyLabels as propertyLabel}
							<Table.Cell>{getPropertyByLabel(item.properties, propertyLabel)}</Table.Cell>
						{/each}
						<Table.Cell>{item.identification.label}</Table.Cell>
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
</style>
