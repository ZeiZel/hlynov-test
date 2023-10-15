import React from 'react';
import cn from 'clsx';
import styles from './AppLink.module.scss';
import { IAppLinkProps } from './AppLink.props';

export const AppLink = ({ children, className, ...props }: IAppLinkProps) => {
	return (
		<a className={cn(styles.link, className)} {...props}>
			{children}
		</a>
	);
};
