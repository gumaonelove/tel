import { classNames } from 'shared/lib/classNames/classNames';
import { Section } from 'app/providers/Section';
import { Projects } from 'widgets/Projects';
import { Team } from 'widgets/Team';
import { Header } from 'widgets/Header';
import { Bubble, BubbleTheme } from 'shared/ui/Bubble/Bubble';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemImg1 from 'shared/assets/images/exercises/1.png';
import ItemImg2 from 'shared/assets/images/exercises/2.png';
import ItemImg3 from 'shared/assets/images/exercises/3.png';
import { useCallback, useState } from 'react';
import { getRouteAudition, getRouteReading, getRouteSyntax } from 'shared/const/router';
import { useNavigate } from 'react-router-dom';
import cls from './ExercisesPage.module.scss';

interface ExercisesPageProps {
  className?: string;
}

const breakpoints = {
    0: {
        slidesPerView: 2,
    },
    576: {
        slidesPerView: 3,
    },
};
const ExercisesPage = (props: ExercisesPageProps) => {
    const {
        className,
    } = props;
    const [activeTab, setActiveTab] = useState(getRouteSyntax());
    const navigate = useNavigate();

    const detectActiveTab = (tab: number) => {
        if (tab === 0) {
            setActiveTab(getRouteSyntax());
        } else if (tab === 1) {
            setActiveTab(getRouteReading());
        } else {
            setActiveTab(getRouteAudition());
        }
    };

    const goToRoutePath = useCallback(() => {
        navigate(activeTab);
    }, [activeTab, navigate]);

    return (
        <div className={classNames(cls.ExercisesPage, {}, [className])}>
            <Header />
            <div className={cls.content}>
                <div className={cls.left}>
                    <Bubble
                        title={
                            // eslint-disable-next-line no-nested-ternary
                            activeTab === getRouteSyntax()
                                ? 'Упражнение синтаксис —'
                                : activeTab === getRouteAudition()
                                    ? 'Упражнение аудирование —'
                                    : 'Упражнение чтение —'
                        }
                        subtitle={
                            // eslint-disable-next-line no-nested-ternary
                            activeTab === getRouteSyntax()
                                ? 'составление предложений'
                                : activeTab === getRouteAudition()
                                    ? 'проверка знаний слов'
                                    : 'тестирование способности навыков чтения'
                        }
                        theme={BubbleTheme.GREEN_LIGHT}
                        textTheme={TextTheme.DARK}
                        className={cls.bubble}
                    />
                    <Button
                        radius={ButtonRadius.RIGHT}
                        theme={ButtonTheme.DARK}
                        onClick={goToRoutePath}
                    >
                        Начать упражнение
                    </Button>
                </div>
                <div className={cls.right}>
                    <div className={cls.rightTop}>
                        <Swiper
                            className={cls.swiper}
                            breakpoints={breakpoints}
                            loop
                            centeredSlides
                            slideToClickedSlide
                            onSlideChange={(swiper) => { detectActiveTab(swiper.realIndex); }}
                        >
                            <SwiperSlide
                                className={cls.slide}
                            >
                                {({ isActive }) => (
                                    <>
                                        <img
                                            src={ItemImg1}
                                            alt={ItemImg1}
                                            className={classNames(cls.img, { [cls.active]: isActive }, [])}
                                        />
                                        <Text
                                            theme={TextTheme.DARK}
                                            size={isActive ? TextSize.XL : TextSize.M}
                                            weight={isActive ? TextWeight.EXTRABOLD : TextWeight.REGULAR}
                                        >
                                            Синтаксис
                                        </Text>
                                    </>
                                )}
                            </SwiperSlide>
                            <SwiperSlide
                                className={cls.slide}
                            >
                                {({ isActive }) => (
                                    <>
                                        <img
                                            src={ItemImg3}
                                            alt={ItemImg3}
                                            className={classNames(cls.img, { [cls.active]: isActive }, [])}
                                        />
                                        <Text
                                            theme={TextTheme.DARK}
                                            size={isActive ? TextSize.XL : TextSize.M}
                                            weight={isActive ? TextWeight.EXTRABOLD : TextWeight.REGULAR}
                                        >
                                            Чтение
                                        </Text>
                                    </>
                                )}
                            </SwiperSlide>
                            <SwiperSlide
                                className={cls.slide}
                            >
                                {({ isActive }) => (
                                    <>
                                        <img
                                            src={ItemImg2}
                                            alt={ItemImg2}
                                            className={classNames(cls.img, { [cls.active]: isActive }, [])}
                                        />
                                        <Text
                                            theme={TextTheme.DARK}
                                            size={isActive ? TextSize.XL : TextSize.M}
                                            weight={isActive ? TextWeight.EXTRABOLD : TextWeight.REGULAR}
                                        >
                                            Аудирование
                                        </Text>
                                    </>
                                )}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={cls.rightBottom}>
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.XL}
                            className={cls.descrText}
                        >
                            {
                                // eslint-disable-next-line no-nested-ternary
                                activeTab === getRouteSyntax()
                                    ? 'Здесь вам нужно расставить '
                                    + 'слова в таком порядке, чтобы получилось '
                                    + 'корректное предложение.'
                                    : activeTab === getRouteAudition()
                                        ? 'Вам будет предложено прослушать '
                                        + 'ряд слов и выбрать то, которое вам '
                                        + 'кажется подходящим под звучание'
                                        : 'Для выполнения задания нужно разрешить доступ к микрофону'
                            }
                        </Text>
                        <div className={cls.description}>
                            <i className="st-info" />
                            <Text
                                weight={TextWeight.SEMIBOLD}
                                size={TextSize.S}
                                theme={TextTheme.BLUE}
                                className={cls.descr}
                            >
                                Описание упражнения
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <Section
                title="Проекты"
                subtitle="saf.tatar"
            >
                <Projects
                    main
                />
            </Section>
            <Section
                title="Команда"
                subtitle="saf.tatar"
            >
                <Team />
            </Section>
        </div>
    );
};

export default ExercisesPage;
