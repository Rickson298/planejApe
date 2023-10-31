import Bathtub from 'phosphor-svelte/lib/Bathtub';
import Bed from 'phosphor-svelte/lib/Bed';
import Chalkboard from 'phosphor-svelte/lib/Chalkboard';
import CookingPot from 'phosphor-svelte/lib/CookingPot';
import Dress from 'phosphor-svelte/lib/Dress';

export const rooms = {
	bathroom: { icon: Bathtub, label: 'Banheiro', color: '#00008B50' },
	room: { icon: Chalkboard, label: 'Sala', color: '#00640050' },
	kitchen: { icon: CookingPot, label: 'Cozinha', color: '#8B000050' },
	laundry: { icon: Dress, label: 'Lavanderia', color: '#FF8C0050' },
	bedroom: { icon: Bed, label: 'Quarto', color: '#78777750' }
};
