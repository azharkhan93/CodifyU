"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 
import { Column, Box, Text } from "../styled";
import { StyledScrollBox } from "../styled/StyledScrollBox";
import { StyledInputBox } from "../styled/StyledInputBox";
import { BASE_COLORS } from "@/theme/elements/color";
import { DataType } from "../FormSearcableSelect";

type DropDownProps = {
  placeholder: string;
  data: DataType[];
  label: string;
  name: string;
  handleChange: (val: string) => void;
};

export const DropDown: React.FC<DropDownProps> = ({
  placeholder,
  data,
  label,
  name,
  handleChange,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (item: DataType) => {
    setSelectedItem(item.name); 
    handleChange(item.id); 
    setIsVisible(false); 
  };

  return (
    <Column width={["100%", "104%"]} position="relative" gap={"m"}>
      <Text variant="body">{label}</Text>
      <Box position="relative" width="100%">
        <StyledInputBox
          readOnly
          type="text"
          borderRadius="xs"
          value={selectedItem || placeholder}
          placeholder={placeholder}
          onClick={toggleDropdown} 
        />
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          position="absolute"
          right="10px"
          top="29%"
          onClick={toggleDropdown}
          style={{ cursor: "pointer" }}
        >
          <FaChevronDown size={23} color={BASE_COLORS.textColor} />
        </Box>
      </Box>
      {isVisible ? (
        <StyledScrollBox
          position="absolute"
          width="100%"
          height="150px"
          boxShadow={`2px 5px 20px 5px ${BASE_COLORS.textColor}`}
          bg="background"
          overflowY="scroll"
          zIndex="100"
          top="105%"
          borderRadius="xs"
        >
          {data.map((item, index) => (
            <Box
              zIndex={50}
              key={index}
              width="100%"
              bg="white"
              height="50px"
              borderBottom={`1px solid ${BASE_COLORS.primary}`}
              p="l"
              onClick={() => handleSelect(item)}
              style={{ cursor: "pointer" }}
            >
              <Text color="textColor" variant={"body"}>{item.name}</Text>
            </Box>
          ))}
        </StyledScrollBox>
      ) : null}
    </Column>
  );
};


