import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './BaseAuth.module.scss';
import { IAuthForm, useAuthUserMutation } from '@/features/BaseAuth';
import { Button, Card, HTag, Input } from '@/shared/ui';

export const BaseAuth = () => {
	const { register, handleSubmit } = useForm<IAuthForm>();

	const [fetchAuth] = useAuthUserMutation();

	const onSubmit = (data: IAuthForm) => {
		fetchAuth(data);
		window.location.replace('/');
	};

	return (
		<Card className={styles.auth}>
			<HTag tag={'h3'}>Авторизация</HTag>
			<form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
				<Input
					placeholder={'логин'}
					{...register('login', {
						required: { value: true, message: 'Заполните логин' },
					})}
				/>
				<Input
					placeholder={'пароль'}
					{...register('password', {
						required: { value: true, message: 'Заполните пароль' },
					})}
				/>
				<Button type={'submit'}>Войти</Button>
			</form>
		</Card>
	);
};
