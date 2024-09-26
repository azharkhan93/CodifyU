"use client";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Text,
} from "../styled";
import { Typewriter } from "react-simple-typewriter";

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
    >
      <Column
        py={"l"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"center"}
        zIndex={1}
      >
        
        <CenterBox
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap={"m"}
          width={["100%", "900px"]}
          textAlign={["start", "center"]}
        >
          
          <Text
            variant={["heading", "footerHeading"]}
            textAlign={["start", "center"]}
          >
            Startup Accelerator Seamless
          </Text>

    
          <Text variant={["heading", "footerHeading"]} color="textColor">
            <Typewriter
              words={[
                "Tech Solutions",
                "That Scale",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
        </CenterBox>

        <Text
          variant="body"
          width={["100%", "600px"]}
          textAlign={["start", "center"]}
          lineHeight={"1.5"}
        >
          codefyU delivers advanced customized tech solutions worldwide. We
          solve complex challenges with precision, offering efficient, scalable
          results that drive business growth. By merging innovation with
          impactful strategies, we help businesses thrive in todays dynamic
          digital landscape.
        </Text>

        {/* Buttons */}
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

