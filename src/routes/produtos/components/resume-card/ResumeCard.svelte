<script lang="ts">
	import { formatCurrency } from '$shared/utils';
	import { Flex, Typography } from 'planejape-ui-svelte';
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let room = '';
	export let quantityItems = 0;
	export let price = 0;

	const currencyPrice = formatCurrency(price);
</script>

<div class="resume-card">
	<Flex justifyContent="space-between" width="100%">
		<Typography>{room}</Typography>
		<svelte:component this={icon} size="26px" color="var(--white)" />
	</Flex>
	<Flex direction="column" alignItems="start">
		<Typography fontSize="0.75rem">
			{quantityItems}
			{quantityItems > 1 ? 'itens' : 'item'}
		</Typography>
		<Typography fontSize="0.875rem">{currencyPrice}</Typography>
	</Flex>
</div>

<style>
	.resume-card {
		padding: 1rem;
		border-radius: 0.5rem;
		border: 1px solid var(--blue-300);
		min-height: 110px;
		flex-direction: column;
		justify-content: space-between;
		display: flex;
		flex: 1 1 175px;
	}
</style>
