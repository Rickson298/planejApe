<script>
	import { PageTitle } from '$components';
	import { Flex, Input } from 'planejape-ui-svelte';
</script>

<svelte:head>
	<title>Produtos</title>
	<meta name="description" content="Organize seu apartamento facilmente com o planejApê" />
</svelte:head>

<Flex direction="column" alignItems="start" gap="4rem">
	<PageTitle
		title="Produtos do apartamento"
		subtitle="Veja os produtos que você salvou para seu apartamento"
	/>

	<Input placeholder="Pesquise por algum item" />
	<Input helperText="Campo obrigatório" placeholder="Pesquise por algum item" />
</Flex>
