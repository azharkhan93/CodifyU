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
      // px={["m", "xxxxl"]}
    >
      <Column
        py={"l"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"center"}
        zIndex={1}
      >
        <Text variant={"footerHeading"} color="textColor"
        style={{textTransform: "none"}}
        >
          codefyU
          {/* <span style={{ color: "#fb9c42", fontSize: "50px" }}>codefyU</span>{" "} */}
        </Text>

        <Text
          px={"xxxxl"}
          variant={["heading", "footerHeading"]}
          width={["100%", "1100px"]}
          textAlign={["start", "center"]}
        >
          {/* <span style={{ color: "orange", fontSize: "50px" }}>codefyU</span>{" "} */}
          Startup Accelerator Seamless Tech Solutions that Scale
           {/* <strong style={{fontWeight: "bold", fontFamily: "PlayfairBold", fontSize: "60px"}}>(Startup Accelerator)</strong> Seamless Tech Solutions that Scale  */}
           
        </Text>
        {/* <Text
        textAlign={["start","center"]}
        width={["100%","670px"]}
        variant={["subHeading","heading"]}
        >
        We integrate the latest advancements <TypewriterText>Execution</TypewriterText> 
        </Text> */}

        <Text
          // px={"s"}
          variant="body"
          width={["100%", "600px"]}
          textAlign={["start", "center"]}
          lineHeight={"1.5"}
        >
          codefyU delivers advanced customized tech solutions worldwide. We
          solve complex challenges with precision offering efficient, scalable
          results that drive business growth. By merging innovation with
          impactful strategies, we help businesses thrive in todays dynamic
          digital landscape
        </Text>

        <CenterBox flexDirection={"row"} gap={["xxxl", "xxxl"]}>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={["xxxl", "xxxxl"]}
            bg={"primary"}
          >
            View Work
          </Button>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={["xxxl", "xxxxl"]}
            bg={"primary"}
            
          >
            {`Let's Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};
