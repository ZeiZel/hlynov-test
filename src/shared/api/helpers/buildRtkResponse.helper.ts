import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

export enum EResponseType {
	NO_DATA,
	FULFILLED,
	REJECT,
}

export interface IBuildRtkResponse<T> {
	type: EResponseType;
	data?: T;
	error?: string;
	meta?: unknown;
}

export type TBuildRtkResponse = <T>(
	data: IBuildRtkResponse<T>,
) => QueryReturnValue<T, FetchBaseQueryError, unknown>;

// функция для построения правильного ответа из RTK Api
export const buildRtkResponse: TBuildRtkResponse = <T>({
   type = EResponseType.NO_DATA,
   data,
   error,
   meta,
}: IBuildRtkResponse<T>): QueryReturnValue<T, FetchBaseQueryError, unknown> => {
	switch (type) {
		case EResponseType.REJECT:
			return {
				data: undefined,
				error: {
					status: 'CUSTOM_ERROR',
					error: error as string,
				},
				meta: meta || {},
			};
		case EResponseType.FULFILLED:
			return {
				data: data as T,
				error: undefined,
				meta: meta || {},
			};
		case EResponseType.NO_DATA:
		default:
			return {
				data: undefined,
				error: {
					status: 'CUSTOM_ERROR',
					error: 'Произошла непредвиденная ошибка',
				},
				meta: meta || {},
			};
	}
};
