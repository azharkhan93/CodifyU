"use client";

import {
  AnimatedColumn,
  Box,
  CenterBox,
  Column,
  Row,
  Text,
} from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import { ServicesCardProps } from "@/types";
import {  MdArrowForward } from "react-icons/md";

export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
      style={{
        boxShadow:
          "0px -10px 30px rgba(82, 0, 174, 0.5), 0px 10px 30px rgba(64, 98, 187, 0.5)",
      }}
      // boxShadow={BASE_COLORS.modalShadow}
      position={"relative"}
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xxxl"}
      borderRadius={"s"}
      px={"m"}
      width={"400px"}
      bg={"gradientBold"}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bg={"modalOverlayBg"}
        zIndex={-1}
      />
      <Row
        flexDirection={"row"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Text variant={"subHeading"} color="white">
          {service.title}
        </Text>
        <CenterBox>
          <IconComponent size={40} fill="white" />
        </CenterBox>
      </Row>
      <Text variant={"body"} color="white">
        {service.description}
      </Text>
      <Row flexDirection={"row"} gap={"s"} alignItems={"center"}>
        <Text variant={"body"} color="white">
          {service.linkText}
        </Text>
        <CenterBox>
          < MdArrowForward size={25} fill="white" />
        </CenterBox>
      </Row>
    </AnimatedColumn>
  );
};
