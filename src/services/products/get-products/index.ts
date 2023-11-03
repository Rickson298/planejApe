import { api, httpRequestModule, type HttpRequestModule, type RequestParams } from '$http-request';
import { PRODUCTS_ROUTES } from '$services';
import type { GetProductsRequest, GetProductsResponse } from './types';

export async function getProducts({
	onError,
	onFinally,
	onSuccess,
	params
}: HttpRequestModule<GetProductsResponse> & RequestParams<GetProductsRequest>) {
	httpRequestModule({
		httpRequest: api.get(PRODUCTS_ROUTES.getProducts, { params }),
		onError,
		onFinally,
		onSuccess
	});
}
