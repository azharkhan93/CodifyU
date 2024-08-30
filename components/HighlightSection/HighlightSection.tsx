"use client";
import { services } from "@/constants";
import { Column, Row, Text } from "../styled";
import { ServicesCard } from "./components/ServicesCard";

export const HighlightSection = () => {
  return (
    <Column width={"100%"}>
      <Column
        py={"xl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "45%"]}
        px={["s","header"]}
      >
        <Text variant={"heading"}>Intelligent Software Solutions</Text>
        <Text variant={"body"}>
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </Text>
      </Column>

      <Row
        flexWrap={"wrap"}
        alignItems={"center"}
        width={"100%"}
        justifyContent={"center"}
        flexDirection={"row"}
        gap={["xl","xxxxl"]}
        py={["xxxxl","xxxl"]}
        px={"m"}
      >
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </Row>
    </Column>
  );
};
