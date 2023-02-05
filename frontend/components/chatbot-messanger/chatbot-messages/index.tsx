import {FC, useEffect, useRef, useState} from "react";
import {IChatBotMessagesProps, IMessagesData} from "../types";

const ChatbotMessages: FC<IChatBotMessagesProps> = ({allMessages}) => {
  const bottomRef = useRef<null | HTMLDivElement>(null);

  const [messages, setMessages] = useState<IMessagesData>({
    data: [
      {
        id: 1,
        message: allMessages[0]
      }
    ]
  });

  useEffect(() => {
    setMessages({
      data: [
        ...messages.data,
        {
          id: messages.data[messages.data.length - 1].id + 1,
          message: allMessages[allMessages.length - 1]
        }
      ]
    })
  }, [allMessages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  return (
    <div className="chatbot__messages">
      {
        messages.data.map((item) => (
          item.id % 2 !== 0
          ?
            <div key={item.id}>
              <div className="chatbot__message chatbot__message-bot">
                <span>{item.message}</span>
              </div>
              <div ref={bottomRef} />
            </div>
            :
            <div key={item.id}>
              <div className="chatbot__message chatbot__message-user">
                <span>{item.message}</span>
              </div>
              <div ref={bottomRef} />
            </div>
        ))
      }
    </div>
  );
}

export default ChatbotMessages;