<script lang="ts">
	import PageTransition from '$components/PageTransition.svelte';
	import { Sidebar } from '$core/components';
	import type { LayoutServerData } from './$types';
	import './styles.css';

	export let data: LayoutServerData;
</script>

<div class="app">
	<main>
		<Sidebar />

		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>
</div>

<style>
	main {
		display: flex;
	}
</style>
