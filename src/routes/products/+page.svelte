<script>
	import { Button, Flex, Input, Skeleton, Typography } from 'planejape-ui-svelte';
	import Funnel from 'phosphor-svelte/lib/Funnel';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
	import PlusCircle from 'phosphor-svelte/lib/PlusCircle';

	import { PageTitle } from '$components';
	import QuickResume from './components/quick-resume/QuickResume.svelte';
	import ProductsList from './components/products-list/ProductsList.svelte';
	import ProductsListLoading from './components/products-list-loading/ProductsListLoading.svelte';
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
				<Skeleton isLoading width="100%">
					<Input rightIcon={MagnifyingGlass} placeholder="Pesquise por algum item" />
				</Skeleton>
				<Skeleton isLoading>
					<Button secondary>
						<Funnel size={22} />
						Filtro avançado
					</Button>
				</Skeleton>
			</div>
			<Flex direction="column" width="100%" gap="2rem">
				<div class="add-product__container">
					<Skeleton isLoading>
						<Typography fontSize="1.375rem" fontWeight="600">Produtos</Typography>
					</Skeleton>
					<Skeleton isLoading>
						<Button>
							<PlusCircle size={22} />
							Adicionar produto
						</Button>
					</Skeleton>
				</div>
				<ProductsListLoading />
				<ProductsList />
			</Flex>
		</div>
		<Skeleton isLoading background="var(--blue-400)">
			<QuickResume />
		</Skeleton>
	</div>
</Flex>

<style lang="scss" src="./styles.scss">
</style>
