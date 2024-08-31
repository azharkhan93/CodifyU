import { Box, Column, Text } from "@/components/styled";
import { WorkCardProps } from "@/types";

export const WorkCards: React.FC<WorkCardProps> = ({
  step,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <Column
    borderRight={"4px solid green"}
    borderLeft={"4px solid blue"}
      py={"xl"}
      width={["355px","400px"]}
      alignItems={"center"}
      bg={"greenish"}
      borderTopRightRadius={["m","xl"]}
      px={"m"}
    >
      <Column position="relative" alignItems={"center"}>
        <Box
          position="relative"
          bg={"primary"}
          gap={"m"}
          width={"60px"}
          height={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"xl"}
        >
          <Icon size={25} fill="white" />
        </Box>

        <Text
          borderRadius={"circle"}
          bg="primary"
          px={"s"}
          textAlign={"center"}
          width={"60px"}
          variant={"body"}
          color="white"
          style={{
            position: "absolute",
            top: "110%",
            zIndex: 10,
          }}
        >
          Step {step}
        </Text>
      </Column>
      <Text mt={"xxxl"} variant={"subHeading"}>
        {title}
      </Text>
      <Text variant={"body"} textAlign={"center"}>
        {description}
      </Text>
    </Column>
  );
};
