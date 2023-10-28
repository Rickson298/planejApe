<script lang="ts">
	import { Flex, Table } from 'planejape-ui-svelte';
	import Star from 'phosphor-svelte/lib/Star';

	const fakeData = [
		{
			product: 'Geladeira',
			site: {
				name: 'Amazon',
				url: 'https://amazon.com.br/geladeira'
			},
			room: 'Cozinha',
			price: 3500,
			is_favorite: true
		},
		{
			product: 'Geladeira',
			site: {
				name: 'Amazon',
				url: 'https://amazon.com.br/geladeira'
			},
			room: 'Cozinha',
			price: 3500,
			is_favorite: false
		}
	];
</script>

<Table data={fakeData} let:item>
	<thead slot="header">
		<th>Produto</th>
		<th>Site</th>
		<th>Cômodo</th>
		<th>Valor</th>
	</thead>
	<tr>
		<td>{item.product}</td>
		<td>{item.site.name}</td>
		<td>{item.room}</td>
		<td>
			<Flex justifyContent="space-between" width="100%" gap="1rem">
				{item.price}
				{#if item.is_favorite}
					<Star color="#4A4535" />
				{:else}
					<Star color="#BFC217" weight="fill" />
				{/if}
			</Flex>
		</td>
	</tr>
</Table>

<style lang="scss">
	:global(table) {
		width: 100%;
	}
</style>
