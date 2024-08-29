import { Column, Text } from "@/components/styled";
import { IconType } from "react-icons";

type ValueCardProps = {
  title: string;
  icon: IconType;
};

export const ValueCards: React.FC<ValueCardProps> = ({ title, icon: Icon }) => {
  return (
    <Column
   
      gap={"xl"}
      borderTop={"1px solid red"}
      borderBottom={"1px solid red"}
      width={"200px"}
      alignItems={"flex-start"}
      p={"l"}
    >
      <Icon size={35} color={"green"} />
      <Text variant={"heading"}>{title}</Text>
    </Column>
  );
};
