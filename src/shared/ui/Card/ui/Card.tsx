import React from 'react';
import cn from 'clsx';
import styles from './Card.module.scss';
import { ICardProps } from './Card.props';

export const Card = ({
	appearance = 'primary',
	children,
	className,
	...props
}: ICardProps) => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.primary]: appearance === 'primary',
				[styles.selected]: appearance === 'selected',
				[styles.secondary]: appearance === 'secondary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
		</div>
	);
};
