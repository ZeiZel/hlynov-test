import { Info } from '@/shared/types';
import { IEpisode, IEpisodeFilter } from '@/entities/Episode';

export interface IEpisodeRequest {
	id?: number;
}
export interface IEpisodeResponse extends IEpisode {}

export interface IEpisodeFilterRequest extends IEpisodeFilter {}

export interface IMultipleEpisodeRequest {
	id: number[];
}
export interface IMultipleEpisodeResponse {
	result?: IEpisode[];
}

export interface IEpisodeListRequest {
	page?: number;
}
export interface IEpisodeListResponse extends Info<IEpisode[]> {}
