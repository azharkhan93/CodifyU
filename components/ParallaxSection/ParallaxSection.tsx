"use client";
import Link from "next/link";
import { Box, Button, CenterBox, Column, HighlightedText, Row, Text } from "../styled";

type ParallaxSectionProps = {
  spanText?: string;
  heading?: string;
  buttonText?: string;
  animationSrc?: string;
  buttonLink?: string; 
};

export const ParallaxSection = ({
  spanText = "Ready to Elevate?", 
  heading = "Let’s Build the Future Together!",
  buttonText = "Start A Conversation",
  animationSrc = "https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json",
  buttonLink = "/services", 
}: ParallaxSectionProps) => {
  return (
    <Row
      color="white"
      borderRadius={"m"}
      bg={"primary"}
      flexDirection={["column", "row"]}
      width={["100%", "100%"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"xl"}
      px={["xl", "m"]}
    >
      <Column py={"xxxl"} alignItems={"center"} gap={"xl"}>
        <Text variant={"heading"} textAlign={"center"} width={["100%","600px"]} lineHeight={"1.5"}>
          <HighlightedText >{spanText}</HighlightedText>{" "}
          {heading}
        </Text>
        
        <CenterBox width={"100%"} mt={"xl"}>
          <Link href={buttonLink} passHref style={{ textDecoration: "none" }}>
            <Button
              borderTopLeftRadius={"xxl"}
              variant={"primary"}
              bg={"textColor"}
              py={"m"}
              px={"xxxl"}
              borderRadius={"m"}
            >
              {buttonText}
            </Button>
          </Link>
        </CenterBox>
      </Column>

      <CenterBox position={"relative"}>
        <iframe
          src={animationSrc}
          style={{ width: "500px", height: "390px", border: "none" }}
          title="Lottie Animation"
        ></iframe>
      </CenterBox>
    </Row>
  );
};
