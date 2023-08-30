import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonForm {
    NORMAL = 'normal',
    ROUND = 'round',
}
export enum ButtonRadius {
    NORMAL = 'normal',
    LEFT = 'left',
    RIGHT = 'right',
}
export enum ButtonTheme {
    PRIMARY = 'primary',
    DARK = 'dark',
    LIGHT = 'light',
    BLUE = 'blue',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    radius?: ButtonRadius;
    form?: ButtonForm;
    disabled?: boolean;
}
export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        disabled,
        theme = ButtonTheme.PRIMARY,
        radius = ButtonRadius.NORMAL,
        form = ButtonForm.NORMAL,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[radius], cls[form]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
