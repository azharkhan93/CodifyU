"use client";
import { Column, Text } from "@/components/styled";
import { StatCardProps } from "@/types";
import CountUp from "react-countup";

export const StatsCards = ({ heading, subHeading }: StatCardProps) => {
  const isNumber = /\d+/g;
  return (
    <Column
    py={"m"}
      alignItems={"center"}
      borderRight={"2px dotted red"}
      width={["250px", "300px"]}
      gap={"s"}
      style={{
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.5)",
      }}
      
    >
      <Text variant={"heading"}>
        {isNumber.test(heading) ? (
          <CountUp
            start={0}
            end={parseInt(heading.match(isNumber)![0], 10)}
            duration={8}
            suffix={heading.replace(isNumber, "")}
          />
        ) : (
          heading
        )}
      </Text>
      <Text variant={"subHeading"}>{subHeading}</Text>
    </Column>
  );
};
