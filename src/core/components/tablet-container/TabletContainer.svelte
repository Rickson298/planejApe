<script lang="ts">
	export let width = '';
	export let keepInLargeBreakpoints = false;
	export let keepInSmallerBreakpoints = false;
</script>

<div
	class:keep-in-smaller-breakpoints={keepInSmallerBreakpoints}
	class:keep-in-large-breakpoints={keepInLargeBreakpoints}
	style:width
>
	<slot />
</div>

<style lang="scss">
	div {
		display: none;

		@media (min-width: 481px) and (max-width: 768px) {
			display: block;
		}

		&.keep-in-large-breakpoints {
			@media (min-width: 768px) {
				display: block;
			}
		}

		&.keep-in-smaller-breakpoints {
			@media (max-width: 768px) {
				display: block;
			}
		}
	}
</style>
