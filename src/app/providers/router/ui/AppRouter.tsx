import React, { FC, memo, ReactElement, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { Skeleton } from '@/widgets/Skeleton';

const AppRouter: FC = (): ReactElement => (
	<Routes>
		{Object.values(routeConfig).map((route: RouteProps) => (
			<Route
				key={route.path}
				path={route.path}
				element={
					<Suspense fallback={<Skeleton />}>{route.element}</Suspense>
				}
			/>
		))}
	</Routes>);

export default memo(AppRouter);
