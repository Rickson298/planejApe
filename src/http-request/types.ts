import type { AxiosResponse } from 'axios';

export type HttpRequestModule<T> = {
	onSuccess: (data: AxiosResponse<T>) => void;
	onError?: (error: unknown) => void;
	onFinally?: () => void;
};

export type RequestParams<T> = {
	params?: T;
};
