"use client";
import styled from "styled-components";
import { Box, Button, CenterBox, Column, Row, Text } from "../styled";

const HighlightedText = styled.span`
  color: orange;
  font-family: "ComfortaaMedium";
  font-size: 2rem;
`;

export const ParallaxSection = ({
  spanText = "Ready to Elevate?", 
  heading = "Let’s Build the Future Together!",
  buttonText = "Start A Conversation",
  animationSrc = "https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json",
}) => {
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
          <HighlightedText>{spanText}</HighlightedText>{" "}
          {heading}
        </Text>
        
        <CenterBox width={"100%"} mt={"xl"}>
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
