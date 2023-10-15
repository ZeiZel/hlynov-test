import React, { FC, ReactElement } from 'react';
import cn from 'clsx';
import AppRouter from '@/app/providers/router/ui/AppRouter';
import { LayoutProvider } from './providers';
import { useTheme } from '@/shared/lib/hooks';

export const App: FC = (): ReactElement => {
	const { theme } = useTheme();

	return (
		<div className={cn('app', [theme])}>
			<LayoutProvider>
				<AppRouter />
			</LayoutProvider>
		</div>
	);
};
