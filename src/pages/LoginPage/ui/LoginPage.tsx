import React from 'react';
import { BaseAuth } from '@/features/BaseAuth';

const LoginPage = () => {
	return (
		<div className={'flex justify-center items-baseline h-screen pt-60'}>
			<BaseAuth />
		</div>
	);
};

export default LoginPage;
