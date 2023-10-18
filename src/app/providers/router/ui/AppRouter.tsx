import React, { FC, memo, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { Skeleton } from '@/widgets/Skeleton';
import { AppRouteProps } from '@/app/providers/router';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter: FC = (): ReactElement => (
	<Routes>
		{Object.values(routeConfig).map((route: AppRouteProps) => (
			<Route
				key={route.path}
				path={route.path}
				element={
					route.authOnly ? (
						<RequireAuth>
							<Suspense fallback={<Skeleton />}>{route.element}</Suspense>
						</RequireAuth>
					) : (
						<Suspense fallback={<Skeleton />}>{route.element}</Suspense>
					)
				}
			/>
		))}
	</Routes>
);

export default memo(AppRouter);
