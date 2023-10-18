import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'clsx';

interface IDividerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
	full?: boolean;
}

export const Divider = ({ full = true, className, ...props }: IDividerProps) => {
	return (
		<hr
			className={cn(className, 'm-5 border-[#4d5054]', { ['w-full']: full })}
			{...props}
		/>
	);
};
