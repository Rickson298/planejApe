<script>
	import Bug from 'phosphor-svelte/lib/Bug';

	import { page } from '$app/stores';

	import { Flex, Typography } from '$components';
</script>

<svelte:head>
	<title>PlanejApê: Erro</title>
</svelte:head>

{#if $page.status === 404}
	<Flex height="100%" width="100%" direction="column">
		<Typography fontSize="2.25rem" fontWeight="600" color="blue-300">Ops</Typography>
		<Typography fontWeight="400" color="blue-300" fontSize="1.5rem"
			>Página não encontrada</Typography
		>
		<Bug size={100} color="var(--blue-400)" />
	</Flex>
{:else}
	<Flex height="100%" width="100%" direction="column">
		<Typography fontSize="2.25rem" fontWeight="600" color="blue-300">Ops</Typography>
		<Typography fontWeight="400" color="blue-300" fontSize="1.5rem"
			>Página não encontrada</Typography
		>
		<Bug size={100} color="var(--blue-400)" />
	</Flex>
{/if}
