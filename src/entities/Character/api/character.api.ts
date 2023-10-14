import { fetchBaseApi, rtkApi } from '@/shared/api/common.api';
import { buildRtkResponse, EResponseType } from '@/shared/api';
import {
	ICharacter,
	ICharacterListRequest,
	ICharacterListResponse,
	ICharacterRequest,
	ICharacterResponse,
	IMultipleCharacterRequest,
	IMultipleCharacterResponse,
} from '@/entities/Character';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

const characterApi = rtkApi.injectEndpoints({
	endpoints: ({ query }) => ({
		/* получаем либо одного персонажа, либо по фильтрам */
		getCharacter: query<ICharacterResponse, ICharacterRequest>({
			query: ({ name, status, species, type, gender }) => ({
				url: '/character',
				params: {
					name: name || '',
					status: status || '',
					species: species || '',
					type: type || '',
					gender: gender || '',
				},
			}),
		}),
		/* получаем список персонажей */
		getCharacterList: query<ICharacterListResponse, ICharacterListRequest>({
			query: ({}) => ({
				url: '/character',
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
						url: `/character/${id.join(',')}`,
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
