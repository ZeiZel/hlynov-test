import React from 'react';
import cn from 'clsx';
import styles from './Skeleton.module.scss';

export const Skeleton = () => {
	return (
		<div className={cn(styles.skeleton)}>
			PageLoading
		</div>
	);
};