"use client";

import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  Text,
  TypewriterText,
} from "../styled";



export const HeroSection = () => {
  return (
    <Box
      position="relative"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={"l"}
      px={["m", "xxxxl"]}
    >
      {/* <AnimateCircle /> */}
      <Column
        py={"l"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"center"}
        zIndex={1}
      >
        <Row flexDirection={["row", "row"]} alignItems={"center"} width={"100%"} gap={"s"}></Row>

     
          <Text
            variant={["heading", "footerHeading"]}
            width={["100%", "1000px"]}
            textAlign={["start", "center"]}
          >
            <span style={{ color: "orange", fontSize: "50px" }}>codefyU</span>{" "}
            Where Innovation Meets <TypewriterText>Execution</TypewriterText>
          </Text>
    

      
          <Text
            px={"s"}
            variant="body"
            width={["100%", "600px"]}
            textAlign={["start", "center"]}
            lineHeight={"1.5"}
          >
            We are your partners in transforming business operations through
            cutting-edge technology. Our expertise in AI, Machine Learning, and Generative AI equips you with customized solutions designed to boost efficiency, scalability, and profitability.
          </Text>
 

        <CenterBox flexDirection={"row"} gap={"xxxl"}>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxxxl"}
            bg={"primary"}
          >
            View Work
          </Button>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxxxl"}
            style={{ backgroundColor: "black" }}
          >
            {`Let's Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};




