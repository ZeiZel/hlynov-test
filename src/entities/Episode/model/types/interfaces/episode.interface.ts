import { IResourceBase } from '@/shared/types';

export interface IEpisodeFilter {
	page?: number;
	name?: string;
	episode?: string;
}

export interface IEpisode extends IResourceBase {
	air_date: string;
	episode: string;
	characters: string[];
}
