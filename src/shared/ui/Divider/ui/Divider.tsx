import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'clsx';

interface IDividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Divider = ({ className, ...props }: IDividerProps) => {
	return <hr className={cn(className, 'm-5')} {...props} />;
};
