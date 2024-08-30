"use client";
import {
  Box,
  Column,
  // FormInputBoxErrorMessage,
  InputBox,
  InputBoxProps,
  Text,
} from "@/components";
import { useField } from "formik";
import { useCallback } from "react";

type UpdateFormInputBoxProps = Omit<InputBoxProps, "value" | "onBlur"> & {
  label?: string;
  value?: string;
};

export const UpdateForm: React.FC<UpdateFormInputBoxProps> = ({
  label,
  name,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);
  const onChange = (newValue: string) => {
    helpers.setValue(newValue);
  };

  const handleBlur = useCallback(() => {
    helpers.setTouched(true);
  }, [helpers]);

  const error = meta.touched && meta.error ? `${meta.error} ` : undefined;

  return (
    <Column
      gap={"s"}
        width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"100%"}>
        <Text variant={"body"} color={"primary"}>
          {label}
        </Text>
      </Box>
      <Box 
      width={"100%"}
      >
        <InputBox
          handleOnChange={onChange}
          name={name}
          value={field.value}
          onBlur={handleBlur}
          {...rest}
        />
        {/* {error ? <FormInputBoxErrorMessage error={error} /> : null} */}
      </Box>
    </Column>
  );
};
