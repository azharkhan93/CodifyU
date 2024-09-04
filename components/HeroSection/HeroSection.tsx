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
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        bg={"modalOverlayBg"}
        zIndex={-1}
      />

      <Column
        py={"m"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"flex-start"}
        mt={"xlg"}
        zIndex={1}
      >
        <Row
          flexDirection={["row", "row"]}
          alignItems={"center"}
          width={"100%"}
          gap={"s"}
        >
          <Box
            height={"3px"}
            bg={"gradientBold"}
            width={["40%", "20%"]}
            borderRadius={"circle"}
          ></Box>
        </Row>

        <Text
          variant={["heading", "footerHeading"]}
          color="white"
          width={["100%", "700px"]}
          textAlign={"center"}
        >
          Welcome To{" "}
          <span style={{ color: "orange", fontSize: "40px" }}>CodefyU</span>{" "}
          Where Innovation Meets <TypewriterText>Execution</TypewriterText>
        </Text>
        <Text
        px={"s"}
          variant="body"
          color="white"
          width={["100%", "550px"]}
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
            bg={"primary"}
          >
            {`Lets' Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Box>
  );
};
