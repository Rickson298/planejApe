<script lang="ts">
	import { fade } from 'svelte/transition';

	export let pathname = '';
</script>

{#key pathname}
	<main in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 200 }}>
		<slot />
	</main>
{/key}

<style>
	main {
		display: flex;
		animation-delay: 100ms;
		width: 100%;
		min-height: calc(100dvh - 80px);
		padding: 1rem;
		position: absolute;
		/* // offset of sidebar */
		padding-left: calc(73px + 70px);

		@media (max-width: 680px) {
			padding-left: 1rem;
		}
	}
</style>
