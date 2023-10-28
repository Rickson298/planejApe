<script lang="ts">
	export let width = '';
</script>

<div style:width>
	<slot />
</div>

<style lang="scss">
	div {
		@media (min-width: 480px) {
			display: none;
		}
	}
</style>
