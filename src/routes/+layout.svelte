<script lang="ts">
	import { tick } from 'svelte';
	import { Breadcrumb } from 'planejape-ui-svelte';
	import House from 'phosphor-svelte/lib/House';

	import { Header, PageTransition, Sidebar } from '$core/components';

	import './styles.css';

	import type { BreadcrumbItem } from 'planejape-ui-svelte';
	import type { LayoutServerData } from './$types';

	import { PAGE_ROUTES } from '$shared/constants/page-routes';

	export let data: LayoutServerData;

	$: currentPath = PAGE_ROUTES.find((route) => route.path === data.pathname);

	const homeBreadcrumb: BreadcrumbItem = { label: 'Início', href: '/', icon: House };

	let breadcrumbs: BreadcrumbItem[] = [];

	$: {
		if (currentPath) {
			breadcrumbs = [homeBreadcrumb, { href: currentPath.path, label: currentPath.label }];
		} else {
			breadcrumbs = [homeBreadcrumb];
		}

		tick();
	}
</script>

<main>
	<Sidebar />
	<div class="content">
		<Header />

		<PageTransition pathname={data.pathname}>
			{#if data.pathname !== '/'}
				<Breadcrumb items={breadcrumbs} />
			{/if}
			<slot />
		</PageTransition>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;

		.content {
			min-height: 100vh;
			min-height: 100dvh;
			height: 100%;
			width: 100%;
		}
	}
</style>
