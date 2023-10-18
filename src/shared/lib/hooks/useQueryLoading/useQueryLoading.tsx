import React, { useState } from 'react';
import { Skeleton } from '@/widgets/Skeleton';
import { ErrorPage } from '@/widgets/ErrorPage';

interface IUseQueryLoading {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
}

export const useQueryLoading = ({ isLoading, isSuccess, isError }: IUseQueryLoading) => {
	if (isLoading) {
		return <Skeleton />;
	}

	if (isSuccess) {
		return;
	}

	if (isError) {
		return <ErrorPage />;
	}
};
