<script lang="ts">
	import Couch from 'phosphor-svelte/lib/Couch';
	import Warehouse from 'phosphor-svelte/lib/Warehouse';
	import Bag from 'phosphor-svelte/lib/Bag';
	import CurrencyCircleDollar from 'phosphor-svelte/lib/CurrencyCircleDollar';
	import Television from 'phosphor-svelte/lib/TelevisionSimple';
	import { PageTitle } from '$components';
	import { Flex, Typography } from 'planejape-ui-svelte';
</script>

<svelte:head>
	<title>Página inicial</title>
	<meta name="description" content="Organize seu apartamento facilmente com o planejApê" />
</svelte:head>

<article class="home_content">
	<PageTitle
		title="Bem-vindo ao PlaneApê"
		subtitle="Sua Lista de Desejos para o Apartamento, Sempre à Mão"
	/>
	<Flex alignItems="start" direction="column" gap="2rem">
		<div class="description">
			<Typography fontSize="1.5rem" fontWeight="500">
				Tenha uma Visão Completa dos Produtos e Apartamentos do Seu Novo Lar
			</Typography>
			<Typography fontWeight="400" color="gray-200">
				Bem-vindo ao PlanejApê, sua plataforma para planejar e decorar seu novo apartamento com
				facilidade. Com nossa ferramenta, você pode criar uma lista detalhada de produtos desejados
				para o espaço, além de salvar seus apartamentos favoritos. Personalize cada detalhe do seu
				lar com confiança.
			</Typography>
		</div>
		<Flex gap="1.5rem" justifyContent="start" width="100%" wrap="wrap">
			<button class="cta_button">
				<a href="/products" class="link">
					<Couch size={25} />
					Adicionar produto
				</a>
			</button>
			<button class="cta_button">
				<a href="/apartamentos" class="link">
					<Warehouse size={25} />
					Cadastrar apartamento
				</a>
			</button>
		</Flex>
	</Flex>
</article>

<Television class="icon" />
<Bag class="icon" />
<CurrencyCircleDollar class="icon" />

<style lang="scss" src="./styles.scss">
</style>
