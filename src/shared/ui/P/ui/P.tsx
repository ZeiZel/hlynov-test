import React from 'react';
import cn from 'clsx';
import styles from './P.module.scss';
import { IPProps } from './P.props';

export const P = ({ children, className, ...props }: IPProps) => {
	return (
		<p className={cn(styles.p, className)} {...props}>
			{children}
		</p>
	);
};
