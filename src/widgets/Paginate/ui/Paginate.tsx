import React, { FC, ReactElement, useState } from 'react';
import styles from './Paginate.module.scss';
import { Button, Card } from '@/shared/ui';
import { IPaginateProps } from './Paginate.props';

export const Paginate: FC<IPaginateProps> = ({
	totalPages,
	handleChangePage,
}: IPaginateProps): ReactElement => {
	const [currentPage, setCurrentPage] = useState(1);

	/* тут будет меняться страница и вызываться хэндл-функция для состояния */
	const handlePageClick = (page: number) => {
		setCurrentPage(page);
		handleChangePage(currentPage);
	};

	/* тут мы выводим кнопки со страницами */
	const renderPageButtons = () => {
		const buttons = [];
		const maxButtons = 10;
		const leftOffset = Math.min(
			Math.max(currentPage - 4, 1),
			totalPages - maxButtons + 1,
		);

		for (let i = leftOffset; i < leftOffset + maxButtons && i <= totalPages; i++) {
			buttons.push(
				<Button
					key={i}
					onClick={() => handlePageClick(i)}
					className={styles.paginate__button}
					appearance={i === currentPage ? 'primary' : 'secondary'}
				>
					{i}
				</Button>,
			);
		}

		return buttons;
	};

	return <Card className={styles.paginate}>{renderPageButtons()}</Card>;
};
