import { fetchItem } from '@digitalculture/ochre-sdk';
export async function load() {
	const { error, item } = await fetchItem('8824bf5e-152c-48af-b198-ef6888cc530f', 'spatialUnit');
	if (error !== null) {
		throw new Error('Response failed!');
	}
	return { item };
}
