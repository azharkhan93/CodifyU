import { Column, Row, Text } from "@/components/styled";
import React from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { CardProps } from "@/types";

export const AiBenefitsCards: React.FC<CardProps> = ({
  heading,
  body,
  benefitsTitle,
  benefits,
  imageUrl,
}) => (
  <Column
    position="relative"
    width={["100%","700px"]}
    borderRadius={"m"}
    py={"xxxl"}
    bg={"textColor"}
    px={["none","xxl"]}
    gap={"xl"}
    style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)" }}
  >
    <Image
      src={imageUrl}
      alt={heading}
      width={200}
      height={300}
      style={{
        position: "absolute",
         top: "200px",
        left: "85%",
        transform: "translateX(-50%)",
        borderRadius: "10%",
      }}
    />

    <Text variant={"heading"}>{heading}</Text>
    <Text variant={"body"}>{body}</Text>

    <Column gap={"xl"} width={["100%","500px"]}>
      <Text variant={"heading"}>{benefitsTitle}</Text>
      {benefits.map((benefit, index) => (
        <Row key={index} alignItems={"center"} gap={"m"} flexDirection={"row"}>
          <FaCircle style={{ marginRight: "8px" }} />
          <Text variant={"subHeading"}>{benefit}</Text>
        </Row>
      ))}
    </Column>
  </Column>
);
