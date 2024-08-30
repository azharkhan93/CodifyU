import { Column, Text } from "@/components/styled";
import { StatCardProps } from "@/types";



export const StatsCards = ({ heading, subHeading }: StatCardProps) => {
  return (
    <Column
      alignItems={"center"}
      borderRight={"2px dotted red"}
      width={["250px","300px"]}
      gap={"s"}
     
    >
      <Text variant={"heading"}>{heading}</Text>
      <Text variant={"subHeading"}>{subHeading}</Text>
    </Column>
  );
};
