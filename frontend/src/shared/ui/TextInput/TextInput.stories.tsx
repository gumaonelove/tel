import { FC, Dispatch, SetStateAction } from 'react';

interface ITextInputProps {
    type: string;
    placeholder?: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    readOnly?: boolean;
    className?: string;
}

export const TextInput: FC<ITextInputProps> = ({
    type, placeholder, value, setValue, readOnly, className,
}) => (
    <input
        className={`form-input ${className || ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        readOnly={readOnly}
    />
);
