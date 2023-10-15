import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance?: 'primary' | 'secondary' | 'ghost' | 'selected';
}
