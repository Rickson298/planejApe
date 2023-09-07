<script lang="ts">
	import { Header, PageTransition, Sidebar } from '$core/components';
	import type { LayoutServerData } from './$types';
	import './styles.css';

	export let data: LayoutServerData;
</script>

<main>
	<Sidebar />
	<div class="content">
		<Header />

		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;

		.content {
			min-height: 100dvh;
			height: 100%;
			width: 100%;
		}
	}
</style>
