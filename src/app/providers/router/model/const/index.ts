export enum AppRoutes {
	MAIN = 'main',
	FORBIDDEN = 'forbidden',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '/*';
