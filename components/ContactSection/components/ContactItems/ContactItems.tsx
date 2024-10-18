"use client";

import { Row, Text } from "@/components/styled";
import { ContactItemProps } from "@/types";

export const ContactItems: React.FC<ContactItemProps> = ({
  icon: Icon,
  text,
  link,
}) => {
  return (
    <Row gap={"xl"} alignItems={"center"} flexDirection={"row"}>
      <Icon size={30} fill="#fb9c42" style={{cursor: "pointer"}} />
      <Text variant={"subHeading"}>
        {text.startsWith("+") ? (
          <a
            href={`tel:${text}`}
            style={{ color: "black", textDecoration: "none",fontFamily: "ComfortaaMedium", }}
          >
            {text}
          </a>
        ) : text.includes("@") ? (
          <a
            href={`mailto:${text}`}
            style={{ color: "black", textDecoration: "none", fontFamily: "ComfortaaMedium", }}
          >
            {text}
          </a>
        ) : link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black", textDecoration: "none",  fontFamily: "ComfortaaMedium",}}
          >
            {text}
          </a>
        ) : (
          text
        )}
      </Text>
    </Row>
  );
};
