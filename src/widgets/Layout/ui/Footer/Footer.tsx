import React from 'react';
import cn from 'clsx';
import styles from './Footer.module.scss';
import { IFooterProps } from './Footer.props';

export const Footer = ({ className }: IFooterProps) => {
	return (
		<footer className={cn(styles.header, className)}>
		</footer>
	);
};