import React from 'react';
import { ICONS, IIconProps } from './Icon.props';

export const Icon = ({ name, className, height = 200, alt, ...props }: IIconProps) => {
	return (
		<img src={ICONS[name]} height={height} alt={alt ?? name.toString()} {...props} />
	);
};
