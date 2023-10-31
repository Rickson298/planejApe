import type { Room } from '$shared/types/room';

type Product = {
	product: { name: string; image: string };
	site: { name: string; url: string };
	room: Room;
	price: number;
	is_favorite: boolean;
};

export const fakeProducts: Product[] = [
	{
		product: {
			name: 'Geladeira',
			image:
				'https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/BRBRE57AK_PRD/BRBRE57AK_PRD_447_1.jpeg'
		},
		site: {
			name: 'Amazon',
			url: 'https://amazon.com.br/geladeira'
		},
		room: 'kitchen',
		price: 3500,
		is_favorite: true
	},
	{
		product: {
			name: 'Toalhas com nome muito muito muito grande',
			image:
				'https://global.cdn.magazord.com.br/centraltoalhas/img/2023/06/produto/5471/toalha-de-banho-enxuta-caricinha-1.jpg?ims=800x800'
		},
		site: {
			name: 'Americanas',
			url: 'https://amazon.com.br/geladeira'
		},
		room: 'bathroom',
		price: 1500,
		is_favorite: false
	},
	{
		product: {
			name: 'Toalhas',
			image:
				'https://global.cdn.magazord.com.br/centraltoalhas/img/2023/06/produto/5471/toalha-de-banho-enxuta-caricinha-1.jpg?ims=800x800'
		},
		site: {
			name: 'Americanas',
			url: 'https://amazon.com.br/geladeira'
		},
		room: 'laundry',
		price: 1500,
		is_favorite: false
	},
	{
		product: {
			name: 'Toalhas',
			image:
				'https://global.cdn.magazord.com.br/centraltoalhas/img/2023/06/produto/5471/toalha-de-banho-enxuta-caricinha-1.jpg?ims=800x800'
		},
		site: {
			name: 'Americanas',
			url: 'https://amazon.com.br/geladeira'
		},
		room: 'room',
		price: 1500,
		is_favorite: false
	},
	{
		product: {
			name: 'Toalhas',
			image:
				'https://global.cdn.magazord.com.br/centraltoalhas/img/2023/06/produto/5471/toalha-de-banho-enxuta-caricinha-1.jpg?ims=800x800'
		},
		site: {
			name: 'Americanas',
			url: 'https://amazon.com.br/geladeira'
		},
		room: 'bedroom',
		price: 1500,
		is_favorite: false
	}
];
