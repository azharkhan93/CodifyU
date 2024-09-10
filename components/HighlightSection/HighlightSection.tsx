"use client";
import { services } from "@/constants";
import { Box, Column, Row, Text } from "../styled";
import { ServicesCard } from "./components/ServicesCard";

export const HighlightSection = () => {
  return (
    <Column width={"100%"}
    position={"relative"}
    bg={"white"}
    
    // style={{ 
    //   backgroundImage: "url('/images/bg.jpeg')", 
    //   backgroundSize: "cover", 
    //   backgroundPosition: "center", 
    // }}
     >
        <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bg={"modalOverlayBg"}
        zIndex={-1}
      />
      <Column
      zIndex={2}
        py={"xxxl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "80%"]}
        px={["s","header"]}
      >
        <Text variant={["heading","footerHeading"]} color="blue600">Intelligent Software Solutions</Text>
        <Text variant={"body"} color="blue600">
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
