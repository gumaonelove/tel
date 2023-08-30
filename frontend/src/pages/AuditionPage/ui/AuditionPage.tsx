import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Bubble, BubbleRadius, BubbleTheme } from 'shared/ui/Bubble/Bubble';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import AuditionImg from 'shared/assets/images/exercises/2.png';
import { Section } from 'app/providers/Section';
import { Projects } from 'widgets/Projects';
import { Team } from 'widgets/Team';
import {
    RefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { $api } from 'shared/api/api';
import toast from 'react-hot-toast';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './AuditionPage.module.scss';

interface AuditionPageProps {
  className?: string;
}

interface IAudio {
    wav_base64: string;
    sample_rate: number;
}
interface AuditionGetRequest {
    count: number;
    word: string;
    audio: IAudio;
    id: 0;
}

const unusedWords = [
    'әби',
    'сыз',
    'ак',
    'яр',
    'китапханә',
    'рәхмәт',
    'якында',
    'байлык',
    'сугыш',
    'зуррак',
    'көрәш',
    'давыллы',
    'тәмле',
    'аска',
    'кинәт',
    'мөмкин',
    'һәрвакыт',
    'икенче',
    'чакыру',
    'гәзит',
    'тирән',
];
const AuditionPage = (props: AuditionPageProps) => {
    const {
        className,
    } = props;
    const [isLoading, setLoading] = useState(true);
    const [reqId, setReqId] = useState(1);
    const [dataResp, setDataResp] = useState<AuditionGetRequest>();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingAudio, setPlayingAudio] = useState(false);
    const [words, setWords] = useState<string[]>([]);
    const [isContinue, setIsContinue] = useState(false);
    const getRandomInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const onClickPlay = useCallback((ref: RefObject<HTMLAudioElement>, changeState: (state: boolean) => void) => {
        ref.current?.play();
        changeState(true);
    }, []);

    const onClickStopPlay = useCallback((ref: RefObject<HTMLAudioElement>, changeState: (state: boolean) => void) => {
        ref.current?.pause();
        changeState(false);
    }, []);
    const getAuditionRequest = async () => {
        setIsContinue(false);
        setLoading(true);
        try {
            const response = await $api.get<AuditionGetRequest>(`/listening/?id=${reqId}`);
            const { data } = response;
            setLoading(false);

            setDataResp(data);

            const falseWord = unusedWords[getRandomInRange(0, unusedWords.length)];

            const indexForFalseWord = getRandomInRange(0, 1);

            if (indexForFalseWord === 0) {
                setWords([
                    falseWord,
                    data.word,
                ]);
            } else {
                setWords([
                    data.word,
                    falseWord,
                ]);
            }

            if (reqId < data.count) {
                setReqId((prevState) => prevState + 1);
            }
        } catch (err) {
            console.log(err);
            toast.error('Произошла непредвиденная ошибка, попробуйте снова!');
        }
    };

    const clickWordHandler = useCallback((word: string) => {
        setIsContinue(true);
        if (word === dataResp?.word) {
            toast.success('Все верно. Бик яхшы!');
        } else {
            toast.error('Неверно! Переходите к следующему слову');
        }
    }, [dataResp?.word]);

    useEffect(() => {
        getAuditionRequest();
        // eslint-disable-next-line
    }, []);

    let rightContent;

    if (isLoading) {
        rightContent = (
            <Skeleton height="100%" border="30px" />
        );
    } else {
        rightContent = (
            <>
                <div className={cls.rightTop}>
                    <Bubble
                        radius={BubbleRadius.NORMAL}
                        className={cls.audioBubble}
                    >
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <audio
                            ref={audioRef}
                            onPause={() => { setPlayingAudio(false); }}
                        >
                            <source src={`data:audio/wav;base64,${dataResp?.audio.wav_base64}`} />
                        </audio>
                    </Bubble>
                    <Button
                        theme={ButtonTheme.LIGHT}
                        className={cls.button}
                        onClick={() => {
                            // eslint-disable-next-line no-unused-expressions
                            playingAudio
                                ? onClickStopPlay(audioRef, setPlayingAudio)
                                : onClickPlay(audioRef, setPlayingAudio);
                        }}
                    >
                        <i className={playingAudio ? 'st-pause dark' : 'st-headphones'} />
                        <Text
                            theme={TextTheme.GREEN_LIGHT}
                            weight={TextWeight.BOLD}
                            size={TextSize.L}
                        >
                            {playingAudio ? 'Приостановить' : 'Прослушать слово'}
                        </Text>
                    </Button>
                    <span
                        className={classNames(cls.word, { [cls.blurred]: !isContinue }, [])}
                    >
                        {dataResp?.word}
                    </span>
                    <img
                        src={AuditionImg}
                        alt={AuditionImg}
                        className={cls.rightImg}
                    />
                </div>
                <div className={cls.rightMiddle}>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.XL}
                        className={cls.middleText}
                    >
                        Выберите правильный вариант ответа
                    </Text>
                </div>
                <div className={classNames(cls.rightBottom, { [cls.lookTrue]: isContinue }, [])}>
                    {words.map((word) => (
                        <div
                            className={
                                classNames(
                                    cls.dragItem,
                                    {
                                        [cls.trueWordBlock]: isContinue && word === dataResp?.word,
                                        [cls.falseWordBlock]: isContinue && word !== dataResp?.word,
                                    },
                                    [],
                                )
                            }
                            key={word}
                            onClick={() => {
                                // eslint-disable-next-line no-unused-expressions
                                isContinue ? '' : clickWordHandler(word);
                            }}
                        >
                            <Text
                                size={TextSize.L}
                                weight={TextWeight.BOLD}
                                className={
                                    classNames(
                                        cls.dragItem,
                                        {
                                            [cls.trueWord]: isContinue && word === dataResp?.word,
                                            [cls.falseWord]: isContinue && word !== dataResp?.word,
                                        },
                                        [],
                                    )
                                }
                            >
                                {word}
                            </Text>
                        </div>
                    ))}
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.AuditionPage, {}, [className])}>
            <Header />
            <div className={cls.content}>
                <div className={cls.left}>
                    <Bubble
                        title="Аудирование"
                        subtitle="Вам будет предложено прослушать ряд слов и
                        выбрать то, которое вам кажется подходящим под звучание"
                        theme={BubbleTheme.GREEN_LIGHT}
                        textTheme={TextTheme.DARK}
                        className={cls.bubble}
                    />
                    <Button
                        radius={ButtonRadius.RIGHT}
                        theme={ButtonTheme.DARK}
                        disabled={!isContinue || isLoading}
                        onClick={getAuditionRequest}
                    >
                        Далее
                    </Button>
                </div>
                <div className={cls.right}>
                    {rightContent}
                </div>
            </div>
            <Section
                title="Проекты"
                subtitle="saf.tatar"
            >
                <Projects
                    main
                />
            </Section>
            <Section
                title="Команда"
                subtitle="saf.tatar"
            >
                <Team />
            </Section>
        </div>
    );
};

export default AuditionPage;
