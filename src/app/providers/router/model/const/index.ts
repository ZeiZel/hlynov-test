export enum AppRoutes {
	MAIN = 'main',
	LOGIN = 'login',
	CHARACTER = 'character',
	CHARACTER_LIST = 'character_list',
	LOCATION = 'location',
	EPISODE = 'episode',
	ABOUT = 'about',
	FORBIDDEN = 'forbidden',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteCharacter = (id: string) => `/character/${id}`;
export const getRouteCharacterList = () => '/character-list';
export const getRouteLocation = () => '/location';
export const getRouteEpisode = () => '/episode';
export const getRouteAbout = () => '/about';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '/*';
