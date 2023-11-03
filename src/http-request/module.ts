import type { AxiosResponse } from 'axios';

type HttpRequestModuleParams<T> = {
	httpRequest: Promise<AxiosResponse<T>>;
	onSuccess: (data: AxiosResponse<T>) => void;
	onError?: (error: unknown) => void;
	onFinally?: () => void;
};

export async function httpRequestModule<T>({
	onError,
	onFinally,
	onSuccess,
	httpRequest
}: HttpRequestModuleParams<T>) {
	try {
		const response = await httpRequest;
		onSuccess(response);
	} catch (error) {
		onError?.(error);
	} finally {
		onFinally?.();
	}
}
