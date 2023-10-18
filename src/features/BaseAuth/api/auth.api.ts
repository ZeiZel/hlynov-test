import { rtkApi, buildRtkResponse, EResponseType } from '@/shared/api';
import { IBaseAuthRequest, IBaseAuthResponse } from '@/features/BaseAuth';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

const authApi = rtkApi.injectEndpoints({
	endpoints: ({ mutation }) => ({
		authUser: mutation<IBaseAuthResponse, IBaseAuthRequest>({
			queryFn: async ({
				login,
				password,
			}): Promise<QueryReturnValue<IBaseAuthResponse, FetchBaseQueryError>> => {
				try {
					/* тут мы типа отправляем запрос на авторизацию и всё происходит успешно */
					localStorage.setItem(
						USER_LOCALSTORAGE_KEY,
						btoa(`${login}:${password}`),
					);

					return buildRtkResponse({
						type: EResponseType.FULFILLED,
						data: {
							status: 'ok',
						},
					});
				} catch (e) {
					if (e instanceof Error) {
						return buildRtkResponse({
							type: EResponseType.REJECT,
							error: e.message,
						});
					}
				}

				return buildRtkResponse({
					type: EResponseType.NO_DATA,
				});
			},
		}),
	}),
});

export const { useAuthUserMutation } = authApi;
