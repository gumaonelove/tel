import React from "react";
import Banner from "../../../../components/common/banner";
import ChatbotMessanger from "../../../../components/chatbot-messanger";

const ChatBot = () => {
  return (
    <>
      <Banner
        title={"Чат-бот —"}
        description={"портал для интерактивного изучения татарского языка с использованием методов геймификации"}
        image={"/icons/messages_cloud.png"}
        bgColor={"blue"}
      />
      <ChatbotMessanger/>
    </>
  );
};

export default ChatBot;