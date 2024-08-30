"use client"
import { BASE_COLORS } from "@/theme";
import { StyledInputBox } from "../styled";
import { ChangeEvent } from "react";
import { TextAreaProps } from "@/types";



export const TextArea: React.FC<TextAreaProps> = ({
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
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};
