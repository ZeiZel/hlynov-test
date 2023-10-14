import { Theme } from '@/shared/const';
import { createContext, Context } from 'react';

interface IThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext: Context<IThemeContextProps> = createContext<IThemeContextProps>({});