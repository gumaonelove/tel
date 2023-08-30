import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    DEFAULT = 'default',
    ERROR = 'error',
    BLUE = 'blue',
    GREEN_LIGHT = 'green_light',
    RED = 'red',
    YELLOW_LIGHT = 'yellow_light',
    WHITE = 'white',
    DARK = 'dark',
    BLUE_LIGHT = 'blue_light',
}

export enum TextSize {
    XXXS = 'xxxs',
    XXS = 'xxs',
    XS = 'xs',
    S = 's',
    XM = 'xm',
    M = 'm',
    L = 'l',
    XLX = 'xlx',
    XL = 'xl',
    XXL = 'xxl',
    XXXL = 'xxxl',
}

export enum TextWeight {
    REGULAR = 'regular',
    MEDIUM = 'medium',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold'
}
interface TextProps {
    children?: ReactNode;
    className?: string;
    theme?: TextTheme;
    size?: TextSize;
    weight?: TextWeight;
}
export const Text = (props: TextProps) => {
    const {
        children,
        className,
        theme = TextTheme.DEFAULT,
        size = TextSize.S,
        weight = TextWeight.REGULAR,
    } = props;

    return (
        <div className={classNames(
            cls.Text,
            {},
            [className, cls[theme], cls[size], cls[weight]],
        )}
        >
            {children}
        </div>
    );
};
