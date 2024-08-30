import React, { ChangeEvent } from "react";
import { StyledInputBox } from "../styled";
import axios, { AxiosRequestConfig } from "axios";

export type FileInputBoxProps = {
  name: string;
  handleOnChange: (url: string) => void;
};

async function uploadFile(f: File) {
  let formData = new FormData();
  formData.append("file", f);
  formData.append("mimeType", "image/png");

  const uploadConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const uploadImageAPI = "https://mvp-lit-list.saibbyweb.com/uploadImage"; 
  

  try {
    const uploadRequest = axios.post(uploadImageAPI, formData, uploadConfig  );
    const response = await uploadRequest;
    console.log("Upload Response:", response.data);
    return response.data?.location;
  } catch (e) {
    console.error("Error uploading file:", e);
    return null;
  }
}

export const FileInputBox: React.FC<FileInputBoxProps> = ({
  name,
  handleOnChange,
}) => {
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
    if (file) {
      const uploadedUrl = await uploadFile(file);
      if (handleOnChange && uploadedUrl) handleOnChange(uploadedUrl);
    }
  };

  return (
    <StyledInputBox
      width={"100%"}
      name={name}
      onChange={onChange}
      type="file"
      style={{ cursor: "pointer" }}
    />
  );
};







  // this component should handle image uploading logic
{/* <UpdateFormInputBox
                    name={"name"}
                    placeholder={"Name"}
                    label={"Brand Name"}
                  /> */}