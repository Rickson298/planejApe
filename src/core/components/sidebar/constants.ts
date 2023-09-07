import type { ComponentType } from 'svelte';
import Couch from 'phosphor-svelte/lib/Couch';
import House from 'phosphor-svelte/lib/House';
import Warehouse from 'phosphor-svelte/lib/Warehouse';

export const ROUTES: Array<{ icon: ComponentType; route: string; label: string }> = [
	{
		icon: House,
		label: 'Inicio',
		route: '/'
	},
	{
		icon: Couch,
		label: 'Produtos do apê',
		route: '/produtos'
	},
	{
		icon: Warehouse,
		label: 'Apartamentos',
		route: '/apartamentos'
	}
];
