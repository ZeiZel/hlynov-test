import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { authActions, getUserAuthState } from '@/features/BaseAuth';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

interface IUseLogout {
	status: boolean;
	logoutUser: () => void;
}

export const useLogout = (): IUseLogout => {
	const dispatch = useAppDispatch();
	const userLoginState = useAppSelector(getUserAuthState);

	const logoutUser = () => {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		dispatch(authActions.setUserAuthState(false));
		location.reload();
	};

	return { status: userLoginState ?? false, logoutUser };
};
