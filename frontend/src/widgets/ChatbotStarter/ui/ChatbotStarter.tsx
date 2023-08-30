import { Dispatch, FC, SetStateAction } from 'react';

interface IChatBotStarterProps {
    setShowMessages: Dispatch<SetStateAction<boolean>>;
    setNewMessages: (message: string) => void;
    sendMessage: () => Promise<void>;
}

export const ChatbotStarter: FC<IChatBotStarterProps> = ({ setShowMessages, setNewMessages, sendMessage }) => {
    const handleClickStartText = (message: string): any => {
        setShowMessages(true);
        setNewMessages(message);
        sendMessage();
    };
    return (
        <div className="chatbot__start">
            <div className="chatbot__start-title">Чатботтан нәрсә сорарга телисез?</div>
            <div className="chatbot__start-items">
                {
                    // eslint-disable-next-line no-use-before-define
                    dataStarterText
                        .map((item) => (
                            <div
                                className="chatbot__start-item"
                                key={item.id}
                                onClick={() => { handleClickStartText(item.text); }}
                            >
                                <div className="chatbot__start-item-text">
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

const dataStarterText = [
    {
        id: 1,
        text: 'Бу чатбот нәрсә эшли ала?',
    },
    {
        id: 2,
        text: 'Бүген һава торышы нинди?',
    },
    {
        id: 3,
        text: 'Габдулла Тукай әсәрләре турында сөйлә әле миңа',
    },
    {
        id: 4,
        text: 'Саф сүзенең мәгънәсен аңлат',
    },
];
