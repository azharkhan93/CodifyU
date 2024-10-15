"use client";
import { useField } from "formik";
import { DropDown } from "../DropDown";
import { Text } from "../styled/Text";

export type DataType = {
  name: string;
  id: string;
};

type FormSearchableSelectProps = {
  placeholder: string;
  label: string;
  name: string;
};

export const FormSearchableSelect: React.FC<FormSearchableSelectProps> = ({
  placeholder,
  label,
  name,
}) => {
  const [field, meta, helpers] = useField(name);

  const services: DataType[] = [
    { name: "AI And Machine Learning", id: "1" },
    { name: "DevOps And MlOps", id: "2" },
    { name: "Large Language Models(LLMs)", id: "3" },
    { name: "Data Analytics And Predictive Modeling", id: "4" },
  ];

  const handleOnChange = (val: string) => {
    helpers.setValue(val); 
  };

  return (
    <>
      <DropDown
        placeholder={placeholder}
        data={services}
        label={label}
        name={name}
        handleChange={handleOnChange}
      />
      {meta.touched && meta.error && (
        <Text style={{ color: "red" }}>{meta.error}</Text>
      )}
    </>
  );
};


  