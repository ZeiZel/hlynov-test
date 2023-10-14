import React from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';

export const Button = ({ children, className }: IButtonProps) => {
	return (
		<button className={cn(styles.button, className)}>
			{children}
		</button>
	);
};