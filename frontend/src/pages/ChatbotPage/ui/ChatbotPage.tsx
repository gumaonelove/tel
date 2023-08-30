// eslint-disable-next-line max-classes-per-file
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { Section } from 'app/providers/Section';
import { Projects } from 'widgets/Projects';
import { Team } from 'widgets/Team';
import { useEffect, useState } from 'react';
import { $api } from 'shared/api/api';
import toast from 'react-hot-toast';
import { TextInput } from 'shared/ui/TextInput/TextInput.stories';
import { ChatbotStarter } from 'widgets/ChatbotStarter';
import { ChatbotMessages } from 'widgets/ChatbotMessages';
import cls from './ChatbotPage.module.scss';

interface ChatbotPageProps {
    className?: string;
}

class Node {
    message: string;

    // eslint-disable-next-line no-use-before-define
    prev: Node | null;

    // eslint-disable-next-line no-use-before-define
    next: Node | null;

    constructor(message: string) {
        this.message = message;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: Node | null;

    tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addMessage(message: string) {
        const newNode = new Node(message);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    getMessages() {
        let current = this.head;
        const messages: string[] = [];
        while (current) {
            messages.push(current.message);
            current = current.next;
        }
        return messages;
    }
}

const ChatbotPage = (props: ChatbotPageProps) => {
    const {
        className,
    } = props;

    const [showMessages, setShowMessages] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [blockedMessages, setBlockedMessages] = useState<boolean>(false);
    const [allMessages, setAllMessages] = useState<DoublyLinkedList>(new DoublyLinkedList());
    const [messages, setMessages] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const sendMessage = async () => {
        setLoading(true);
        const dataToServer = allMessages.getMessages();
        await $api.post('/dialogue/', dataToServer)
            .then((response) => {
                const { output } = response.data;
                allMessages.addMessage(output);
                setAllMessages(allMessages);
                setMessages(allMessages.getMessages());
                setBlockedMessages(false);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error('Произошла ошибка при генерации ответа, пожалуйтса, попробуйте снова!');
                setLoading(false);
            });
    };

    const setNewMessages = (message: string) => {
        if (!showMessages) {
            setShowMessages(true);
        }
        allMessages.addMessage(message);
        setAllMessages(allMessages);
        setMessages(allMessages.getMessages());
        setInputValue('');
        setBlockedMessages(true);
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!blockedMessages) {
            if (inputValue) {
                const message = inputValue;
                setNewMessages(message);
                sendMessage();
            } else {
                toast.error('Текст сообщения не может быть пустым :)');
            }
        } else {
            toast.error('Пожалуйста, подождите ответа, прежде чем писать что-то :)');
        }
    };

    useEffect(() => {
        allMessages.addMessage('Сәлам! Эшләрең ничек? Миңа берәр нәрсә яз.');
    }, [allMessages]);

    useEffect(() => {
        setMessages(allMessages.getMessages());
    }, [allMessages]);

    return (
        <div className={classNames(cls.ChatbotPage, {}, [className])}>
            <Header />
            <section className="chatbot">
                <div className="chatbot__container container">
                    <div className="chatbot__content">
                        <div className="chatbot__middle">
                            {
                                showMessages
                                    ? (
                                        <ChatbotMessages
                                            allMessages={messages}
                                            isLoading={isLoading}
                                        />
                                    )
                                    : (
                                        <ChatbotStarter
                                            setShowMessages={setShowMessages}
                                            setNewMessages={setNewMessages}
                                            sendMessage={sendMessage}
                                        />
                                    )
                            }
                        </div>
                        <div className="chatbot__bottom">
                            <form className="chatbot__form" onSubmit={handleSubmit}>
                                <div className="chatbot__form-input">
                                    <TextInput
                                        type="text"
                                        placeholder="Язмаларыгызны монда языгыз..."
                                        value={inputValue}
                                        setValue={setInputValue}
                                        readOnly={!!blockedMessages}
                                        className={blockedMessages ? 'disabled' : ''}
                                    />
                                    {
                                        blockedMessages
                                            ? (
                                                <div className="chatbot__form-send disabled">
                                                    <i className="st-message-chat disabled" />
                                                </div>
                                            )
                                            : (
                                                <div className="chatbot__form-send" onClick={handleSubmit}>
                                                    <i className="st-message-chat" />
                                                </div>
                                            )
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChatbotPage;
