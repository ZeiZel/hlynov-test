import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	show?: boolean;
	label?: ReactNode;
	customCallback?: () => void;
}
