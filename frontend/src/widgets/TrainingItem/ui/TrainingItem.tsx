import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import cls from './TrainingItem.module.scss';

export enum TrainingItemTheme {
    PRIMARY = 'primary',
    WHITE = 'white',
    PURPLE = 'purple',
    PINK = 'pink',
    BLUE = 'blue',
}
export enum TrainingItemSize {
    NORMAL = 'normal',
    BIG = 'big',
}
interface TrainingItemProps {
  className?: string;
  title?: string;
  subtitle?: string;
  size?: TrainingItemSize;
  to?: string;
  href?: string;
  linkTitle: string;
  image?: string;
  linkTheme?: AppLinkTheme;
  name?: string;
  live?: string;
  soon?: string;
  theme?: TrainingItemTheme;
  icon?: string;
  titleTheme?: TextTheme;
  titleImg?: string;
  linkIcon: string;
  description?: string;
}
export const TrainingItem = (props: TrainingItemProps) => {
    const {
        className,
        title,
        titleImg,
        subtitle,
        name,
        live,
        soon,
        to,
        href,
        linkTitle,
        image,
        icon,
        linkIcon,
        description,
        titleTheme = TextTheme.BLUE,
        size = TrainingItemSize.NORMAL,
        linkTheme = AppLinkTheme.PRIMARY,
        theme = TrainingItemTheme.PRIMARY,
    } = props;

    const textMods: Mods = {
        [cls.withoutImage]: !image,
    };

    return (
        <div className={classNames(cls.TrainingItem, {}, [className])}>
            <div className={classNames(cls.wrapper, {}, [cls[size], cls[theme]])}>
                <div className={classNames(cls.text, textMods, [])}>
                    {titleImg && (
                        <img
                            src={titleImg}
                            alt={titleImg}
                        />
                    )}
                    {title && (
                        <Text
                            size={TextSize.XXL}
                            weight={TextWeight.EXTRABOLD}
                            theme={titleTheme}
                            className={cls.title}
                        >
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <Text
                            size={TextSize.L}
                            className={cls.subtitle}
                        >
                            {subtitle}
                        </Text>
                    )}
                    {description && (
                        <Text
                            size={TextSize.L}
                            weight={TextWeight.BOLD}
                            className={cls.description}
                        >
                            {description}
                        </Text>
                    )}
                    {name && (
                        <Text
                            size={TextSize.M}
                            className={cls.name}
                        >
                            {name}
                        </Text>
                    )}
                    {live && (
                        <Text
                            size={TextSize.XL}
                            weight={TextWeight.EXTRABOLD}
                            className={cls.live}
                        >
                            {live}
                        </Text>
                    )}
                    {soon && (
                        <Text
                            size={TextSize.M}
                            className={cls.soon}
                        >
                            {soon}
                        </Text>
                    )}
                </div>
                <div className={cls.button}>
                    {href && (
                        <AppLink
                            to="/"
                            href={href}
                            className={cls.link}
                            theme={linkTheme}
                        >
                            <i className={linkIcon} />
                            <span>{linkTitle}</span>
                        </AppLink>
                    )}
                    {to && (
                        <AppLink
                            to={to}
                            className={cls.link}
                            theme={linkTheme}
                        >
                            <i className={linkIcon} />
                            <span>{linkTitle}</span>
                        </AppLink>
                    )}
                    {icon && (
                        <div className={cls.icon}>
                            <i className={icon} />
                        </div>
                    )}
                </div>
                {image && (
                    <div className={cls.img}>
                        <img
                            src={image}
                            alt={image}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
