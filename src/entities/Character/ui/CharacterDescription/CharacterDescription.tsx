import React from 'react';
import styles from './CharacterDescription.module.scss';
import { useAppSelector } from '@/app/providers/StoreProvider';
import { getSelectedChar, useGetCharacterQuery } from '@/entities/Character';
import { Button, Card } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { getRouteCharacter } from '@/app/providers/router/model/const';

export const CharacterDescription = () => {
	const selectedChar = useAppSelector(getSelectedChar);
	const {
		data: character,
		isLoading,
		isError,
		isSuccess,
	} = useGetCharacterQuery({ id: selectedChar ?? 1 });

	if (isLoading || !character) {
		return <div>Loading...</div>;
	}

	const { id, image, name, type, status, created, gender, origin, species } = character;

	return (
		<Card className={styles.character}>
			<div className={styles.character__image}>
				<img src={image} alt={name} height={150} />
			</div>
			<div className={styles.character__description}>
				<span>Имя: {name}</span>
				<span>Тип: {type}</span>
				<span>Статус: {status}</span>
				<span>Создан: {created}</span>
				<span>Пол: {gender}</span>
			</div>
			<Button>
				<Link to={getRouteCharacter(id.toString())}>Подробнее</Link>
			</Button>
		</Card>
	);
};
