import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextWeight } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getScaleBar } from 'widgets/ScaleBar/model/selectors/getScaleBar/getScaleBar';
import cls from './ScaleBar.module.scss';

interface ScaleBarProps {
    className?: string;
}

export const ScaleBar = memo((props: ScaleBarProps) => {
    const {
        className,
    } = props;
    const scaleBar = useSelector(getScaleBar);

    return (
        <div className={cls.ScaleBarWrapper}>
            <div
                style={{ color: 'black' }}
            >
                Прогресс ученика
            </div>
            <div className={classNames(cls.ScaleBar, {}, [className])}>
                <Text
                    size={TextSize.XM}
                    weight={TextWeight.MEDIUM}
                >
                    {scaleBar.current}
                    /
                    {scaleBar.max}
                </Text>
                <span
                    className={cls.bar}
                    style={{ width: `${(scaleBar.current / scaleBar.max) * 100}%` }}
                />
            </div>
        </div>
    );
});
