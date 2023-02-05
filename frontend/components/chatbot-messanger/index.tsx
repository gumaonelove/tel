import ChatbotStarter from "./chatbot-starter";
import ChatbotMessages from "./chatbot-messages";
import TextInput from "../common/text-input";
import {useEffect, useState} from "react";
import apiClient from "../../lib/axios";
import {API_URL} from "../../lib/constants";
import {IAllMessages} from "./types";

const ChatbotMessanger = () => {
  const [startMessage, setStartMessage] = useState<string>("");
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [blockedMessages, setBlockedMessages] = useState<boolean>(false);
  const [allMessages] = useState<IAllMessages>({
    messages: []
  });


  const sendMessage = async () => {
    const { data } = await apiClient(API_URL).post(
      `/study/dialo/`, allMessages
    );

    console.log(data)
  }
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!showMessages) {
      setShowMessages(true);
      setStartMessage(inputValue);
    }
    allMessages.messages.push(inputValue);
    console.log(allMessages)
    setInputValue("");
    setBlockedMessages(true);
    sendMessage();
  }

  return (
    <section className="chatbot">
      <div className="chatbot__container container">
        <div className="chatbot__content">
          <div className="chatbot__middle">
            {
              showMessages
              ?
                <ChatbotMessages
                  startMessage={startMessage}
                />
                :
                <ChatbotStarter
                  setStartMessage={setStartMessage}
                  setShowMessages={setShowMessages}
                />
            }
          </div>
          <div className="chatbot__bottom">
            <form className="chatbot__form" onSubmit={handleSubmit}>
              <div className="chatbot__form-input">
                <TextInput
                  type={"text"}
                  placeholder={"Язмаларыгызны монда языгыз..."}
                  value={inputValue}
                  setValue={setInputValue}
                  readOnly={blockedMessages ? true : false}
                  className={blockedMessages ? "disabled" : ""}
                />
                {
                  blockedMessages
                  ?
                    <div className="chatbot__form-send disabled">
                      <i className="st-message-chat disabled"></i>
                    </div>
                    :
                    <div className="chatbot__form-send" onClick={handleSubmit}>
                      <i className="st-message-chat"></i>
                    </div>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatbotMessanger;