import React from 'react';
import styles from './Character.module.scss';
import { ICharacterProps } from './Character.props';
import { Card, HTag, Properties } from '@/shared/ui';
import { useGetCharacterQuery } from '@/entities/Character';
import { useQueryLoading } from '@/shared/lib/hooks';
import { ErrorPage } from '@/widgets/ErrorPage';

export const Character = ({ id }: ICharacterProps) => {
	const {
		data: character,
		isLoading,
		isError,
		isSuccess,
	} = useGetCharacterQuery({ id });
	useQueryLoading({ isLoading, isError, isSuccess });

	if (!character) {
		return <ErrorPage />;
	}

	return (
		<Card className={styles.character}>
			<HTag tag={'h3'} className={styles.character__name}>
				{character.name}
			</HTag>
			<div className={styles.character__description}>
				<div className={styles.character__image}>
					<img src={character.image} alt={character.name} height={284} width={284} />
				</div>
				<div className={styles.character__properties}>
					{[
						{ id: 112341, key: 'Пол', value: character.gender },
						{ id: 112233, key: 'Специи(фан)', value: character.species },
						{ id: 112523, key: 'Статус', value: character.status },
						{ id: 151255, key: 'Локация', value: character.location.name },
					].map((prop) => (
						<Properties key={prop.id} value={prop.value} label={prop.key} />
					))}
				</div>
			</div>
		</Card>
	);
};
