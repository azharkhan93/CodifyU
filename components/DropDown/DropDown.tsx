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
  handleChange: (val: DataType[]) => void; 
  reset: () => void; 
};

export const DropDown: React.FC<DropDownProps> = ({
  placeholder,
  data,
  label,
  name,
  handleChange,
  reset, 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState<DataType[]>([]); 

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (item: DataType) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter(selectedItem => selectedItem !== item) 
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
    handleChange(updatedSelectedItems);

    
    setIsVisible(false);
  };

  // Reset selected items when reset is called
  const handleReset = () => {
    setSelectedItems([]);
    reset(); 
  };

  return (
    <Column width={["100%", "104%"]} position="relative" gap={"m"}>
      <Text variant="body">{label}</Text>
      <Box position="relative" width="100%">
        <StyledInputBox
          readOnly
          type="text"
          borderRadius="xs"
          value={selectedItems.map(item => item.name).join(", ") || placeholder} 
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
      {isVisible && (
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
      )}
    </Column>
  );
};


