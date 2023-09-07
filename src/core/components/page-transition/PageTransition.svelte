<script lang="ts">
	export let pathname = '';
</script>

{#key pathname}
	<div style:padding="1rem" style="height: 100%">
		<slot />
	</div>
{/key}

<style>
	div {
		animation: opacityAnimation 1s backwards;
		animation-delay: 100ms;
	}

	@keyframes opacityAnimation {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
</style>
