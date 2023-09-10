<script lang="ts">
	import { fade } from 'svelte/transition';

	export let pathname = '';
</script>

{#key pathname}
	<main out:fade={{ duration: 200 }}>
		<slot />
	</main>
{/key}

<style>
	main {
		display: flex;

		animation-delay: 100ms;
		width: 100%;
		min-height: calc(100vh - 80px);
		min-height: calc(100dvh - 80px);
		padding: 1rem;
		position: absolute;
		animation: opacityAnimation 0.5s backwards;
		animation-delay: 200ms;

		/* // offset of sidebar */
		padding-left: 140px;

		/* // offset of header */
		margin-top: 80px;

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
