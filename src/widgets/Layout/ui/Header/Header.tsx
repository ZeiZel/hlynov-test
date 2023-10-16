import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'clsx';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import {
	getRouteAbout,
	getRouteCharacterList,
	getRouteEpisode,
	getRouteLocation,
	getRouteLogin,
	getRouteMain,
} from '@/app/providers/router/model/const';
import { useLogin, useLogout } from '@/shared/lib/hooks';
import { Button, Card } from '@/shared/ui';

const navRoutes = [
	{ id: 1, to: getRouteMain(), label: 'Главная', auth: false },
	{ id: 2, to: getRouteCharacterList(), label: 'Персонажи', auth: true },
	{ id: 3, to: getRouteLocation(), label: 'Локации', auth: true },
	{ id: 4, to: getRouteEpisode(), label: 'Эпизоды', auth: true },
	{ id: 5, to: getRouteAbout(), label: 'О приложении', auth: false },
];

export const Header = ({ className }: IHeaderProps) => {
	const { loginState } = useLogin();
	const { logoutUser } = useLogout();

	return (
		<header className={cn(styles.header, className)}>
			<Card className={styles.header__actions}>
				<nav className={styles.header__nav}>
					<div className={styles.header__left}>
						{navRoutes.map((route) =>
							loginState ? (
								<Link key={route.id} to={route.to}>
									<Button>{route.label}</Button>
								</Link>
							) : (
								!route.auth && (
									<Link key={route.id} to={route.to}>
										<Button>{route.label}</Button>
									</Link>
								)
							),
						)}
					</div>
					<div className={styles.header__right}>
						<div className={styles.header__login}>
							{!!loginState ? (
								<Button onClick={logoutUser}>{'Выйти'}</Button>
							) : (
								<Link to={getRouteLogin()}>
									<Button>Войти</Button>
								</Link>
							)}
						</div>
						<ThemeSwitcher />
					</div>
				</nav>
			</Card>
		</header>
	);
};
