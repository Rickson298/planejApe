<script>
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
</div>

<style src="./styles.scss"></style>
