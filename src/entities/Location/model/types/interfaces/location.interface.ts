import { IResourceBase } from '@/shared/types';

export interface ILocation extends IResourceBase {
	type: string;
	dimension: string;
	residents: string[];
}

export interface ILocationFilter {
	name?: string;
	type?: string;
	dimension?: string;
	page?: number;
}
