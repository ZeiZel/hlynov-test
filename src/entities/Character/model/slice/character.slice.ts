import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterSchema } from '@/entities/Character';

const initialState: CharacterSchema = {};

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		selectCharacter: (state: CharacterSchema, action: PayloadAction<number>) => {
			state.selectedId = action.payload;
		},
		selectPage: (state: CharacterSchema, action: PayloadAction<number>) => {
			state.selectedPage = action.payload;
		},
	},
});

export const { actions: characterActions } = characterSlice;
export const { reducer: characterReducer } = characterSlice;
