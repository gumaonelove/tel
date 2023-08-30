import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}
export const Container = ({ className, children }: ContainerProps) => (
    <div className={classNames(cls.Container, {}, [className])}>
        {children}
    </div>
);
