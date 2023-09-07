<script lang="ts">
	import { Sidebar, PageTransition } from '$core/components';
	import type { LayoutServerData } from './$types';
	import './styles.css';

	export let data: LayoutServerData;
</script>

<div class="app">
	<main>
		<Sidebar />

		<div style="width: 100%;">
			<PageTransition pathname={data.pathname}>
				<slot />
			</PageTransition>
		</div>
	</main>
</div>

<style>
	main {
		display: flex;
	}
</style>
