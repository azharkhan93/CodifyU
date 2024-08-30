"use client";
import { ChangeEvent, useState } from "react";
import { StyledInputBox } from "../styled/StyledInputBox";
import { BASE_COLORS } from "@/theme/elements/color";

import { Column, Box, CenterBox, Text } from "../styled";

type DropDownProps = {
  placeholder: string;
  // data: DataType[];
  label: string;
  name: string;
  handleChange: (val: string) => void;
};
export const DropDown: React.FC<DropDownProps> = ({
  label,
  placeholder,
  // data,
  name,
  handleChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnFocus = () => {
    setIsVisible(true);
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleOnBlur = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };
  return (
    <h1>helo</h1>
    // <Column width={"100%"} position={"relative"} gap={"7px"}>
    //   <Text variant="body">{label}</Text>
    //   <StyledInputBox
    //     type="text"
    //     borderRadius={"xs"}
    //     onFocus={handleOnFocus}
    //     onBlur={handleOnBlur}
    //     onChange={handleOnChange}
    //     placeholder={placeholder}
    //     border={`1px solid ${BASE_COLORS.primary}`}
    //     name={name}
    //     value={searchTerm}
    //   />
    //   {isVisible ? (
    //     <StyledScrollBox
    //       position={"absolute"}
    //       width={"100%"}
    //       height={"200px"}
    //       boxShadow={`2px 5px 20px  5px ${BASE_COLORS.primaryLight}`}
    //       bg={"white"}
    //       overflow={"scroll"}
    //       zIndex={"100"}
    //       top={"105%"}
    //       borderRadius={"xs"}
    //     >
    //       {data?.map((item: any, index) => (
    //         <Box
    //           width={"100%"}
    //           bg={"primaryLight"}
    //           height={"100px"}
    //           key={index}
    //           borderBottom={`1px solid ${BASE_COLORS.primary}`}
    //           p={"l"}
    //           onClick={() => {
    //             setSearchTerm(item.label);
    //             handleChange(item.id);
    //           }}
    //         >
    //           <Text
    //           style = {{cursor: "pointer"}}
    //             onClick={() => {
    //               setSearchTerm(item.label);
    //               handleChange(item.id);
    //             }}
    //           >
    //             {item.label}
    //           </Text>
    //         </Box>
    //       ))}
    //     </StyledScrollBox>
    //   ) : (
    //     ""
    //   )}
    // </Column>
  );
};
