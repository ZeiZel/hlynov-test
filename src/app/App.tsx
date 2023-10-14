import React, { FC, ReactElement } from 'react';
import AppRouter from '@/app/providers/router/ui/AppRouter';

export const App: FC = (): ReactElement => {
	return (
		<div className={'app'}>
			<AppRouter />
		</div>
	);
};
