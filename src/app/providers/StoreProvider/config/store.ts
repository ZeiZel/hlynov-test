import { Reducer, CombinedState } from 'redux';
import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { characterReducer } from '@/entities/Character';
import { rtkApi } from '@/shared/api/common.api';

export function createReduxStore() {
	const reducers: ReducersMapObject<StateSchema> = {
		character: characterReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	return configureStore({
		reducer: combineReducers(reducers) as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkApi.middleware),
	});
}

export const store = createReduxStore();