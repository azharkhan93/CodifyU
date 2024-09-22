"use client";
import { Row, Text } from "@/components/styled";
import { ContactItemProps } from "@/types";

export const ContactItems: React.FC<ContactItemProps> = ({
  icon: Icon,
  text,
}) => {
  return (
    <Row gap={"xl"} alignItems={"center"} flexDirection={"row"}>
      <Icon size={30} fill="#fb9c42" />
      <Text variant={"subHeading"}>{text}</Text>
    </Row>
  );
};
