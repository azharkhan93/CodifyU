import { Column, Text } from "@/components/styled";
import { ValueCardProps } from "@/types";

export const ValueCards: React.FC<ValueCardProps> = ({ title, icon: Icon }) => {
  return (
    <Column
   
      gap={"xl"}
      borderTop={"1px solid red"}
      borderBottom={"1px solid red"}
      width={["160px","200px"]}
      alignItems={["center","flex-start"]}
      p={["s","l"]}
    >
      <Icon size={35} color={"green"} />
      <Text variant={"heading"}>{title}</Text>
    </Column>
  );
};
