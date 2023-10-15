import { Reducer, CombinedState } from 'redux';
import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { characterReducer } from '@/entities/Character';
import { rtkApi } from '@/shared/api/common.api';
import { authReducer } from '@/features/BaseAuth';

export function createReduxStore(initialState?: StateSchema) {
	const reducers: ReducersMapObject<StateSchema> = {
		character: characterReducer,
		auth: authReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	return configureStore({
		reducer: combineReducers(reducers) as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(rtkApi.middleware),
	});
}

export const store = createReduxStore();
