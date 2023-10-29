import React from 'react';
import styles from './CharacterCard.module.scss';
import { ICharacterCardProps } from './CharacterCard.props';
import { Card } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { characterActions, getSelectedChar } from '@/entities/Character';

export const CharacterCard = ({
	id,
	status,
	episode,
	gender,
	created,
	image,
	location,
	name,
	origin,
	url,
	type,
	species,
}: ICharacterCardProps) => {
	const dispatch = useAppDispatch();
	const selectedChar = useAppSelector(getSelectedChar);

	const handleChangeChar = () => dispatch(characterActions.selectCharacter(id));

	return (
		<Card
			appearance={selectedChar === id ? 'selected' : 'primary'}
			className={styles.character}
			onClick={handleChangeChar}
		>
			<div className={styles.character__image}>
				<img src={image} alt={name} height={284} width={284} />
			</div>
			<div className={styles.character__description}>
				<span>Имя: {name}</span>
				<span>Тип: {type}</span>
				<span>Статус: {status}</span>
			</div>
		</Card>
	);
};
