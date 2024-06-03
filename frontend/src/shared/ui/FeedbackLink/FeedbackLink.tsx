import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import QuestionIcon from 'shared/assets/icons/question.svg';
import cls from './FeedbackLink.module.scss';

interface FeedbackLinkProps {
    className?: string;
}

export const FeedbackLink = memo((props: FeedbackLinkProps) => {
    const {
        className,
    } = props;

    return (
        <a
            className={classNames(cls.FeedbackLink, {}, [className])}
            href="https://forms.yandex.ru/u/665db28a43f74f0970c51585/"
            target="_blank"
            rel="noreferrer"
        >
            <QuestionIcon />
        </a>
    );
});
