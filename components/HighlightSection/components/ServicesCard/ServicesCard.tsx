"use client";

import { AnimatedColumn, CenterBox, Column, Row, Text } from "@/components/styled";
import { Service } from "@/types";

type ServicesCardProps = {
  service: Service;
};





export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xl"}
      borderRadius={"s"}
      px={"m"}
      width={"400px"}
      bg={"secondary"}
    >
      <Row flexDirection={"row"} width={"100%"} justifyContent={"space-between"}>
        <Text variant={"subHeading"}>{service.title}</Text>
        <CenterBox>
          <IconComponent size={24} fill="black" />
        </CenterBox>
      </Row>
      <Text variant={"body"}>{service.description}</Text>
      <Row flexDirection={"row"} gap={"s"}>
        <Text variant={"body"}>{service.linkText}</Text>
        <CenterBox>
          <IconComponent size={24} fill="black" />
        </CenterBox>
      </Row>
    </AnimatedColumn>
  );
};




