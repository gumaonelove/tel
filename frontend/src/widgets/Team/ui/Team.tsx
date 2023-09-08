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
                title="Гильмуллин Ринат"
                subtitle="Директор ИПС АН РТ"
                image={RinatImage}
                className={cls.card}
                links={RALinks}
            />
            <TeamCard
                title="Гатиатуллин Айрат"
                subtitle="Заместитель директора ИПС АН РТ"
                image={AyratImage}
                className={cls.card}
                links={GALinks}
            />
            <TeamCard
                title="Хакимов Булат"
                subtitle="Ведущий научный сотрудник ИПС АН РТ"
                image={BulatImage}
                className={cls.card}
                links={HBLinks}
            />
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
            <TeamCard
                title="Пантелеев Кирилл"
                subtitle="Machine learning"
                image={KerilImage}
                links={KerilLinks}
                className={cls.card}
            />
        </div>
    );
};
