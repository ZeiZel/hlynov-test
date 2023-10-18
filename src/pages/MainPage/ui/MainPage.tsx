import React from 'react';
import styles from './MainPage.module.scss';
import { Card, HTag, Icon, Modal, P } from '@/shared/ui';
import { useUserEntry } from '@/shared/lib/hooks';
import { EIcons } from '@/shared/ui/Icon/ui/Icon.props';
import { Divider } from '@/shared/ui/Divider';

const MainPage = () => {
	const { firstEntry } = useUserEntry();

	return (
		<div className={styles.main}>
			<Modal show={firstEntry}>
				<Card className={styles.main__modal}>
					<div>
						<P>
							Привет, если ты видишь это приложение, то, скорее всего, ты
							выполняешь тестовое задание для Банка Хлынов!
						</P>
						<br />
						<P>
							Если это так, то оно полностью покажет и расскажет тебе, какие
							технологии и подходы мы используем при разработки нашего
							сайта.
						</P>
						<br />
						<P>
							Я надеюсь, что это тестовое задание поможет тебе определиться,
							подходим ли мы тебе в качестве твоего работодателя и твоей
							уверенной точки роста!
						</P>
						<br />
						<P>
							И, кстати, вот твоё первое задание. Сможешь убрать эту пустую
							линию снизу (которую должен закрывать overlay) ?
						</P>
					</div>
				</Card>
			</Modal>
			<HTag tag={'h1'} className={styles.main__title}>
				Вселенная Рика и Морти
			</HTag>
			<Divider />
			<Card className={styles.main__block}>
				<HTag tag={'h3'} className={styles.main__subtitle}>
					О мультсериале
				</HTag>
				<div>
					<Icon name={EIcons.Banner} alt={'Баннер'} width={250} />
					<P>
						Рик и Морти (англ. Rick and Morty) — американский мультсериал,
						созданный Дэном Хармоном и Джастином Ройландом, премьера которого
						состоялась 2 декабря 2013 г. в программном блоке Adult Swim на
						телеканале Cartoon Network. Выход 6-го сезона состоялся 4 сентября
						2022 г.
					</P>
				</div>
			</Card>
			<Divider />
			<Card className={styles.main__block}>
				<HTag tag={'h3'} className={styles.main__subtitle}>
					Рик Санчез
				</HTag>
				<div>
					<P>
						Ричард «Рик» Санчез (англ. Rick Sanchez) — главный протагонист
						мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм,
						безрассудность и социопатия заставляют беспокоиться семью его
						дочери.
					</P>
					<Icon name={EIcons.Rick} alt={'Рик'} width={400} />
				</div>
			</Card>
			<Divider />
			<Card className={styles.main__block}>
				<HTag tag={'h3'} className={styles.main__subtitle}>
					Морти Смит
				</HTag>
				<div>
					<P>
						Морти Смит (англ. Morty Smith) или Мортимер «Морти» Смит-старший —
						является одним из главных героев сериала. Приходится внуком Рику и
						часто вынужден ходить по пятам на его различных «злоключениях».
					</P>
					<Icon name={EIcons.Morty} alt={'Морти'} width={300} />
				</div>
			</Card>
		</div>
	);
};

export default MainPage;
