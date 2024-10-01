"use client";
import { Box, Button, CenterBox, Column, Row, Text } from "../styled";

export const ParallaxSection = ({
  heading = "Got A Project In Mind?",
  body = "Worried About The Delivery Of Scalable, High-Quality Solutions without Sacrificing Speed?",
  buttonText = "Let’s Work Together",
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
        <Text variant={"heading"} textAlign={["start", "center"]}>
          {heading}
        </Text>
        <Text variant="body" textAlign={["start", "center"]} lineHeight={"1.5"}>
          {body}
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
