<script lang="ts">
	import type { AligItems, FlexDirection, JustifyContent } from '$shared/types';

	export let justifyContent: JustifyContent = 'center';
	export let direction: FlexDirection = 'row';
	export let alignItems: AligItems = 'center';
	export let gap = '1rem';
	export let width = 'fit-content';
	export let padding = '0';
	export let height = 'fit-content';
</script>

<div
	style="display:flex"
	style:justify-content={justifyContent}
	style:flex-direction={direction}
	style:align-items={alignItems}
	style:width
	style:gap
	style:padding
	style:height
>
	<slot />
</div>
