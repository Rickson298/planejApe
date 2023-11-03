import type { Room } from '$shared/types/room';
export type ProductItem = {
	product: { name: string; image: string };
	site: { name: string; url: string };
	room: Room;
	price: number;
	is_favorite: boolean;
};

export type GetProductsResponse = {
	items: ProductItem[];
};

export type GetProductsRequest = {
	product?: string;
	room?: string;
	favorites?: boolean;
};
