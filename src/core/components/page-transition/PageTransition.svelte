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
		flex-direction: column;
		animation-delay: 100ms;
		width: 100%;
		min-height: calc(100vh - 80px);
		min-height: calc(100dvh - 80px);
		position: absolute;
		animation: opacityAnimation 0.5s backwards;
		animation-delay: 200ms;
		padding-right: 3rem;
		gap: 2.5rem;
		padding-bottom: 2rem;

		/* // offset of sidebar */
		padding-left: calc(73px + 3rem);

		@media (max-width: 680px) {
			/* // offset of header */
			margin-top: 80px;
			padding-inline: 1rem;
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
