"use client";

import { AnimatedColumn, Box, CenterBox, Column, Row, Text } from "@/components/styled";
import { BASE_COLORS } from "@/theme";
import {ServicesCardProps } from "@/types";

export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
    boxShadow={BASE_COLORS.modalShadow}
    position={"relative"}
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xl"}
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
      <Row flexDirection={"row"} width={"100%"} justifyContent={"space-between"}>
        <Text variant={"subHeading"} color="white">{service.title}</Text>
        <CenterBox>
          <IconComponent size={24} fill="black" />
        </CenterBox>
      </Row>
      <Text variant={"body"} color="white">{service.description}</Text>
      <Row flexDirection={"row"} gap={"s"}>
        <Text variant={"body"} color="white">{service.linkText}</Text>
        <CenterBox>
          <IconComponent size={24} fill="black" />
        </CenterBox>
      </Row>
    </AnimatedColumn>
  );
};




