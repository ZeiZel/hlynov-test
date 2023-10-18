import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { authActions, AuthSchema, getUserAuthState } from '@/features/BaseAuth';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

interface IUseLogin extends AuthSchema {}

export const useLogin = (): IUseLogin => {
	const dispatch = useAppDispatch();
	const loginState = useAppSelector(getUserAuthState);

	useEffect(() => {
		dispatch(
			authActions.setUserAuthState(!!localStorage.getItem(USER_LOCALSTORAGE_KEY)),
		);
	}, []);

	return { loginState: loginState ?? false };
};
