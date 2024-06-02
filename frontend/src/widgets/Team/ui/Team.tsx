import { classNames } from 'shared/lib/classNames/classNames';
import { TeamCard } from 'shared/ui/TeamCard/TeamCard';
import IldarImage from 'shared/assets/images/5.jpg';
import RinatImage from 'shared/assets/images/ra.jpg';
import AyratImage from 'shared/assets/images/ar.jpg';
import BulatImage from 'shared/assets/images/be.jpg';
import BulychImage from 'shared/assets/images/bulych.jpg';
import KerilImage from 'shared/assets/images/keril.jpg';
import cls from './Team.module.scss';
import {
    BulatLinks, GALinks, HBLinks, IldarLinks, KerilLinks, RALinks,
} from '../const/links';

interface TeamProps {
  className?: string;
}
export const Team = (props: TeamProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Team, {}, [className])}>
            <TeamCard
                title="Валиев Ильдар"
                subtitle="Frontend"
                image={IldarImage}
                links={IldarLinks}
                className={cls.card}
            />
            <TeamCard
                title="Гумеров Булат"
                subtitle="Backend & machine learning"
                image={BulychImage}
                links={BulatLinks}
                className={cls.card}
            />
        </div>
    );
};
