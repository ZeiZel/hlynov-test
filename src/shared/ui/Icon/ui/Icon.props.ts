import {
	/* static */
	BannerIcon,
	MortyIcon,
	RickIcon,
} from '@/shared/assets';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export enum EIcons {
	/* static */
	Banner,
	Morty,
	Rick,
}

export const ICONS: Record<EIcons, HTMLImageElement | SVGImageElement> = {
	/* static */
	[EIcons.Banner]: BannerIcon,
	[EIcons.Rick]: RickIcon,
	[EIcons.Morty]: MortyIcon,
};

export interface IIconProps
	extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	name: EIcons;
}
