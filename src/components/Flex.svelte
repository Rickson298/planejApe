<script lang="ts">
	import type { FlexDirection, JustifyContent, AligItems } from '../shared/types';

	export let justifyContent: JustifyContent = 'center';
	export let direction: FlexDirection = 'row';
	export let alignItems: AligItems = 'center';
	export let gap = '1rem';
	export let width = 'fit-content';
	export let padding = '0';
</script>

<div
	style="display:flex; height:fit-content"
	style:justify-content={justifyContent}
	style:flex-direction={direction}
	style:align-items={alignItems}
	style:width
	style:gap
	style:padding
>
	<slot />
</div>
