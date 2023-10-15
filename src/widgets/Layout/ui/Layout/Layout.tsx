import React, { FC, ReactElement } from 'react';
import cn from 'clsx';
import styles from './Layout.module.scss';
import { ILayoutProps } from './Layout.props';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps): ReactElement => {
	return (
		<div className={cn(styles.layout, 'container')}>
			<Header className={styles.layout__header} />
			<main className={cn(styles.layout__main)}>{children}</main>
			<Footer className={styles.layout__footer} />
		</div>
	);
};
