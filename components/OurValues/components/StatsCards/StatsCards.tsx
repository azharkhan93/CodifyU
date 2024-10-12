"use client";
import { Box, Column, Text } from "@/components/styled";
import { StatCardProps } from "@/types";
import CountUp from "react-countup";
import Image from "next/image";

export const StatsCards = ({
  heading,
  subHeading,
  statsImg,
}: StatCardProps) => {
  const isNumber = /\d+/g;
  return (
    <Column
      justifyContent={"center"}
      py={["xxxl", "xl"]}
      alignItems={"center"}
      borderRight={"3px dotted #fb9c42"}
      width={["90%", "350px"]}
      gap={"s"}
    >
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        width={"150px"}
        height={"50px"}
      >
        <Image
          src={statsImg}
          alt="Stats Image"
          width={300}
          height={150}
          style={{
            borderRadius: "8px",
            objectFit: "cover",
            mixBlendMode: "multiply",
          }}
        />
      </Box>

      <Text
        variant={["heading", "footerHeading"]}
        position={"relative"}
        zIndex={2}
         fontFamily={"ComfortaaBold"}
         style={{fontFamily: "ComfortaaBold"}}
      >
        {isNumber.test(heading) ? (
          <CountUp
            start={0}
            end={parseInt(heading.match(isNumber)![0], 10)}
            duration={8}
            suffix={heading.replace(isNumber, "")}
          />
        ) : (
          <Text fontFamily={"ComfortaaBold"}>
          heading
          </Text>
        )}
      </Text>
      <Text
        variant={"subHeading"}
        position={"relative"}
        zIndex={2}
        fontFamily={"ComfortaaMedium"}
      >
        {subHeading}
      </Text>
    </Column>
  );
};
