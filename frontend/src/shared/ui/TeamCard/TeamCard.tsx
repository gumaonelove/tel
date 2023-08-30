import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './TeamCard.module.scss';

interface TeamCardLinks {
    name: string;
    link: string;
}
interface TeamCardProps {
  className?: string;
  title: string;
  subtitle: string;
  links?: TeamCardLinks[];
  image?: string;
}
export const TeamCard = (props: TeamCardProps) => {
    const {
        className,
        title,
        subtitle,
        links,
        image,
    } = props;

    return (
        <div className={classNames(cls.TeamCard, {}, [className])}>
            {image && (
                <div className={cls.imgBlock}>
                    <img
                        className={cls.img}
                        src={image}
                        alt={image}
                    />
                </div>
            )}

            <div className={cls.content}>
                <Text
                    className={cls.title}
                    size={TextSize.XXL}
                    weight={TextWeight.EXTRABOLD}
                >
                    {title}
                </Text>
                <Text
                    className={cls.subtitle}
                    size={TextSize.L}
                >
                    {subtitle}
                </Text>

                {links && (
                    <div className={cls.links}>
                        {
                            links?.map(({ link, name }) => (
                                <AppLink
                                    className={cls.link}
                                    href={link}
                                    to="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    key={name}
                                >
                                    <i className="st-link st-link-blue" />
                                    <Text
                                        className={cls.linkText}
                                        size={TextSize.S}
                                        weight={TextWeight.SEMIBOLD}
                                    >
                                        {name}
                                    </Text>
                                </AppLink>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};
