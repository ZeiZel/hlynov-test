import React from 'react';
import {
	AppRoutes,
	getRouteAbout,
	getRouteCharacter,
	getRouteCharacterList,
	getRouteEpisode,
	getRouteForbidden,
	getRouteLocation,
	getRouteLogin,
	getRouteMain,
	getRouteNotFound,
} from '../model/const';
import { MainPageAsync } from '@/pages/MainPage';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import { NotFoundPageAsync } from '@/pages/NotFoundPage';
import { AppRouteProps } from '@/app/providers/router';
import { LoginPageAsync } from '@/pages/LoginPage';
import { EpisodePageAsync } from '@/pages/EpisodePage';
import { AboutPageAsync } from '@/pages/AboutPage';
import { CharacterListPageAsync, CharacterPageAsync } from '@/pages/CharacterPage';
import { LocationPageAsync } from '@/pages/LocationPage';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPageAsync />,
		authOnly: false,
	},
	[AppRoutes.LOGIN]: {
		path: getRouteLogin(),
		element: <LoginPageAsync />,
		authOnly: false,
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPageAsync />,
		authOnly: false,
	},
	[AppRoutes.EPISODE]: {
		path: getRouteEpisode(),
		element: <EpisodePageAsync />,
		authOnly: true,
	},
	[AppRoutes.CHARACTER]: {
		path: getRouteCharacter(':id'),
		element: <CharacterPageAsync />,
		authOnly: true,
	},
	[AppRoutes.CHARACTER_LIST]: {
		path: getRouteCharacterList(),
		element: <CharacterListPageAsync />,
		authOnly: true,
	},
	[AppRoutes.LOCATION]: {
		path: getRouteLocation(),
		element: <LocationPageAsync />,
		authOnly: true,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPageAsync />,
		authOnly: false,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPageAsync />,
		authOnly: false,
	},
};
