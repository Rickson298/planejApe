<script>
	import House from 'phosphor-svelte/lib/House';
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	import { Flex, MenuHamburguer } from '$components';

	let isOpen = false;
</script>

<div class="sidebar" class:open={isOpen}>
	<Flex justifyContent="start">
		<MenuHamburguer bind:isActive={isOpen} />
		{#if isOpen}
			<span transition:fly={{ y: 15, easing: elasticOut }}>Menu</span>
		{/if}
	</Flex>

	<Flex>
		<House size={30} color="var(--blue-300)" />
	</Flex>

	<Flex />
</div>

<style src="./styles.scss"></style>
