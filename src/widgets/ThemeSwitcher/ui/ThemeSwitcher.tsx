import React from 'react';
import { Button } from '@/shared/ui';
import { useTheme } from '@/shared/lib/hooks';

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme();

	return <Button onClick={toggleTheme}>{theme}</Button>;
};
