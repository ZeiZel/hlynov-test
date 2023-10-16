import React, { ForwardedRef, forwardRef, useId, useState } from 'react';
import cn from 'clsx';
import styles from './Input.module.scss';
import { IInputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{ type = 'text', children, className, ...props }: IInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();

		const [showPassword, setShowPassword] = useState<boolean>(false);

		const handleMouseEnter = () => {
			if (type === 'password') {
				setShowPassword(true);
			}
		};

		const handleMouseLeave = () => {
			if (type === 'password') {
				setShowPassword(false);
			}
		};

		return (
			<label
				htmlFor={id}
				className={cn(styles.input, className)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<input
					ref={ref}
					id={id}
					type={showPassword ? 'text' : type}
					placeholder={'&nbsp;'}
					{...props}
				/>
				<span className={styles.input__label}>{children}</span>
				<span className={styles['input__focus-bg']}></span>
			</label>
		);
	},
);
