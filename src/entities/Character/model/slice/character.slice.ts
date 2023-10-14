import { createSlice } from '@reduxjs/toolkit';
import { CharacterSchema } from '@/entities/Character';

const initialState: CharacterSchema = {}

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		selectCharacter: (state, action) => {}
	}
});

export const { actions: characterActions } = characterSlice;
export const { reducer: characterReducer } = characterSlice;