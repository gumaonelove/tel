import toast from 'react-hot-toast';
import { classNames } from 'shared/lib/classNames/classNames';
import CloseIcon from '../../assets/icons/closeGrey.svg';
import AttentionIcon from '../../assets/icons/attention.svg';
import cls from './ToastCustom.module.scss';

export const ToastCustom = {
    success: (message: string, link?: string) => {
        toast((t) => {
            t.style = {
                maxWidth: '478px', padding: '14px 22px', borderRadius: '6px', width: '100%',
            };

            return (
                <span className={cls.ToastBlock}>
                    <div className={cls.textBlock}>
                        <span className={cls.text}>{message}</span>
                        {link
                            && (
                                <a
                                    href={`https://mempool.space/tx/${link}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Check transaction.
                                </a>
                            )}
                    </div>
                    <span className={cls.btnClose} onClick={() => toast.dismiss(t.id)}>
                        <CloseIcon />
                    </span>
                </span>
            );
        });
    },

    error: (message: string | unknown) => {
        toast((t) => {
            t.style = {
                maxWidth: '478px',
                width: '100%',
                padding: '14px 22px',
                borderRadius: '6px',
                border: '1px solid #CF2D2D',
                background: 'linear-gradient(0deg, #151515 0%, #151515 100%), #FFF',
            };

            return (
                <span className={cls.ToastBlock}>
                    <span className={cls.leftBlock}>
                        <AttentionIcon />
                        <span className={classNames(cls.text, {}, [cls.error])}>{message}</span>
                    </span>
                    <span className={cls.btnClose} onClick={() => toast.dismiss(t.id)}>
                        <CloseIcon />
                    </span>
                </span>
            );
        });
    },
};
