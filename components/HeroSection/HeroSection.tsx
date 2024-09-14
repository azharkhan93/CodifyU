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
    //  bg={"lightYellow"}
    // border={"2px solid green"}
      position="relative"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={"l"}
      px={["m", "xxxxl"]}
    >
      
  <Column
      // border={"4px solid red"}
        py={"m"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"center"}
        // mt={"xlg"}
        zIndex={1}
      >
        <Row
          flexDirection={["row", "row"]}
          alignItems={"center"}
          width={"100%"}
          gap={"s"}
        >
        </Row>

        <Text
          variant={["heading", "footerHeading"]}
          width={["100%", "1000px"]}
          textAlign={["start","center"]}
        >
          {/* Welcome To{" "} */}
          <span style={{ color: "orange", fontSize: "50px" }}>codefyU</span>{" "}
          Where Innovation Meets <TypewriterText>Execution</TypewriterText>
        </Text>
        <Text
        px={"s"}
          variant="body"
          width={["100%", "600px"]}
          textAlign={["start", "center"]}
          
        >
          We are your partners in transforming business operations through
          cutting-edge technology. Our expertise in AI, Machine Learning,
          Generative AI & Full-Stack Development equips you with customized
          solutions designed to boost effiency, scability, & profitabilty.
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
            style={{backgroundColor: "black"}}
          >
            {`Lets' Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};



