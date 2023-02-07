import {Dispatch, SetStateAction} from "react";

export interface IAllMessages {
  messages: string[]
}

export interface IMessagesData {
  data: IMessages[];
}

interface IMessages {
  id: number;
  message: string;
}

export interface IChatBotMessagesProps {
  allMessages: string[];
  isLoading: boolean;
}

export interface IChatBotStarterProps {
  setShowMessages: Dispatch<SetStateAction<boolean>>;
  setNewMessages: (message: string) => void;
  sendMessage: () => Promise<void>;
}

interface IChatBotStarter {
  id: number;
  text: string;
}