import { ReactNode } from 'react';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import cls from './HeaderAndFooter.module.scss';

interface HeaderAndFooterProps {
  children: ReactNode;
}
export const HeaderAndFooter = ({ children }: HeaderAndFooterProps) => (
    <div className={cls.HeaderAndFooter}>
        <Header
            className={cls.header}
        />
        <div className={cls.wrapper}>
            {children}
        </div>
        {/* <Footer /> */}
    </div>
);
