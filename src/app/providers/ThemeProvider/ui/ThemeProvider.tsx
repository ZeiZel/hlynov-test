import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme, LOCAL_STORAGE_THEME_KEY } from '@/shared/const';

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

interface ThemeProviderProps {
	initialTheme?: Theme;
	children: ReactNode;
}

const defaultTheme: Theme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
	const [isThemeInited, setThemeInited] = useState<boolean>(false);

	const [theme, setTheme] = useState<Theme>(
		defaultTheme || initialTheme || Theme.LIGHT,
	);

	useEffect(() => {
		if (!isThemeInited && initialTheme) {
			setTheme(initialTheme);
			setThemeInited(true);
		}
	}, [initialTheme, isThemeInited]);

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
	}, [theme]);

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
