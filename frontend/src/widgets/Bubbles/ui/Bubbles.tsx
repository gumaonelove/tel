import { classNames } from 'shared/lib/classNames/classNames';
import { Bubble, BubbleRadius } from 'shared/ui/Bubble/Bubble';
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouteExercises } from 'shared/const/router';
import cls from './Bubbles.module.scss';

export enum BubblesSize {
    PRIMARY = 'primary',
    SQUARED = 'squared',
}
interface BubblesProps {
  className?: string;
  size?: BubblesSize;
}
export const Bubbles = (props: BubblesProps) => {
    const {
        className,
        size = BubblesSize.PRIMARY,
    } = props;
    const navigate = useNavigate();

    const routeToExercisesPage = useCallback(() => {
        navigate(getRouteExercises());
    }, [navigate]);

    return (
        <div className={classNames(cls.Bubbles, {}, [className, cls[size]])}>
            <Bubble
                title="Интерактивность"
                subtitle="пользователь постоянно взаимодействует с сайтом"
                className={cls.item}
            />
            <Bubble
                title="Удовольствие"
                subtitle="вы можете не только изучить язык, но и насладиться процессом"
                radius={BubbleRadius.LEFT}
                className={cls.item}
            />
            <Bubble
                title="Простой интерфейс"
                subtitle="сможет разобраться каждый"
                className={cls.item}
            />
            <Button
                className={cls.item}
                onClick={routeToExercisesPage}
            >
                Начать обучение
            </Button>
        </div>
    );
};
