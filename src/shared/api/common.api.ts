import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

const rtkApi = createApi({
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
