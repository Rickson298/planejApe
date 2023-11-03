import { writable } from 'svelte/store';

import { getProducts } from '$services';

import type { ProductsStoreValues } from './types';

function createProductsStore() {
	const { subscribe, update } = writable<ProductsStoreValues>({
		isLoadingProducts: true,
		products: []
	});

	function getProductsDispatcher() {
		getProducts({
			onSuccess(response) {
				update(() => ({
					isLoadingProducts: false,
					products: response.data.items
				}));
			},
			onFinally() {
				update((prev) => ({
					...prev,
					isLoadingProducts: false
				}));
			}
		});
	}

	return {
		subscribe,
		getProducts: getProductsDispatcher
	};
}

export const productsStores = createProductsStore();
