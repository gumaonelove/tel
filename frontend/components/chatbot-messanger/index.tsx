import ChatbotStarter from "./chatbot-starter";
import ChatbotMessages from "./chatbot-messages";
import TextInput from "../common/text-input";
import {useEffect, useState} from "react";
import apiClient from "../../lib/axios";
import {API_URL} from "../../lib/constants";
import {IAllMessages} from "./types";
import {toast} from "react-toastify";

const ChatbotMessanger = () => {
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [blockedMessages, setBlockedMessages] = useState<boolean>(false);
  const [allMessages, setAllMessages] = useState<string[]>(["Сәлам! Эшләрең ничек? Миңа берәр нәрсә яз."]);

  const sendMessage = async () => {
    let dataToServer = [...allMessages]
    await apiClient(API_URL).post(
      `/dialogue/`, dataToServer
    ).then((response) => {
      setAllMessages([
        ...allMessages,
        response.data.output
      ]);
      setBlockedMessages(false);
    }).catch((err) => {
      console.log(err)
      toast.error("Произошла ошибка при генерации ответа, пожалуйтса, попробуйте снова!")
    })
  }

  const setNewMessages = (message: string) => {
    if (!showMessages) {
      setShowMessages(true);
    }
    allMessages.push(message)
    setAllMessages([
      ...allMessages
    ]);
    setInputValue("");
    setBlockedMessages(true);
  }
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!blockedMessages) {
      let message = inputValue;
      setNewMessages(message);
      sendMessage();
    } else {
      toast.error("Пожалуйста, подождите ответа, прежде чем писать что-то :)")
    }
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
                  allMessages={allMessages}
                />
                :
                <ChatbotStarter
                  setShowMessages={setShowMessages}
                  setNewMessages={setNewMessages}
                  sendMessage={sendMessage}
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