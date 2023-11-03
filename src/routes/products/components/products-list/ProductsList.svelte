<script lang="ts">
	import type { ProductItem } from '$services/products/get-products/types';
	import Product from '../product/Product.svelte';

	export let products: ProductItem[] = [];
</script>

<div class="products__container">
	{#each products as product}
		<Product {...product} isFavorite={product.is_favorite} />
	{/each}
</div>

<style lang="scss">
	.products__container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>
