import React, { FC, ReactElement } from 'react';
import cn from 'clsx';
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.props';
import { Header } from '@/widgets/Layout/ui/Header/Header';
import { Footer } from '@/widgets/Layout/ui/Footer/Footer';

export const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps): ReactElement => {
	return (
		<>
			<Header className={styles.layout__header} />
			<main className={cn(styles.layout__main, 'container')}>
				{children}
			</main>
			<Footer className={styles.layout__footer} />
		</>
	);
};