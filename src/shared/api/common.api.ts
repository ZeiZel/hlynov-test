import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RequestType, USER_LOCALSTORAGE_KEY } from '@/shared/const';

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		// если понадобится авторизация для запросов
		prepareHeaders: (headers: Headers): Headers => {
			const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
			if (token) {
				headers.set('Authorization', token);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({}),
});

export interface IFetchBaseApi {
	url: string;
	body?: Record<string, unknown> | BodyInit | null | undefined;
	args?: Record<string, unknown>;
}

export const fetchBaseApi = async <T>({ url, args, body }: IFetchBaseApi): Promise<T> => {
	let urlWithParams = `${__API__}${url}`;

	/* если мы передали параметры в запрос, то они подставятся в url запроса */
	if (args && args.params) {
		const params = Object.entries(args.params)
			.map(([key, value]) => `${key}=${value}`)
			.join('&');
		urlWithParams += `?${params}`;
	}

	const response = await fetch(urlWithParams, {
		method: RequestType.GET,
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		mode: 'cors',
		credentials: 'include',
		...args,
		body: JSON.stringify(body),
	});

	return response.json();
};
