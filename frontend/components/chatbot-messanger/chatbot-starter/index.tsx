import {FC} from "react";
import {IChatBotStarterProps} from "../types";

const ChatbotStarter: FC<IChatBotStarterProps> = ({ setStartMessage, setShowMessages}) => {
  const handleClickStartText = (text: string): any => {
    setStartMessage(text);
    setShowMessages(true);
  }
  return (
    <div className="chatbot__start">
      <div className="chatbot__start-title">Чатботтан нәрсә сорарга телисез?</div>
      <div className="chatbot__start-items">
        {
          dataStarterText.map((item) => (
            <div className="chatbot__start-item" key={item.id} onClick={() => {handleClickStartText(item.text)}}>
              <div className="chatbot__start-item-text">
                <span>{item.text}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChatbotStarter;

const dataStarterText = [
  {
    id: 1,
    text: 'Бу чатбот нәрсә эшли ала?'
  },
  {
    id: 2,
    text: 'Бүген һава торышы нинди?'
  },
  {
    id: 3,
    text: 'Габдулла Тукай әсәрләре турында сөйлә әле миңа'
  },
  {
    id: 4,
    text: 'Саф сүзенең мәгънәсен аңлат'
  }
]