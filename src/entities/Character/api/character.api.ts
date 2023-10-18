import { fetchBaseApi, rtkApi } from '@/shared/api/common.api';
import { buildRtkResponse, EResponseType } from '@/shared/api';
import {
	ICharacter,
	ICharacterListRequest,
	ICharacterListResponse,
	ICharacterFilterRequest,
	ICharacterResponse,
	IMultipleCharacterRequest,
	IMultipleCharacterResponse,
	ICharacterRequest,
} from '@/entities/Character';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { Endpoints } from '@/shared/const';

const characterApi = rtkApi.injectEndpoints({
	endpoints: ({ query }) => ({
		/* получаем одного персонажа */
		getCharacter: query<ICharacterResponse, ICharacterRequest>({
			query: ({ id }) => ({
				url: `/${Endpoints.CHARACTER}/${id}`,
			}),
		}),
		/* получаем персонажей по фильтрам */
		getFilteredCharacter: query<ICharacterListResponse, ICharacterFilterRequest>({
			query: ({ name, status, species, type, gender, page }) => ({
				url: `/${Endpoints.CHARACTER}`,
				params: {
					name: name ?? '',
					status: status ?? '',
					species: species ?? '',
					type: type ?? '',
					gender: gender ?? '',
				},
			}),
		}),
		/* получаем список персонажей */
		getCharacterList: query<ICharacterListResponse, ICharacterListRequest>({
			query: ({ page }) => ({
				url: `/${Endpoints.CHARACTER}`,
				params: {
					page: page ?? '',
				},
			}),
		}),
		/* получаем несколько персонажей */
		getMultipleCharacters: query<
			IMultipleCharacterResponse,
			IMultipleCharacterRequest
		>({
			queryFn: async ({
				id,
			}): Promise<
				QueryReturnValue<IMultipleCharacterResponse, FetchBaseQueryError>
			> => {
				try {
					const response: ICharacter[] = await fetchBaseApi<ICharacter[]>({
						url: `/${Endpoints.CHARACTER}/${id.join(',')}`,
					});

					return buildRtkResponse({
						type: EResponseType.FULFILLED,
						data: { result: response },
					});
				} catch (e) {
					if (e instanceof Error) {
						return buildRtkResponse({
							type: EResponseType.REJECT,
							error: e.message,
						});
					}
				}

				return buildRtkResponse({ type: EResponseType.NO_DATA });
			},
		}),
	}),
});

export const {
	useGetCharacterQuery,
	useGetMultipleCharactersQuery,
	useGetCharacterListQuery,
} = characterApi;
