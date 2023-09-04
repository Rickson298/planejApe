<script>
	import { Sidebar } from '$core/components';
	import './styles.css';
</script>

<div class="app">
	<main>
		<Sidebar />

		<slot />
	</main>
</div>

<style>
	main {
		display: flex;
	}
</style>
