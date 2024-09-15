"use client";
import {
  AnimatedColumn,
  Box,
  CenterBox,
  Column,
  Row,
  Text,
} from "@/components/styled";
import { ServicesCardProps } from "@/types";
import {  MdArrowForward } from "react-icons/md";

export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
    style={{
      boxShadow:
        "0px -10px 30px rgba(82, 0, 174, 0.5), 0px 10px 30px rgba(64, 98, 187, 0.5), 0px 5px 15px rgba(0, 0, 0, 0.5)"
    }}
    
    bg={"lightYellow"}
  
      position={"relative"}
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xxxl"}
      borderRadius={"s"}
      px={"m"}
      width={"400px"}
    >
      
      <Row
        flexDirection={"row"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Text variant={"subHeading"}>
          {service.title}
        </Text>
        <CenterBox>
          <IconComponent size={40} fill="#FB9C42" />
        </CenterBox>
      </Row>
      <Text variant={"body"} >
        {service.description}
      </Text>
      <Row flexDirection={"row"} gap={"s"} alignItems={"center"}>
        <Text variant={"body"} >
          {service.linkText}
        </Text>
        <CenterBox>
          < MdArrowForward size={25} fill="#FB9C42" />
        </CenterBox>
      </Row>
    </AnimatedColumn>
  );
};
