import React from 'react';
import cn from 'clsx';
import styles from './Footer.module.scss';
import { IFooterProps } from './Footer.props';
import { AppLink, Card, HTag, P } from '@/shared/ui';

export const Footer = ({ className }: IFooterProps) => {
	return (
		<footer className={cn(styles.footer, className)}>
			<Card className={styles.footer__card}>
				<HTag tag={'h3'}>Банк "Хлынов"</HTag>
				<P>
					Developed by{' '}
					<AppLink href={'https://github.com/ZeiZel'}>ZeiZel</AppLink>
				</P>
			</Card>
		</footer>
	);
};
