<script>
	import { elasticOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	import { page } from '$app/stores';

	import { Flex, MenuHamburguer } from '$components';

	import { ROUTES } from './constants';

	let isOpen = false;

	$: route = $page.route.id;
	$: {
		route;
		isOpen = false;
	}
</script>

<div class="sidebar" class:open={isOpen}>
	<div class="container_menu">
		<MenuHamburguer bind:isActive={isOpen} />
		{#if isOpen}
			<span transition:fly={{ y: 15, easing: elasticOut }}>Menu</span>
		{/if}
	</div>
	<Flex direction="column" width="100%">
		{#each ROUTES as item (item.route)}
			{@const selected = route === item.route}

			<a class:selected href={item.route} class="container_link">
				<div class="container_icon">
					<svelte:component
						this={item.icon}
						size={30}
						color={selected ? 'var(--blue-100)' : 'var(--blue-300)'}
					/>
				</div>
				{#if isOpen}
					<span class="label" transition:fade>{item.label}</span>
				{/if}
			</a>
		{/each}
	</Flex>
</div>

<style src="./styles.scss"></style>
