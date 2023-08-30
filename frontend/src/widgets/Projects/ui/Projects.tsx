import { classNames } from 'shared/lib/classNames/classNames';
import { TrainingItem } from 'widgets/TrainingItem';
import BookImg from 'shared/assets/icons/book.png';
import TatsoftImg from 'shared/assets/icons/tatsoft_logo.png';
import { TrainingItemSize } from 'widgets/TrainingItem/ui/TrainingItem';
import { TextTheme } from 'shared/ui/Text/Text';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Bubbles } from 'widgets/Bubbles';
import { BubblesSize } from 'widgets/Bubbles/ui/Bubbles';
import { getRouteChatbot } from 'shared/const/router';
import cls from './Projects.module.scss';

interface ProjectsProps {
  className?: string;
  main?: boolean;
}
export const Projects = (props: ProjectsProps) => {
    const {
        className,
        main,
    } = props;

    const mainContent = (
        <div className={classNames(cls.Projects, {}, [className, cls.mainContent])}>
            <div className={cls.item}>
                <TrainingItem
                    title="Чат-бот —"
                    subtitle="общение с искусственным интеллектом на свободные темы на татарском языке"
                    linkTitle="Открыть чат-бот"
                    to={getRouteChatbot()}
                    linkIcon="st-link"
                    size={TrainingItemSize.BIG}
                    linkTheme={AppLinkTheme.BLUE}
                    image={BookImg}
                />
            </div>
            <div className={cls.item}>
                <Bubbles
                    size={BubblesSize.SQUARED}
                />
            </div>
            <div className={cls.item}>
                <TrainingItem
                    title="Туган тел —"
                    subtitle="Татарский национальный корпус"
                    linkTitle="Подробнее о портале"
                    titleTheme={TextTheme.GREEN_LIGHT}
                    linkTheme={AppLinkTheme.BLUE}
                    href="https://tugantel.tatar/"
                    linkIcon="st-link"
                    size={TrainingItemSize.BIG}
                />
            </div>
            <div className={cls.item}>
                <TrainingItem
                    titleImg={TatsoftImg}
                    subtitle="Программные продукты «Tatsoft»"
                    linkTitle="Перейти в Переводчик"
                    linkTheme={AppLinkTheme.BLUE}
                    href="https://translate.tatar/"
                    linkIcon="st-link"
                    size={TrainingItemSize.BIG}
                />
            </div>
            <div className={cls.item}>
                <TrainingItem
                    title="Кием —"
                    subtitle="Коллекция татарских национальных костюмов"
                    linkTitle="Купить национальный костюм"
                    titleTheme={TextTheme.RED}
                    linkTheme={AppLinkTheme.RED}
                    href="https://kiem.saf.tatar/"
                    linkIcon="st-shopping-bag"
                    size={TrainingItemSize.BIG}
                />
            </div>
            <div className={cls.item}>
                <TrainingItem
                    title="Атлас —"
                    subtitle="Электронная версия
                     атласа татарских народных говоров Среднего Поволжья, Приуралья и Сибири"
                    linkTitle="Перейти в Атлас"
                    titleTheme={TextTheme.YELLOW_LIGHT}
                    linkTheme={AppLinkTheme.BLUE}
                    href="http://atlas.antat.ru/"
                    linkIcon="st-link"
                    size={TrainingItemSize.BIG}
                />
            </div>
        </div>
    );

    const secondaryContent = (
        <div className={classNames(cls.Projects, {}, [className, cls.secondaryContent])}>
            ss
        </div>
    );

    return main ? mainContent : secondaryContent;
};
