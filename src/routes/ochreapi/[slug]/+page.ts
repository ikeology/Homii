import { fetchItem } from '@digitalculture/ochre-sdk';

export async function load({ params }: { params: { slug: string } }) {
	const { error, item } = await fetchItem(params.slug, 'set');

	if (error !== null) {
		throw new Error('Response failed!');
	}

	return { item };
}
