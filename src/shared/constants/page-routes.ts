import type { ComponentType } from 'svelte';
import Couch from 'phosphor-svelte/lib/Couch';
import House from 'phosphor-svelte/lib/House';
import Warehouse from 'phosphor-svelte/lib/Warehouse';

export const ROUTES: Array<{ icon: ComponentType; path: string; label: string }> = [
	{
		icon: House,
		label: 'Inicio',
		path: '/'
	},
	{
		icon: Couch,
		label: 'Produtos do apê',
		path: '/products'
	},
	{
		icon: Warehouse,
		label: 'Apartamentos',
		path: '/apartamentos'
	}
];
