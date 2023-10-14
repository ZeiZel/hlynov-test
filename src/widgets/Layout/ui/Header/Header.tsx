import React from 'react';
import cn from 'clsx';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

export const Header = ({ className }: IHeaderProps) => {
	return (
		<header className={cn(styles.header, className)}>
			<ThemeSwitcher />
		</header>
	);
};