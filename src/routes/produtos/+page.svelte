<script>
	import { Button, Flex, Input, Typography } from 'planejape-ui-svelte';

	import Funnel from 'phosphor-svelte/lib/Funnel';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import PlusCircle from 'phosphor-svelte/lib/PlusCircle';

	import { LaptopContainer } from '$core/components';
	import { PageTitle } from '$components';
	import QuickResume from './components/quick-resume/QuickResume.svelte';
	import ProductsTable from './components/products-table/ProductsTable.svelte';
</script>

<svelte:head>
	<title>Produtos</title>
	<meta name="description" content="Organize seu apartamento facilmente com o planejApê" />
</svelte:head>

<Flex width="100%	" direction="column" alignItems="start" gap="3rem">
	<PageTitle
		title="Produtos do apartamento"
		subtitle="Veja os produtos que você salvou para seu apartamento"
	/>

	<div class="page__content">
		<div class="left__container">
			<div class="search__container">
				<Input rightIcon={MagnifyingGlass} placeholder="Pesquise por algum item" />
				<Button secondary>
					<Funnel size={22} />
					Filtro avançado
				</Button>
			</div>
			<Flex direction="column" width="100%">
				<Flex justifyContent="space-between" width="100%" alignItems="center">
					<Typography fontSize="1.375rem" fontWeight="600">Produtos</Typography>
					<Button>
						<PlusCircle size={22} />
						Adicionar produto
					</Button>
				</Flex>
				<LaptopContainer keepInLargeBreakpoints width="100%">
					<ProductsTable />
				</LaptopContainer>
			</Flex>
		</div>
		<QuickResume />
	</div>
</Flex>

<style lang="scss">
	.search__container {
		display: grid;
		gap: 1rem;
		grid-template-columns: auto max-content;
	}

	.page__content {
		width: 100%;
		display: grid;
		grid-template-columns: 1.75fr minmax(auto, 400px);
		gap: 2rem;

		@media (max-width: 1350px) {
			gap: 1rem;
			grid-template-columns: 1fr;
		}
	}
	.left__container {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}
</style>
