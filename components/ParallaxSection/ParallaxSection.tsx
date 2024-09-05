"use client";
import { Box, Button, CenterBox, Row, Text } from "../styled";

export const ParallaxSection = () => {
  return (
    <CenterBox
      py={"xxl"}
      px={"s"}
      position={"sticky"}
      top={0}
      zIndex={10}
      height={["100%", "450px"]}
      width={"100%"}
      color={"white"}
      justifyContent={"space-between"}
      flexDirection={["column", "row"]}
      style={{
        backgroundImage: "url('/images/p4.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
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
      <Row
        flexDirection={["column", "column"]}
        width={["100%", "40%"]}
        gap={"xl"}
      >
        <Text
          variant="heading"
          textAlign={["center", "center"]}
          fontFamily={"QuicksandRegular"}
        >
          
          {`It's 2024 And Your Still Juggling Multilple Technology Stacks struggling With Market Entry Searching For Scable Solutions`}
        </Text>
        <Text variant="body" textAlign={"center"}>
        <span style={{ color: "orange", fontSize: "27px" }}>Got A Project In Mind?</span>
          Worried About The Delivery Of Scablable , High-Quality Solutions
          without Sacrifying Speed?
        </Text>
        <CenterBox width={"100%"} mt={"xl"}>
          <Button
            borderTopLeftRadius={"xxl"}
            variant={"primary"}
            bg={"grey"}
            py={"m"}
            px={"xxxl"}
            borderRadius={"m"}
          >
            {`Let'S Work Together`}
          </Button>
        </CenterBox>
      </Row>

      <CenterBox>
        <iframe
          src="https://lottie.host/embed/28ff5dcf-904e-4e22-a52f-71caaf13a838/AW9QvY1gDf.json"
          style={{ width: "500px", height: "370px", border: "none" }}
        ></iframe>
      </CenterBox>
    </CenterBox>
  );
};
