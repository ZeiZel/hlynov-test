import { ICharacter, ICharacterFilter } from '@/entities/Character';
import { Info } from '@/shared/types';

export interface ICharacterRequest {
	id?: number;
}
export interface ICharacterResponse extends ICharacter {}

export interface ICharacterFilterRequest extends ICharacterFilter {}

export interface IMultipleCharacterRequest {
	id: number[];
}
export interface IMultipleCharacterResponse {
	result?: ICharacter[];
}

export interface ICharacterListRequest {
	page?: number;
}
export interface ICharacterListResponse extends Info<ICharacter[]> {}
