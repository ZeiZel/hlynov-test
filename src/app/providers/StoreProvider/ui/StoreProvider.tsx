import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/providers/StoreProvider/config/store';

interface IStoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProviderProps) => (
	<Provider store={store}>{children}</Provider>
);
