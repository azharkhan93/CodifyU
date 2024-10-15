"use client";
import { BASE_COLORS } from "@/theme";
import { Box, StyledTextarea, Text } from "../styled";
import {  useCallback } from "react";
import { useField } from "formik";
import { InputBoxProps } from "../InputBox";

type UpdateFormInputBoxProps = Omit<InputBoxProps, "value" | "onBlur"> & {
  label?: string;
  value?: string;
};

export const TextArea: React.FC<UpdateFormInputBoxProps> = ({
  label,
  name,
  ...rest
}) => {

  const [field, meta, helpers] = useField(name);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    helpers.setValue(event.target.value);
  };
  // const onChange = (newValue: string) => {
  //   helpers.setValue(newValue);
  // };

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);
 
  return (
    <>
      <Box width={"100%"} py={"s"}>
        <Text variant={"body"} color={"primary"} >
          {label}
        </Text>
      </Box>
      <StyledTextarea
      
        border={`1px solid ${BASE_COLORS.primary}`}
        width={["97%", "100%"]}
        onChange={handleChange}
        name={name}
        value={field.value}
        onBlur={handleBlur}
        {...rest}
        
      />
    </>
  );
};

