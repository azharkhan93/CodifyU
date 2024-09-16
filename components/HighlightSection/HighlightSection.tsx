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
        <Text variant={["heading", "footerHeading"]}>
          Intelligent Software Solutions
        </Text>
        <Text
          variant={"body"}
          lineHeight={"1.5"}
          width={["100%", "700px"]}
          textAlign={["start", "center"]}
        >
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
        >
          {`Exlpore Our Services`}
        </Button>
      </CenterBox>
    </Column>
  );
};
