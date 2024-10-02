"use client";
import { services } from "@/constants";
import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
import { ServicesCard } from "./components/ServicesCard";

export const HighlightSection = () => {
  return (
    <Column
      width={"100%"}
      position={"relative"}
      py={"header"}
    >
      <Column
        zIndex={2}
        py={"xxxl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "100%"]}
      >
        <Text variant={["heading", "heading"]}>
        Driving Unmatched Efficiency Through Intelligent Solutions
        </Text>
        <Text
          variant={"body"}
          lineHeight={"1.5"}
          width={["100%", "700px"]}
          textAlign={["start", "center"]}
        >
          At CodefyU, we specialize in delivering transformative solutions that drive growth and innovation. Our core services—AI/ML, Generative AI, and Large Language Models (LLMs)—form the backbone of our offerings, but we provide much more to elevate your business.
        </Text>
      </Column>

      <Row
        flexWrap={"wrap"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"center"}
        flexDirection={"row"}
        gap={["xl", "xl"]}
        py={["xxxxl", "xxxl"]}
      >
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </Row>
      <CenterBox width={"100%"} py={"m"}>
        <Button
            borderTopLeftRadius={"xxl"}
          variant={"primary"}
          bg={"primary"}
          py={"m"}
          px={"header"}
          borderRadius={"m"}
          style={{borderTopLeftRadius: "50px", }}
        >
          {`Exlpore Our Services`}
        </Button>
      </CenterBox>
    </Column>
  );
};
