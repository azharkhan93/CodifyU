"use client";
import { Row, Box, CenterBox, SlidingWrapper, Text, Column } from "../styled";
import { Logos } from "./components/Logos";
import { PARTNER_LOGOS } from "@/constants";

export const Partners = () => {
  return (
    <>
      <Column px={["s", "xl"]} py={"l"} gap={"xl"} width={["100%","500px"]}>
        <Text variant={"heading"}>Our Partners</Text>
        <Text variant={"body"}>
          We are proud to collaborate with some of the most innovative and
          esteemed companies in the industry.
        </Text>
      </Column>
      <Row
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        py={"xl"}
      >
        <CenterBox
          flexDirection={["column", "row"]}
          width={["100%", "80%"]}
          gap={"xl"}
          overflow={"hidden"}
        >
          <SlidingWrapper flexDirection={["row", "row"]} gap={["xl", "xxxl"]}>
        
            {PARTNER_LOGOS.map((logo, index) => (
              <Logos key={index} src={logo.src} alt={logo.alt} size={logo.size} />
            ))}
          </SlidingWrapper>
        </CenterBox>
      </Row>
    </>
  );
};
