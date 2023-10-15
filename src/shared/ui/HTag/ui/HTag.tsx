import React from 'react';
import styles from './HTag.module.scss';
import { IHTagProps } from './HTag.props';
import cn from 'clsx';

export const HTag = ({ tag, children, className, ...props }: IHTagProps) => {
	switch (tag) {
		case 'h1':
			return (
				<h1 className={cn(styles.heading, styles.h1, className)}>{children}</h1>
			);
		case 'h2':
			return (
				<h2 className={cn(styles.heading, styles.h2, className)}>{children}</h2>
			);
		case 'h3':
			return (
				<h3 className={cn(styles.heading, styles.h3, className)}>{children}</h3>
			);
		case 'h4':
			return (
				<h4 className={cn(styles.heading, styles.h4, className)}>{children}</h4>
			);
		case 'h5':
			return (
				<h5 className={cn(styles.heading, styles.h5, className)}>{children}</h5>
			);
		case 'h6':
			return (
				<h6 className={cn((styles.heading, styles.h6, className))}>{children}</h6>
			);
		default:
			return <>{children}</>;
	}
};
