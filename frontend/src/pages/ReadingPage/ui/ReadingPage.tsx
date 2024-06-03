import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Bubble, BubbleRadius, BubbleTheme } from 'shared/ui/Bubble/Bubble';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import {
    Button, ButtonForm, ButtonRadius, ButtonTheme,
} from 'shared/ui/Button/Button';
import ReadingImg from 'shared/assets/images/exercises/3.png';
import { Section } from 'app/providers/Section';
import { Projects } from 'widgets/Projects';
import { Team } from 'widgets/Team';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import {
    Ref, RefObject,
    useCallback, useEffect, useRef, useState,
} from 'react';
import { $api } from 'shared/api/api';
import toast from 'react-hot-toast';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ReadingPage.module.scss';
import {scaleBarActions} from "widgets/ScaleBar/model/slice/scaleBarSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ReadingPageProps {
  className?: string;
}
interface IAudio {
    wav_base64: string;
    sample_rate: number;
}
interface ReadingRequest {
    count: number;
    text: string;
    audio: IAudio;
    id: number;
}

interface ReadingPostResponse {
    status: number;
    text: string;
    id: number;
}
const ReadingPage = (props: ReadingPageProps) => {
    const {
        className,
    } = props;
    const [audioMp3, setAudioMp3] = useState<any>();
    const [audioUrl, setAudioUrl] = useState<any>();
    const [sintezAudio, setSintezAudio] = useState<string>('');
    const [startedRecording, setStartedRecording] = useState(false);
    const recorderControls = useAudioRecorder();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const sintezAudioRef = useRef<HTMLAudioElement | null>(null);
    const [playingAudio, setPlayingAudio] = useState(false);
    const [playingSintezAudio, setPlayingSintezAudio] = useState(false);
    const [sentence, setSentence] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [reqId, setReqId] = useState(1);
    const [audioBase64, setAudioBase64] = useState('');
    const [isSend, setIsSend] = useState(false);
    const dispatch = useAppDispatch();

    const extractBase64 = (dataUrl: any) => {
        const index = dataUrl.indexOf('base64,');
        if (index === -1) {
            return null;
        }
        return dataUrl.substring(index + 7);
    };
    const readBase64 = (blob: any, callback: any) => {
        if (window.FileReader) {
            const reader = new FileReader();
            reader.onload = function () {
                const dataUrl = reader.result;
                if (dataUrl != null) {
                    const base64 = extractBase64(dataUrl);
                    if (base64 != null) {
                        callback(base64, null);
                        return;
                    }
                }
                callback(null, 'Base64 data is not available.');
            };
            reader.onerror = function () {
                callback(null, 'Incorrect blob or file object.');
            };
            reader.readAsDataURL(blob);
        } else {
            callback(null, 'File API is not supported.');
        }
    };

    const getReadingRequest = async () => {
        setIsSend(false);
        setLoading(true);
        try {
            const response = await $api.get<ReadingRequest>(`/reading/?id=${reqId}`);
            const { data } = response;
            setLoading(false);

            setSentence(data.text);
            setSintezAudio(`data:audio/wav;base64,${data.audio.wav_base64}`);
            if (reqId < data.count) {
                setReqId((prevState) => prevState + 1);
            }
        } catch (err) {
            console.log(err);
            toast.error('Произошла непредвиденная ошибка, попробуйте снова!');
        }
    };

    const sendReadingResults = useCallback(async () => {
        if (!audioBase64) {
            toast.error('Вы должны записать свою речь!');
            return;
        }
        try {
            const response = await $api.post<ReadingPostResponse>('/reading/', {
                id: reqId,
                wav: audioBase64,
            });
            const { data } = response;

            if (data.status) {
                if (data.status === 200) {
                    toast.success('Отлично!');
                    dispatch(scaleBarActions.addScale());
                    setIsSend(true);
                } else {
                    toast.error('Что-то пошло не так, попробуйте снова!');
                }
            } else {
                toast.error('Что-то пошло не так, попробуйте снова!');
            }
        } catch (err) {
            console.log(err);
            toast.error('Произошла непредвиденная ошибка, попробуйте снова!');
        }
    }, [audioBase64, reqId]);

    const onStartRecording = useCallback(() => {
        setAudioUrl(undefined);
        setAudioMp3(undefined);
        recorderControls.startRecording();
        setStartedRecording(true);
    }, [recorderControls]);

    const onStopRecording = useCallback(() => {
        recorderControls.stopRecording();
        setStartedRecording(false);
    }, [recorderControls]);
    const addAudioElement = (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        readBase64(blob, (base64: any, error: any) => {
            if (error) {
                console.log(error);
            } else {
                setAudioBase64(base64);
            }
        });

        const file = new File([url], 'audio.mp3', { type: 'audio/mp3' });
        setAudioMp3(file);
    };

    const onClickPlay = useCallback((ref: RefObject<HTMLAudioElement>, changeState: (state: boolean) => void) => {
        ref.current?.play();
        changeState(true);
    }, []);

    const onClickStopPlay = useCallback((ref: RefObject<HTMLAudioElement>, changeState: (state: boolean) => void) => {
        ref.current?.pause();
        changeState(false);
    }, []);

    useEffect(() => {
        getReadingRequest();
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
                    <Text
                        size={TextSize.XXL}
                        weight={TextWeight.BOLD}
                        theme={TextTheme.BLUE_LIGHT}
                        className={cls.topText}
                    >
                        {sentence}
                    </Text>
                    <img
                        src={ReadingImg}
                        alt={ReadingImg}
                        className={cls.rightImg}
                    />
                </div>
                <div className={cls.rightMiddle}>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.XL}
                        className={cls.middleText}
                    >
                        Вам нужно за максимально короткое время отчетливо прочитать приведенный ниже текст
                    </Text>
                </div>
                <div className={cls.rightBottom}>
                    <Button
                        theme={ButtonTheme.LIGHT}
                        className={cls.button}
                        onClick={startedRecording ? onStopRecording : onStartRecording}
                    >
                        <i className="st-microphone" />
                        <Text
                            theme={TextTheme.GREEN_LIGHT}
                            weight={TextWeight.BOLD}
                            size={TextSize.L}
                        >
                            {startedRecording ? 'Остановить запись' : 'Начать тест'}
                        </Text>
                    </Button>
                    <AudioRecorder
                        recorderControls={recorderControls}
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                            noiseSuppression: true,
                            echoCancellation: true,
                        }}
                        onNotAllowedOrFound={(err: any) => console.table(err)}
                        downloadFileExtension="mp3"
                        mediaRecorderOptions={{
                            audioBitsPerSecond: 128000,
                        }}
                    />
                    <Bubble
                        radius={BubbleRadius.NORMAL}
                        className={cls.audioBubble}
                    >
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <audio
                            ref={sintezAudioRef}
                            onPause={() => { setPlayingSintezAudio(false); }}
                        >
                            <source src={sintezAudio} />
                        </audio>
                    </Bubble>
                    <Button
                        theme={ButtonTheme.LIGHT}
                        className={cls.button}
                        onClick={() => {
                            // eslint-disable-next-line no-unused-expressions
                            playingSintezAudio
                                ? onClickStopPlay(sintezAudioRef, setPlayingSintezAudio)
                                : onClickPlay(sintezAudioRef, setPlayingSintezAudio);
                        }}
                    >
                        <Text
                            theme={TextTheme.GREEN_LIGHT}
                            weight={TextWeight.BOLD}
                            size={TextSize.L}
                        >
                            {playingSintezAudio ? 'Приостановить' : 'Прослушать'}
                            {' '}
                            синтезированную речь
                        </Text>
                    </Button>
                    {audioMp3 && audioUrl && (
                        <>
                            <Bubble
                                radius={BubbleRadius.NORMAL}
                                className={cls.audioBubble}
                            >
                                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                                <audio
                                    ref={audioRef}
                                    onPause={() => { setPlayingAudio(false); }}
                                >
                                    <source src={audioUrl} />
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
                                disabled={!audioMp3}
                            >
                                <Text
                                    theme={TextTheme.GREEN_LIGHT}
                                    weight={TextWeight.BOLD}
                                    size={TextSize.L}
                                >
                                    {playingAudio ? 'Приостановить' : 'Прослушать'}
                                    {' '}
                                    запись
                                </Text>
                            </Button>
                        </>
                    )}
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.ReadingPage, {}, [className])}>
            <Header />
            <div className={cls.content}>
                <div className={cls.left}>
                    <Bubble
                        title="Чтение"
                        subtitle="Для выполнения задания нужно разрешить доступ к микрофону"
                        theme={BubbleTheme.GREEN_LIGHT}
                        textTheme={TextTheme.DARK}
                        className={cls.bubble}
                    />
                    <Button
                        radius={ButtonRadius.RIGHT}
                        theme={ButtonTheme.DARK}
                        disabled={isLoading}
                        onClick={isSend ? getReadingRequest : sendReadingResults}
                    >
                        {isSend ? 'Далее' : 'Проверить упражнение'}
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

export default ReadingPage;
