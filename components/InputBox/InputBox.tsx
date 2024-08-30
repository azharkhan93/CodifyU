import { BASE_COLORS } from "@/theme";
import { StyledInputBox } from "../styled";
import { ChangeEvent } from "react";

export type InputBoxProps = {
  name: string;
  handleOnChange?: (e: string) => void;
  placeholder: string;
  type?: "text" | "number" | "email" | "phone" | "file";
  value: string | number;
  onBlur?: () => void;
};
export const InputBox: React.FC<InputBoxProps> = ({
  name,
  handleOnChange,
  placeholder,
  type,
  value,
  onBlur,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleOnChange) handleOnChange(e.target.value);
  };
  return (
    <StyledInputBox
      border={`1px solid ${BASE_COLORS.primary}`}
      width={"100%"}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      borderRadius={"xs"}
      height={"40px"}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
