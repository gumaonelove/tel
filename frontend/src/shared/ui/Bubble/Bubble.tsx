import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import {
    Text, TextSize, TextTheme, TextWeight,
} from '../Text/Text';
import cls from './Bubble.module.scss';

export enum BubbleRadius {
    NORMAL = 'normal',
    RIGHT = 'right',
    LEFT = 'left',
}

export enum BubbleTheme {
    PRIMARY = 'primary',
    GREEN_LIGHT = 'green_light',
}
interface BubbleProps {
  className?: string;
  title?: string;
  subtitle?: string;
  radius?: BubbleRadius;
  theme?: BubbleTheme;
  textTheme?: TextTheme;
  children?: ReactNode;
}
export const Bubble = (props: BubbleProps) => {
    const {
        className,
        title,
        subtitle,
        children,
        radius = BubbleRadius.RIGHT,
        theme = BubbleTheme.PRIMARY,
        textTheme = TextTheme.WHITE,
    } = props;

    return (
        <>
            {children && (
                <div className={classNames(cls.Bubble, {}, [className, cls[radius], cls[theme]])}>
                    {children}
                </div>
            )}

            {!children && (
                <div className={classNames(cls.Bubble, {}, [className, cls[radius], cls[theme]])}>
                    <Text
                        className={cls.title}
                        size={TextSize.L}
                        weight={TextWeight.EXTRABOLD}
                        theme={textTheme}
                    >
                        {title}
                    </Text>
                    <Text
                        className={cls.subtitle}
                        size={TextSize.M}
                        theme={textTheme}
                    >
                        {subtitle}
                    </Text>
                </div>
            )}
        </>
    );
};
