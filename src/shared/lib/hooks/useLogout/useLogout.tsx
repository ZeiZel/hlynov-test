import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { authActions, getUserAuthState } from '@/features/BaseAuth';

interface IUseLogout {
	status: boolean;
	logoutUser: () => void;
}

export const useLogout = (): IUseLogout => {
	const dispatch = useAppDispatch();
	const userLoginState = useAppSelector(getUserAuthState);

	const logoutUser = () => {
		dispatch(authActions.setUserAuthState(false));
		location.reload();
	};

	return { status: userLoginState ?? false, logoutUser };
};
