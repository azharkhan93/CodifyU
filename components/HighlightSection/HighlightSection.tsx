"use client";
import { services } from "@/constants";
import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
import { ServicesCard } from "./components/ServicesCard";

export const HighlightSection = () => {
  return (
    <Column width={"100%"}
    position={"relative"}
    // bg={"white"}
    py= {"header"}
    
    // style={{ 
    //   backgroundImage: "url('/images/bg.jpeg')", 
    //   backgroundSize: "cover", 
    //   backgroundPosition: "center", 
    // }}
     >
        {/* <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bg={"modalOverlayBg"}
        zIndex={-1}
      /> */}
      <Column
      zIndex={2}
        py={"xxxl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "80%"]}
        px={["s","header"]}
      >
        <Text variant={["heading","footerHeading"]} >Intelligent Software Solutions</Text>
        <Text variant={"body"} lineHeight={"1.5"}>
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </Text>
        {/* <Text variant={"body"} >
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </Text> */}
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
      <CenterBox width={"100%"} py={"m"} >
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
