import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import cls from './Section.module.scss';

interface SectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}
export const Section = (props: SectionProps) => {
    const {
        className,
        title,
        subtitle,
        children,
    } = props;

    return (
        <div className={classNames(cls.Section, {}, [className])}>
            <div className={cls.text}>
                {title && (
                    <span
                        className={cls.title}
                    >
                        {title}
                    </span>
                )}
                {subtitle && (
                    <Text
                        className={cls.subtitle}
                        size={TextSize.L}
                    >
                        {subtitle}
                    </Text>
                )}
            </div>

            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
};
