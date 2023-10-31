<script lang="ts">
	import { Skeleton } from 'planejape-ui-svelte';
</script>

<div class="products__container">
	{#each Array.from({ length: 10 }) as _}
		<Skeleton width="100%" isLoading>
			<div class="product-card" />
		</Skeleton>
	{/each}
</div>

<style lang="scss">
	.product-card {
		border-radius: 1.5rem;
		overflow: hidden;
		min-height: 335px;
	}

	@media (max-width: 560px) {
		.product-card {
			width: 100%;
		}
	}

	.products__container {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}
</style>
