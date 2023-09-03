<script lang="ts">
	export let isActive = false;

	function handleSidebar() {
		isActive = !isActive;
	}
</script>

<button class="menu_hamburguer_container" class:is_open={isActive} on:click={handleSidebar}>
	<div class="menu_hamburguer" />
</button>

<style lang="scss">
	.menu_hamburguer_container {
		border: none;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		background: none;
		transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.4s;
		cursor: pointer;

		&.is_open {
			.menu_hamburguer {
				background-color: var(--blue-700);

				&::after {
					transform: rotate(45deg);
					bottom: 0;
				}
				&::before {
					transform: rotate(-45deg);
					bottom: 0;
				}
			}
		}

		&:active {
			transform: scale(0.8);
		}

		&:hover {
			.menu_hamburguer {
				&::after,
				&::before {
					bottom: 0;
				}
			}
		}
	}

	.menu_hamburguer {
		width: 100%;
		height: 3px;
		border-radius: 1rem;
		background: var(--white);
		position: relative;
		transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.4s;
		transform-origin: center;

		&::before,
		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background: var(--white);
			border-radius: 1rem;
			transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.4s;
			left: 0;
			&:hover {
				bottom: 0;
			}
		}

		&::after {
			bottom: -0.7rem;
		}
		&::before {
			bottom: 0.7rem;
		}
	}
</style>
