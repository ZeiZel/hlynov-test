import React, { ForwardedRef, forwardRef, useId } from 'react';
import cn from 'clsx';
import styles from './Input.module.scss';
import { IInputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{ children, className, ...props }: IInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		return (
			<label htmlFor={id} className={cn(styles.input, className)}>
				<input
					ref={ref}
					id={id}
					type={'text'}
					placeholder={'&nbsp;'}
					{...props}
				/>
				<span className={styles.input__label}>{children}</span>
				<span className={styles['input__focus-bg']}></span>
			</label>
		);
	},
);
