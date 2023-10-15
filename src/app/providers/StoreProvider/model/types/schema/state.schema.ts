import { rtkApi } from '@/shared/api/common.api';
import { CharacterSchema } from '@/entities/Character';
import { AuthSchema } from '@/features/BaseAuth';

export interface StateSchema {
	character: CharacterSchema;
	auth: AuthSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
