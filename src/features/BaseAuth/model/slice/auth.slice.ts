import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '@/features/BaseAuth';

const initialState: AuthSchema = {
	loginState: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserAuthState: (state: AuthSchema, action: PayloadAction<boolean>) => {
			state.loginState = action.payload;
		},
	},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
