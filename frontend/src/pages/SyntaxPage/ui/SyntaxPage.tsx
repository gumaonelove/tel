import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Bubble, BubbleTheme } from 'shared/ui/Bubble/Bubble';
import {
    Text, TextSize, TextTheme, TextWeight,
} from 'shared/ui/Text/Text';
import { Button, ButtonRadius, ButtonTheme } from 'shared/ui/Button/Button';
import { Section } from 'app/providers/Section';
import { Projects } from 'widgets/Projects';
import { Team } from 'widgets/Team';
import SyntaxImg from 'shared/assets/images/exercises/1.png';
import { useCallback, useEffect, useState } from 'react';
import {
    DragDropContext, Draggable, Droppable, DropResult,
} from 'react-beautiful-dnd';
import { $api } from 'shared/api/api';
import toast from 'react-hot-toast';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './SyntaxPage.module.scss';

interface SyntaxPageProps {
  className?: string;
}

interface SyntaxPageRequest {
    count: number;
    proposal: string;
    words: string[];
    id: number;
}
const SyntaxPage = (props: SyntaxPageProps) => {
    const {
        className,
    } = props;
    const [givedWords, setGivedWords] = useState<string[]>([]);
    const [droppedWords, setDroppedWords] = useState<string[]>([]);
    const [reqId, setReqId] = useState(1);
    const [isLoading, setLoading] = useState(true);
    const [trueSentence, setTrueSentence] = useState('');
    const [doneExercise, setDoneExercise] = useState(false);

    const getSentence = async () => {
        setDoneExercise(false);
        setLoading(true);
        setDroppedWords([]);
        try {
            const response = await $api.get<SyntaxPageRequest>(`/grammar/?id=${reqId}`);
            const { data } = response;
            setLoading(false);

            setGivedWords(data.words.reverse());
            setTrueSentence(data.proposal);

            if (reqId < data.count) {
                setReqId((prev) => prev + 1);
            }
        } catch (err) {
            console.log(err);
            toast.error('Произошла непредвиденная ошибка, попробуйте снова!');
        }
    };

    const checkSentence = useCallback(() => {
        const givedSentence = droppedWords.join(' ');

        if (givedSentence === trueSentence) {
            toast.success('Отлично!');
            setDoneExercise(true);
        } else {
            toast.error('Неправильно составили предложение, попробуйте снова!');
            setDoneExercise(false);
        }
    }, [droppedWords, trueSentence]);

    const onDragEnd = useCallback((result: DropResult) => {
        const { source, destination } = result;

        // eslint-disable-next-line no-useless-return
        if (!destination) return;

        if (
            destination.droppableId === source.droppableId
            && destination.index === source.index
            // eslint-disable-next-line no-useless-return
        ) return;

        let add;
        const active = givedWords;
        const dropped = droppedWords;

        if (source.droppableId === 'GivedWords') {
            add = active[source.index];
            active.splice(source.index, 1);
        } else {
            add = dropped[source.index];
            dropped.splice(source.index, 1);
        }

        if (destination.droppableId === 'GivedWords') {
            active.splice(destination.index, 0, add);
        } else {
            dropped.splice(destination.index, 0, add);
        }

        setDroppedWords(dropped);
        setGivedWords(active);
    }, [droppedWords, givedWords]);

    useEffect(() => {
        getSentence();
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
                <div
                    className={cls.rightTop}
                >
                    <Droppable droppableId="DroppedWords" direction="horizontal">
                        {
                            (provided) => (
                                <div
                                    className={cls.rightTopItems}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {
                                        droppedWords.map((word, index) => (
                                            <Draggable
                                                draggableId={word}
                                                index={index}
                                                key={word}
                                            >
                                                {
                                                    (provided) => (
                                                        <div
                                                            key={word}
                                                            className={classNames(
                                                                cls.dragItem,
                                                                {},
                                                                [cls.dragTopItem],
                                                            )}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={provided.innerRef}
                                                        >
                                                            <Text
                                                                size={TextSize.L}
                                                                weight={TextWeight.BOLD}
                                                            >
                                                                {word}
                                                            </Text>
                                                        </div>
                                                    )
                                                }
                                            </Draggable>
                                        ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )
                        }
                    </Droppable>
                    <div className={cls.lines}>
                        {
                            givedWords.map((word) => (
                                <hr className={cls.line} key={word} />
                            ))
                        }
                    </div>
                    <img
                        src={SyntaxImg}
                        alt={SyntaxImg}
                        className={cls.rightImg}
                    />
                </div>
                <div className={cls.rightMiddle}>
                    <Text
                        theme={TextTheme.DARK}
                        size={TextSize.XL}
                        className={cls.middleText}
                    >
                        Перетащите слова в нижнем ряду
                        на нужное место в верхнем ряду,
                        чтобы получилось предложение
                    </Text>
                </div>
                <Droppable droppableId="GivedWords" direction="horizontal">
                    {
                        (provided) => (
                            <div
                                className={cls.rightBottom}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {
                                    givedWords.map((word, index) => (
                                        <Draggable
                                            draggableId={word}
                                            index={index}
                                            key={word}
                                        >
                                            {
                                                (provided) => (
                                                    <div
                                                        className={cls.dragItem}
                                                        key={word}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Text
                                                            size={TextSize.L}
                                                            weight={TextWeight.BOLD}
                                                        >
                                                            {word}
                                                        </Text>
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                            </div>
                        )
                    }
                </Droppable>
            </>
        );
    }

    return (
        <div className={classNames(cls.SyntaxPage, {}, [className])}>
            <Header />
            <div className={cls.content}>
                <div className={cls.left}>
                    <Bubble
                        title="Составление предложений"
                        subtitle="Здесь вам нужно расставить слова из
                        нижнего блока в верхний блок в таком порядке, чтобы получилось корректное предло-жение."
                        theme={BubbleTheme.GREEN_LIGHT}
                        textTheme={TextTheme.DARK}
                        className={cls.bubble}
                    />
                    <Button
                        radius={ButtonRadius.RIGHT}
                        theme={ButtonTheme.DARK}
                        disabled={isLoading}
                        onClick={doneExercise ? getSentence : checkSentence}
                    >
                        {doneExercise ? 'Далее' : 'Проверить упражнение'}
                    </Button>
                </div>
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    <div className={cls.right}>
                        {rightContent}
                    </div>
                </DragDropContext>

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

export default SyntaxPage;
