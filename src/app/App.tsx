import React, { FC, ReactElement } from 'react';
import AppRouter from '@/app/providers/router/ui/AppRouter';

export const App: FC = (): ReactElement => {
	return (
		<div className={'app'}>
			<h1 className={'font-bold underline'}>Главная</h1>
			<AppRouter />
		</div>
	);
};
