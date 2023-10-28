<script lang="ts">
	export let width = '';
</script>

<div style:width>
	<slot />
</div>

<style lang="scss">
	div {
		display: none;

		@media (min-width: 1280px) {
			display: block;
		}
	}
</style>
