import React from 'react';
import { IPropertiesProps } from './Properties.props';
import { Divider } from '@/shared/ui';

export const Properties = ({ label, value }: IPropertiesProps) => {
	return (
		<div className={'flex flex-row content-center items-center w-full'}>
			<span className={'font-bold'}>{label}</span>
			<Divider className={'border-dotted'} full={false} />
			<span>{value}</span>
		</div>
	);
};
