import { Column, Text } from "@/components/styled";

interface StatCardProps {
  heading: string;
  subHeading: string;
}

export const StatsCards = ({ heading, subHeading }: StatCardProps) => {
  return (
    <Column
      alignItems={"center"}
      borderRight={"2px dotted red"}
      width={"300px"}
      gap={"s"}
    >
      <Text variant={"heading"}>{heading}</Text>
      <Text variant={"subHeading"}>{subHeading}</Text>
    </Column>
  );
};
