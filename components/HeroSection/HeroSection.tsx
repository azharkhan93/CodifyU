"use client";
import {
  AnimatedColumn,
  Box,
  Button,
  CenterBox,
  Row,
  Text,
  TypewriterText,
} from "../styled";
import { useInView } from "@/hooks/useInView";

export const HeroSection = () => {
  // const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  // const [refRow, isInViewRow] = useInView({ threshold: 0.1 });

  return (
    <Box
      position="relative"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={"l"}
      px={["s", "xxxxl"]}
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

      <AnimatedColumn
        // ref={refColumn}
        // isInView={isInViewColumn}
        py={"m"}
        gap={"xl"}
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
            height={"2px"}
            bg={"white"}
            width={"20%"}
            borderRadius={"circle"}
          ></Box>
        </Row>

        <Text
          variant={["heading", "footerHeading"]}
          color="white"
          width={["100%", "600px"]}
          textAlign={"center"}
        >
          Where Innovation Meets{" "}
          <TypewriterText>Digital Excellence</TypewriterText>
        </Text>
        <Text variant="subHeading" color="white">
          Award-Winning Digital Agency
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
      </AnimatedColumn>
    </Box>
  );
};
