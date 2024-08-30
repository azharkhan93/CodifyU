"use client";
import { BASE_COLORS } from "@/theme";
import { Box, StyledTextarea, Text } from "../styled";
import { ChangeEvent } from "react";
import { TextAreaProps } from "@/types";

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  handleOnChange,
  placeholder,
//   value,
  onBlur,
  label,
}) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (handleOnChange) handleOnChange(e.target.value);
  };

  return (
    <>
      <Box width={"100%"} py={"s"}>
        <Text variant={"body"} color={"primary"} >
          {label}
        </Text>
      </Box>
      <StyledTextarea
        border={`1px solid ${BASE_COLORS.primary}`}
        width={"100%"}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        borderRadius={"xs"}
        placeholder={placeholder}
        // value={value}
      />
    </>
  );
};

