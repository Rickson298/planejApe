<script lang="ts">
	import { Typography } from 'planejape-ui-svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Gear from 'phosphor-svelte/lib/Gear';
	import SignOut from 'phosphor-svelte/lib/SignOut';
	import UserSwitch from 'phosphor-svelte/lib/UserSwitch';

	let isOpenPopup = false;
	let containerMenu: HTMLButtonElement | null;

	function handleUserOptions() {
		isOpenPopup = !isOpenPopup;
	}

	function closeUserOptions() {
		isOpenPopup = false;
	}

	$: if (!isOpenPopup) {
		containerMenu?.blur();
	}
</script>

<header>
	<button
		bind:this={containerMenu}
		class="container_menu_options"
		on:click={handleUserOptions}
		on:blur={closeUserOptions}
	>
		{#if isOpenPopup}
			<div class="popup" transition:fly={{ y: 25, easing: expoOut }}>
				<button class="popup_option">
					<UserSwitch size={24} color="var(--blue-300)" />
					<Typography fontWeight="400">Trocar de conta</Typography>
				</button>
				<button class="popup_option">
					<SignOut size={24} color="var(--blue-300)" />
					<Typography fontWeight="400">Sair</Typography>
				</button>
			</div>
		{/if}

		<Typography fontWeight="400">Rickson Oliveira</Typography>
		<div class="avatar">
			<div class="avatar_content">
				<span class="username">RO</span>
				<div class="container_icon">
					<Gear size={28} />
				</div>
			</div>
		</div>
	</button>
</header>

<style src="./styles.scss">
</style>
