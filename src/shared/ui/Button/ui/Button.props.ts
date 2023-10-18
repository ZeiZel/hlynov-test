import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	appearance?: 'primary' | 'ghost' | 'secondary';
}
