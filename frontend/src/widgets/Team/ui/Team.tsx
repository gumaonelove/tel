import { classNames } from 'shared/lib/classNames/classNames';
import { TeamCard } from 'shared/ui/TeamCard/TeamCard';
import IldarImage from 'shared/assets/images/5.jpg';
import RinatImage from 'shared/assets/images/ra.jpg';
import AyratImage from 'shared/assets/images/ar.jpg';
import BulatImage from 'shared/assets/images/be.jpg';
import BulychImage from 'shared/assets/images/bulych.jpg';
import KerilImage from 'shared/assets/images/keril.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemImg1 from 'shared/assets/images/exercises/1.png';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import ItemImg3 from 'shared/assets/images/exercises/3.png';
import ItemImg2 from 'shared/assets/images/exercises/2.png';
import cls from './Team.module.scss';
import { IldarLinks } from '../const/links';

interface TeamProps {
  className?: string;
}
export const Team = (props: TeamProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Team, {}, [className])}>
            <Swiper
                className={cls.swiper}
                slidesPerGroup={1}
                slidesPerView={4}
                spaceBetween={20}
            >
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Гильмуллин Ринат"
                        subtitle="Директор ИПС АН РТ"
                        image={RinatImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Гатиатуллин Айрат"
                        subtitle="Заместитель директора ИПС АН РТ"
                        image={AyratImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Хакимов Булат"
                        subtitle="Ведущий научный сотрудник ИПС АН РТ"
                        image={BulatImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Валиев Ильдар"
                        subtitle="Frontend"
                        image={IldarImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Гумеров Булат"
                        subtitle="Backend"
                        image={BulychImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={cls.slide}
                >
                    <TeamCard
                        title="Пантелеев Кирилл"
                        subtitle="ML — machine learning"
                        image={KerilImage}
                        links={IldarLinks}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
