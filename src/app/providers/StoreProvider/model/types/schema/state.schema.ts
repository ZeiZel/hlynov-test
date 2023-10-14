import { rtkApi } from '@/shared/api/common.api'
import { CharacterSchema } from '@/entities/Character';

export interface StateSchema {
	character: CharacterSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}