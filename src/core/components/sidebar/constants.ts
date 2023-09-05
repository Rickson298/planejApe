import type { ComponentType } from 'svelte';
import House from 'phosphor-svelte/lib/House';
import Couch from 'phosphor-svelte/lib/Couch';

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
	}
];
