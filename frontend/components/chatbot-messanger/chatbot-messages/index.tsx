import {FC} from "react";
import {IChatBotMessagesProps} from "../types";

const ChatbotMessages: FC<IChatBotMessagesProps> = ({startMessage}) => {
  return (
    <div className="chatbot__messages">
      <div className="chatbot__message chatbot__message-bot">
        <span>Сәлам! Эшләрең ничек? Миңа берәр нәрсә яз.</span>
      </div>
      <div className="chatbot__message chatbot__message-user">
        <span>{startMessage}</span>
      </div>
    </div>
  );
}

export default ChatbotMessages;