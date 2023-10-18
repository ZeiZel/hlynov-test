import React from 'react';
import cn from 'clsx';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.props';

export const Button = ({
	appearance = 'primary',
	children,
	className,
	...props
}: IButtonProps) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
