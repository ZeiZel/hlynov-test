import React, { ReactNode } from 'react';
import { Layout } from '@/widgets/Layout';

interface ILayoutProviderProps {
	children: ReactNode;
}

export const LayoutProvider = ({ children }: ILayoutProviderProps) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
};