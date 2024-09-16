"use client";
import { Box, Button, CenterBox, Column, Row, Text } from "../styled";

export const ParallaxSection = () => {
  return (
  <>
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
      <Column
      py={"xxxl"}
      alignItems={"center"}
      gap={"xl"}
      >
      <Text
        variant={["subHeading", "heading"]}
        textAlign={["center", "center"]}
      >
        {` Market Entry Searching For Scable Solutions`}
      </Text>
      <Text variant="body" textAlign={"center"} lineHeight={"1.5"} >
        <span style={{ color: "orange", fontSize: "20px" }}>
          Got A Project In Mind?
        </span>
        Worried About The Delivery Of Scablable , High-Quality Solutions
        without Sacrifying Speed?
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
          {`Let'S Work Together`}
        </Button>
      </CenterBox>
      </Column>
    
    
    <CenterBox position={"relative"}>
        <iframe
          src="https://lottie.host/embed/28ff5dcf-904e-4e22-a52f-71caaf13a838/AW9QvY1gDf.json"
          style={{ width: "500px", height: "390px", border: "none" }}
        ></iframe>
      </CenterBox>
      </Row>
      </>
    
  );
};
