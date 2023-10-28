<script>
	import { Typography } from 'planejape-ui-svelte';

	import Bathtub from 'phosphor-svelte/lib/Bathtub';
	import Bed from 'phosphor-svelte/lib/Bed';
	import Chalkboard from 'phosphor-svelte/lib/Chalkboard';
	import CookingPot from 'phosphor-svelte/lib/CookingPot';
	import Dress from 'phosphor-svelte/lib/Dress';

	import ResumeCard from '../resume-card/ResumeCard.svelte';

	import { formatCurrency } from '$shared/utils';
</script>

<div class="quick-resume__container">
	<Typography fontSize="2rem" fontWeight="400">Resumo rápido</Typography>

	<div class="cards__container">
		<ResumeCard quantityItems={4} room="Banheiro" icon={Bathtub} price={1250.5} />
		<ResumeCard quantityItems={10} room="Sala" icon={Chalkboard} price={1250.5} />
		<ResumeCard quantityItems={2} room="Lavanderia" icon={Dress} price={1250.5} />
		<ResumeCard quantityItems={2} room="Quarto" icon={Bed} price={1250.5} />
		<ResumeCard quantityItems={2} room="Cozinha" icon={CookingPot} price={1250.5} />
	</div>
	<div class="total-amount__container">
		<Typography fontWeight="500" fontSize="0.875rem">Total</Typography>
		<Typography fontWeight="500">{formatCurrency(1000)}</Typography>
	</div>
</div>

<style lang="scss" src="./styles.scss">
</style>
