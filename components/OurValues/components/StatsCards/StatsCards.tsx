"use client";
import { Column, Text } from "@/components/styled";
import { StatCardProps } from "@/types";
import CountUp from "react-countup";

export const StatsCards = ({ heading, subHeading }: StatCardProps) => {
  const isNumber = /\d+/g;
  return (
    <Column
      alignItems={"center"}
      borderRight={"2px dotted red"}
      width={["250px", "300px"]}
      gap={"s"}
      style={{
        boxShadow:
          "0px -10px 30px rgba(82, 0, 174, 0.5), 0px 10px 30px rgba(64, 98, 187, 0.5)",
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
