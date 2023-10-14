import { ICharacter } from '@/entities/Character';

export interface ICharacterRequest {
	name?: string;
	status?: 'alive' | 'dead' | 'unknown';
	species?: string;
	type?: string;
	gender?: 'female' | 'male' | 'genderless' | 'unknown';
}
export interface ICharacterResponse extends ICharacter {}

export interface IMultipleCharacterRequest {
	id: number[];
}
export interface IMultipleCharacterResponse {
	result?: ICharacter[];
}

export interface ICharacterListRequest {}
export interface ICharacterListResponse {
	info?: string;
	count?: number;
	pages?: number;
	next?: number;
	result: ICharacter[];
}
