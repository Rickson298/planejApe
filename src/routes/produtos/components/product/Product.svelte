<script lang="ts">
	import { Flex, Typography } from 'planejape-ui-svelte';
	import NotePencil from 'phosphor-svelte/lib/NotePencil';
	import Globe from 'phosphor-svelte/lib/Globe';
	import Star from 'phosphor-svelte/lib/Star';
	import TrashSimple from 'phosphor-svelte/lib/TrashSimple';

	import { formatCurrency } from '$shared/utils';

	import { rooms } from '$shared/constants';

	import type { Room } from '$shared/types/room';

	export let product = {
		name: '',
		image: ''
	};
	export let site = {
		name: '',
		url: ''
	};
	export let room: Room;
	export let price = 0;
	export let isFavorite = false;

	const currencyPrice = formatCurrency(price);
	const currentRoom = rooms[room];
</script>

<div class="product-card">
	<div
		class="product-image__container"
		style:background-image={`linear-gradient(0deg, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.5) 100%),
    url(${product.image})`}
	>
		<Flex alignItems="center" justifyContent="space-between" width="100%">
			<button class="product-action__button">
				<Star color="#BFC217" weight={isFavorite ? 'fill' : 'regular'} size={20} />
			</button>
			<Flex>
				<button class="product-action__button">
					<TrashSimple color="var(--white)" size={20} />
				</button>
				<button class="product-action__button">
					<NotePencil color="var(--white)" size={20} />
				</button>
			</Flex>
		</Flex>
		<div class="product-info__container">
			<Flex direction="column" alignItems="start">
				<Typography>{product.name}</Typography>
				<Flex gap="0.25rem">
					<Globe size={16} color="var(--blue-100)" />
					<a class="store-link" href={site.url}>{site.name}</a>
				</Flex>
			</Flex>
			<Typography textAlign="end">{currencyPrice}</Typography>
		</div>
	</div>
	<div class="room__container">
		<div class="icon__container" style:background={currentRoom.color}>
			<svelte:component this={currentRoom.icon} size={20} color="var(--white)" />
		</div>
		<Typography fontSize="0.875rem">{currentRoom.label}</Typography>
	</div>
</div>

<style lang="scss" src="./styles.scss">
</style>
