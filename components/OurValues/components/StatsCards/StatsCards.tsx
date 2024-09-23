"use client";
import { Box, Column, Text } from "@/components/styled";
import { StatCardProps } from "@/types";
import CountUp from "react-countup";

export const StatsCards = ({ heading, subHeading }: StatCardProps) => {
  const isNumber = /\d+/g;
  return (
    <Column
    justifyContent={"center"}
    py={["xxxl","xxxl"]}
      alignItems={"center"}
      borderRight={"3px dotted #fb9c42"}
      width={["90%", "350px"]}
      gap={"s"}
      style={{
        background: `url('/images/statsimg.jpg') no-repeat center center`,
        backgroundSize: 'cover',
        borderRadius: "8px",
        position: 'relative', 
        overflow: 'hidden',
      }}
      
    >
      <Box
      position={"absolute"}
      top={0}
      left={0}
      bottom={0}
      right={0}
      zIndex={1}
      bg={"whiteOverLay"}
      />
      <Text variant={["heading", "footerHeading"]}
      position={"relative"}
      zIndex={2}
      >
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
      <Text variant={"subHeading"} position={"relative"}
      zIndex={2}>{subHeading}</Text>
    </Column>
  );
};
