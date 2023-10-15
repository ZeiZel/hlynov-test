export enum AppRoutes {
	MAIN = 'main',
	LOGIN = 'login',
	CHARACTER = 'character',
	LOCATION = 'location',
	EPISODE = 'episode',
	ABOUT = 'about',
	FORBIDDEN = 'forbidden',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteCharacter = () => '/character';
export const getRouteLocation = () => '/location';
export const getRouteEpisode = () => '/episode';
export const getRouteAbout = () => '/about';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '/*';
