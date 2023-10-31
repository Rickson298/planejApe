<script lang="ts">
	import Product from '../product/Product.svelte';
	import { fakeProducts } from './mocks';
</script>

<div class="products__container">
	{#each fakeProducts as product}
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
