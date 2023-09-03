<script lang="ts">
	export let isActive = false;

	function handleSidebar() {
		isActive = !isActive;
	}
</script>

<button class="menu_hamburguer_container" class:is_open={isActive} on:click={handleSidebar}>
	<div class="bar" />
</button>

<style lang="scss" src="./styles.scss">
</style>
