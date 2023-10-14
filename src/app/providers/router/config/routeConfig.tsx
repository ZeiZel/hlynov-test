import React from 'react';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, getRouteForbidden, getRouteMain, getRouteNotFound } from '../model/const';
import { MainPageAsync } from '@/pages/MainPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { NotFoundPageAsync } from '@/pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPageAsync />,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPageAsync />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPageAsync />,
	},
};
