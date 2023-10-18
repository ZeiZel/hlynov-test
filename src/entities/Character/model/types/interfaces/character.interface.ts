import { IResourceBase } from '@/shared/types';
import { CharacterGender, CharacterStatus } from '@/entities/Character';

export interface ICharacterLocation {
	name: string;
	url: string;
}

export interface ICharacter extends IResourceBase {
	status: 'Dead' | 'Alive' | 'unknown';
	species: string;
	type: string;
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
	origin: ICharacterLocation;
	location: ICharacterLocation;
	image: string;
	episode: string[];
}

export interface ICharacterFilter {
	name?: string;
	type?: string;
	species?: string;
	status?: CharacterStatus;
	gender?: CharacterGender;
	page?: number;
}
