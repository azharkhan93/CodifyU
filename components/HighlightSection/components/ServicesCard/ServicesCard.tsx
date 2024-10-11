"use client";
import {
  AnimatedColumn,
  CenterBox,
  Row,
  Text,
} from "@/components/styled";
import Link from "next/link";
import { ServicesCardProps } from "@/types";
import { MdArrowForward } from "react-icons/md";


export const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <AnimatedColumn
      bg={"lightYellow"}
      position={"relative"}
      alignItems={"flex-start"}
      gap={"xl"}
      py={"xxxl"}
      borderRadius={"s"}
      px={"m"}
      width={"370px"}
    >
      <Row
        flexDirection={"row"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Link href={service.link} passHref style={{ textDecoration: "none" }}>
          <Text variant={"subHeading"} color={"textColor"} fontWeight={"bold"}>{service.title}</Text>
        </Link>
        <CenterBox>
          <IconComponent size={40} fill="#FB9C42" />
        </CenterBox>
      </Row>
      <Text variant={"body"} lineHeight={"1.5"}>{service.description}</Text>
      <Row flexDirection={"row"} gap={"s"} alignItems={"center"}>
        <Link href={service.link} passHref style={{ textDecoration: "none" }}>
          <Text variant={"body"} color= {"textColor"}>{service.linkText}</Text>
        </Link>
        <CenterBox>
          <MdArrowForward size={25} fill="#FB9C42" />
        </CenterBox>
      </Row>
    </AnimatedColumn>
  );
};
