import {FC} from "react";
import {ITextInputProps} from "./types";

const TextInput: FC<ITextInputProps> = ({type, placeholder, value, setValue, readOnly, className}) => {
  return (
    <input
      className={`form-input ${className ? className : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      readOnly={readOnly}
    />
  );
}

export default TextInput;