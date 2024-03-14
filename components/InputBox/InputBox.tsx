import { BASE_COLORS } from "@/theme";
import { StyledInputBox } from "../styled";
import { ChangeEvent } from "react";

export type InputBoxProps = {
  name: string;
  handleOnChange?: (e: string) => void;
  placeholder: string;
  type?: "text" | "number" | "email" | "password" | "file";
  value: string | number;
};
export const InputBox: React.FC<InputBoxProps> = ({
  name,
  handleOnChange,
  placeholder,
  type,
  value,
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
      borderRadius={"xs"}
      height={"40px"}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
