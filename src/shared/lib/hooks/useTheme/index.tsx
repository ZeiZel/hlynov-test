import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/shared/const';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface IUseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
	const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
}
