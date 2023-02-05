import {Dispatch, SetStateAction} from "react";

export interface ITextInputProps {
  type: string;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  readOnly?: boolean;
  className?: string;
}