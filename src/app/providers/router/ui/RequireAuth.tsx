import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteForbidden } from '@/app/providers/router/model/const';
import { useLogin } from '@/shared/lib/hooks/useLogin/useLogin';

interface RequireAuthProps {
	children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
	const { loginState } = useLogin();
	const location = useLocation();

	if (!loginState) {
		return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
	}

	return children;
}
