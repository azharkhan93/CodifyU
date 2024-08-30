"use client";

import { AnimatedColumn, Box, CenterBox, Column, Row, Text } from "@/components/styled";
import { Service } from "@/types";

type ServicesCardProps = {
  service: Service;
};





export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
    position={"relative"}
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xl"}
      borderRadius={"s"}
      px={"m"}
      width={"400px"}
     

        bg={"greenish"}
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




