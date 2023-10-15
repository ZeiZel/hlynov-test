import React from 'react';
import { Card, HTag, Modal, P } from '@/shared/ui';
import { useUserEntry } from '@/shared/lib/hooks';

const MainPage = () => {
	const { firstEntry } = useUserEntry();

	return (
		<Card>
			<HTag tag={'h1'}>Вселенная Рика и Морти</HTag>
			<Modal show={firstEntry}>
				<Card>
					<P>
						Привет, если ты видишь это приложение, то, скорее всего, ты
						выполняешь тестовое задание для Банка Хлынов! <br /> Если это так,
						то оно полностью покажет и расскажет тебе, какие технологии и
						подходы мы используем при разработки нашего сайта. Я надеюсь, что
						это тестовое задание поможет тебе определиться, подходим ли мы
						тебе в качестве твоего работодателя и твоей уверенной точки роста!
					</P>
				</Card>
			</Modal>
		</Card>
	);
};

export default MainPage;
