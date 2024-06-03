import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { getRouteMain, getRouteReading } from 'shared/const/router';
import Logo from 'shared/assets/icons/logo.svg';
import { useIsFulledHeader } from 'shared/lib/hooks/useIsFulledHeader/useIsFulledHeader';
import { TrainingItem } from 'widgets/TrainingItem';
import { TrainingItemSize, TrainingItemTheme } from 'widgets/TrainingItem/ui/TrainingItem';
import BoyIcon from 'shared/assets/images/boy.png';
import { ScaleBar } from 'widgets/ScaleBar';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}
export const Header = (props: HeaderProps) => {
    const {
        className,
    } = props;
    const isFulledHeader = useIsFulledHeader();

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <header className="header">
                <div className="header__container">
                    <div className={isFulledHeader ? 'header__content header__content-fulled' : 'header__content'}>
                        <div className="header__left">
                            <AppLink to={getRouteMain()} className="header__logo">
                                <Logo />
                            </AppLink>
                            <div className="header__left-text">
                                изучение
                                Татарского языка
                                вместе с Tel by saf.tatar
                            </div>
                        </div>
                        {!isFulledHeader && (
                            <div className="header__right">
                                <ScaleBar />
                            </div>
                        )}
                        {
                            isFulledHeader && (
                                <>
                                    <TrainingItem
                                        title="Чтение —"
                                        subtitle="тестирование способности навыков чтения"
                                        to={getRouteReading()}
                                        linkTitle="Начать упражнение"
                                        linkIcon="st-link"
                                        className="header__middle"
                                        image={BoyIcon}
                                        linkTheme={AppLinkTheme.BLUE}
                                        size={TrainingItemSize.BIG}
                                    />
                                    <TrainingItem
                                        name="ХӘЗЕР ЭФИРДА:"
                                        live="Габдулла Тукай. Шүрәле."
                                        soon="Илдус Әхмәтҗан укый — 11.30"
                                        href="https://saf-radio.ru/"
                                        linkTitle="Саф - балалар радиосы"
                                        linkIcon="st-link st-link-light"
                                        linkTheme={AppLinkTheme.PRIMARY}
                                        theme={TrainingItemTheme.PINK}
                                        icon="st-music-string"
                                        className="header__right"
                                    />
                                </>
                            )
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};
