import {Dispatch, SetStateAction} from "react";

export interface IAllMessages {
  messages: string[]
}

export interface IChatBotMessagesProps {
  startMessage: string;
}

export interface IChatBotStarterProps {
  setStartMessage: Dispatch<SetStateAction<string>>;
  setShowMessages: Dispatch<SetStateAction<boolean>>;
}

interface IChatBotStarter {
  id: number;
  text: string;
}