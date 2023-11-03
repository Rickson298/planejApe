import type { ProductItem } from '$services/products/get-products/types';

export type ProductsStoreValues = {
	isLoadingProducts: boolean;
	products: ProductItem[];
};
