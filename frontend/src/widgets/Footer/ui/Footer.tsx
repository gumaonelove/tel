import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'app/providers/Container';
import { useMobile } from 'shared/lib/hooks/useMobile/useMobile';
import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}
export const Footer = ({ className }: FooterProps) => {
    const { isMobile } = useMobile();

    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            ss
        </div>
    );
};
