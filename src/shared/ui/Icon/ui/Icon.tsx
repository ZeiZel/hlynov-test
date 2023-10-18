import React from 'react';
import { ICONS, IIconProps } from './Icon.props';

export const Icon = ({ name, className, alt, ...props }: IIconProps) => {
	return <img src={ICONS[name]} alt={alt ?? name.toString()} {...props} />;
};
