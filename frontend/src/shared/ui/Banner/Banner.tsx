import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Banner.module.scss';

export enum BannerTheme {
    PURPLE = 'purple'
}
interface BannerProps {
    className?: string;
    theme?: BannerTheme;
    title: string;
    description: string;
    image?: string;
}
export const Banner = (props: BannerProps) => {
    const {
        className,
        theme = BannerTheme.PURPLE,
        title,
        description,
        image,
    } = props;
    return (
        <div className={classNames(cls.Banner, {}, [className, 'banner'])}>
            <div className="banner__container">
                <div className={classNames(cls.bannerContent, {}, ['banner__content', cls[theme]])}>
                    <div className="banner__title">{title}</div>
                    <p className="banner__description">
                        {description}
                    </p>
                    <div className="banner__img">
                        <img
                            src={image}
                            alt="star"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
