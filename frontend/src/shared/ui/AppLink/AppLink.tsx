import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    BLUE = 'blue',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    href?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        href,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <>
            {
                to && !href && (
                    <Link
                        to={to}
                        className={classNames(cls.AppLink, { }, [className, cls[theme]])}
                        {...otherProps}
                    >
                        {children}
                    </Link>
                )
            }

            {
                to && href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        className={classNames(cls.AppLink, { }, [className, cls[theme]])}
                    >
                        {children}
                    </a>
                )
            }
        </>
    );
};
