import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import styles from './Modal.module.scss';
import { ICardProps } from './Modal.props';
import { Button, Card } from '@/shared/ui';

export const Modal = ({
	customCallback,
	show = false,
	label,
	children,
	className,
	...props
}: ICardProps) => {
	const [showModal, setShowModal] = useState<boolean>(show);

	const toggleModal = () => {
		setShowModal((prevState) => !prevState);
		customCallback?.();
	};

	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, []);

	return (
		<div className={cn(className, styles.modal)} {...props}>
			{label && <Button onClick={toggleModal}>{label}</Button>}
			<div
				className={cn(styles.modal__overlay, {
					visuallyHidden: !showModal,
					[styles.show]: showModal,
				})}
				onClick={toggleModal}
			>
				<div className={styles.modal__content}>{children}</div>
			</div>
		</div>
	);
};
