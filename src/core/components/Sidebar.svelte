<script>
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import Flex from '../../components/Flex.svelte';
	import MenuHamburguer from '../../components/MenuHamburguer.svelte';

	let isOpen = false;
</script>

<div class="sidebar" class:open={isOpen}>
	<Flex justifyContent="start">
		<MenuHamburguer bind:isActive={isOpen} />
		{#if isOpen}
			<span transition:fly={{ y: 15, easing: elasticOut }}>Menu</span>
		{/if}
	</Flex>
</div>

<style lang="scss">
	.sidebar {
		overflow: hidden;
		display: flex;
		justify-content: start;
		padding: 2rem 1.25rem;
		height: 100dvh;
		width: 72px;
		background-color: var(--blue-700);
		transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.4s;

		&.open {
			width: 350px;
		}
	}
</style>
