<script>
	import MenuHamburguer from '../../components/MenuHamburguer.svelte';
</script>

<div class="sidebar">
	<MenuHamburguer />
</div>

<style lang="scss">
	.sidebar {
		display: flex;
		justify-content: center;
		padding: 2rem 1.25rem;
		height: 100dvh;
		width: 72px;
		background-color: var(--blue-700);
	}
</style>
