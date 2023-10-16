import React from 'react';
import styles from './CharactersList.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { Paginate } from '@/widgets/Paginate';
import {
	characterActions,
	CharacterCard,
	CharacterDescription,
	getSelectedPage,
	useGetCharacterListQuery,
} from '@/entities/Character';
import { useQueryLoading } from '@/shared/lib/hooks';
import { HTag } from '@/shared/ui';

export const CharactersList = () => {
	const dispatch = useAppDispatch();
	const selectedPage = useAppSelector(getSelectedPage);
	const {
		data: characters,
		isLoading,
		isError,
		isSuccess,
	} = useGetCharacterListQuery({ page: selectedPage ?? 1 });

	useQueryLoading({ isLoading, isError, isSuccess });

	const handleChangePage = (page: number) =>
		dispatch(characterActions.selectPage(page));

	return (
		<div className={styles.characters}>
			<HTag tag={'h1'} className={styles.characters__title}>
				Персонажи
			</HTag>
			<div className={styles.characters__data}>
				<div className={styles.characters__list}>
					{characters?.results?.map((char) => <CharacterCard {...char} />)}
				</div>
				<div className={styles.characters__description}>
					<CharacterDescription />
				</div>
			</div>
			<div className={styles.characters__pagination}>
				<Paginate
					totalPages={characters?.info?.pages ?? 10}
					handleChangePage={handleChangePage}
				/>
			</div>
		</div>
	);
};
