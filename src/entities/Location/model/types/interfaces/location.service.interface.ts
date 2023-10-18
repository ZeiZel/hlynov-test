import { Info } from '@/shared/types';
import { ILocation, ILocationFilter } from '@/entities/Location';

export interface ILocationRequest {
	id?: number;
}
export interface ILocationResponse extends ILocation {}

export interface ILocationFilterRequest extends ILocationFilter {}

export interface IMultipleLocationRequest {
	id: number[];
}
export interface IMultipleLocationResponse {
	result?: ILocation[];
}

export interface ILocationListRequest {
	page?: number;
}
export interface ILocationListResponse extends Info<ILocation[]> {}
