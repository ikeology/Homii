<script lang="ts">
	const { item } = $props().data;
	const items = item?.items ?? [];
</script>

{#each items as subItem}

<h2>{subItem.identification.label}</h2>

<ul> {#each subItem.properties as prop}
	<li>{prop.label}:{prop.values[0]?.content ?? 'null'}</li>
{/each}
</ul>


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
