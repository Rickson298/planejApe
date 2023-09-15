<script>
	import { Flex, Input, PageTitle } from '$components';
</script>

<svelte:head>
	<title>Produtos</title>
	<meta name="description" content="Organize seu apartamento facilmente com o planejApê" />
</svelte:head>

<Flex direction="column" alignItems="start" gap="2rem">
	<PageTitle
		title="Produtos do apartamento"
		subtitle="Veja os produtos que você salvou para seu apartamento"
	/>

	<Input placeholder="Pesquise por algum item" />
</Flex>

<style>
	div {
		display: flex;
		min-height: 100%;
		width: 100%;
	}
</style>
