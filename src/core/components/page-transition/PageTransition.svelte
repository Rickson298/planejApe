<script lang="ts">
	export let pathname = '';
</script>

{#key pathname}
	<main>
		<slot />
	</main>
{/key}

<style>
	main {
		display: flex;
		animation: opacityAnimation 1s backwards;
		animation-delay: 100ms;
		width: 100%;
		min-height: calc(100dvh - 80px);
		padding: 1rem;
		/* // offset of sidebar */
		padding-left: calc(73px + 1rem);

		@media (max-width: 680px) {
			padding-left: 1rem;
		}
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
