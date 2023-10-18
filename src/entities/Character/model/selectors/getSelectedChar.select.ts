import { StateSchema } from '@/app/providers/StoreProvider';

export const getSelectedChar = (state: StateSchema) => state.character.selectedId;
