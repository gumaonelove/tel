import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Banner, BannerTheme } from 'shared/ui/Banner/Banner';
import VioletStar from 'shared/assets/icons/violet_star.png';
import { Projects } from 'widgets/Projects';
import { Section } from 'app/providers/Section';
import { Team } from 'widgets/Team';
import { HeaderAndFooter } from 'app/providers/HeaderAndFooter';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}
const MainPage = (props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <HeaderAndFooter>
            <div className={classNames(cls.MainPage, {}, [className])}>
                <Banner
                    title="Tel —"
                    description="портал для
                        интерактивного изучения татарского языка с использованием методов геймификации"
                    image={VioletStar}
                    theme={BannerTheme.PURPLE}
                />
                <Projects
                    main
                />
                <Section
                    title="Команда"
                    subtitle="saf.tatar"
                >
                    <Team />
                </Section>
            </div>
        </HeaderAndFooter>
    );
};

export default MainPage;
