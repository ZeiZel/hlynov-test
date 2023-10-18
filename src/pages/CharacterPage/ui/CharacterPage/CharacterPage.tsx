import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { Character } from '@/entities/Character';
import { getRouteNotFound } from '@/app/providers/router/model/const';

const CharacterPage = () => {
	const { id } = useParams();
	const location = useLocation();

	if (!id) {
		return <Navigate to={getRouteNotFound()} state={{ from: location }} replace />;
	}

	return (
		<div>
			<Character id={Number(id)} />
		</div>
	);
};

export default CharacterPage;
