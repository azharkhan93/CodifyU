import { CenterBox, Column, Text } from "@/components/styled";
import { ValueCardProps } from "@/types";

export const ValueCards: React.FC<ValueCardProps> = ({ title, icon: Icon, title2, }) => {
  return (
    <Column
    // border={"2px solid green"}
   
      gap={"xl"}
      borderTop={"1px solid black"}
      borderBottom={"1px solid black"}
      width={["300px","300px"]}
       alignItems={["center","center"]}
      justifyContent={"center"}
      py={"l"}
      // p={["s","l"]}
    >
      <CenterBox
  borderRadius={"m"}
  py={"xxl"}
  px={"xxl"}
  bg={"white"}
  style={{
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  }}
>
  <Icon 
    size={35} 
    color={"#FB9C42"}
  />
</CenterBox>
      <Text variant={"body"} textAlign={"center"}>{title}</Text>
      <Text variant={"body"} textAlign={"center"}> {title2}</Text>
    </Column>
  );
};
