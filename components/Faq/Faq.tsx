"use client"
import { FAQProps } from "@/types";
import { Box, CenterBox, Column, Row, Text } from "../styled";
import {  FaqItems } from "./components/FaqItems";
import Image from "next/image";



export const Faq: React.FC<FAQProps> = ({ items }) => {
  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]}>
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text color={"primary"} variant={"heading"} fontWeight={"bold"}>
            Frequently Asked Questions
          </Text>
          <Box
            height={"3px"}
            bg={"secondary"}
            width={"70%"}
            ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text color={"primary"} variant={"subHeading"}>
            Answers to Common Queries
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text color={"primary"} variant={"body"}>
            Find answers to the most frequently asked questions about our
            services. If you have any other queries, feel free to contact us.
          </Text>
        </CenterBox>
      </Box>
      <CenterBox
        py={["l", "xl"]}
        flexDirection={["column-reverse", "row"]}
        gap={["none", "header"]}
      >
        <Box>
          <Image
          src= {"/images/faq.webp"}
          alt = {"no img"}
          width= {400}
          height= {330}
          />

        </Box>
        <Column width={["100%", "45%"]} py={["s", "m"]} px={"xl"}>
          {items.map((item, index) => (
            <FaqItems
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Column>
      </CenterBox>
    </Column>
  );
};
