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
      borderRight={"3px dotted #fb9c42"}
      width={["90%", "350px"]}
      gap={"s"}
      
    >
      <Text variant={["heading", "footerHeading"]}>
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
