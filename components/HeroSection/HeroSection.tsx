"use client";
import {
  AnimatedColumn,
  AnimatedRow,
  Box,
  CenterBox,
  Row,
  Text,
} from "../styled";
import { HeroData } from "./components/HeroData";
import { featureItems } from "@/constants";
import { FeatureItems } from "./components/FeatureItems";
import { useInView } from "@/hooks/useInView";
// import Typewriter from 'react-typewriter-effect';

export const HeroSection = () => {
  const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  const [refRow, isInViewRow] = useInView({ threshold: 0.1 });
  return (
    <Box
      bg={"primary"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      flexDirection={"column"}
      gap={"l"}
      px={"xxxxl"}
    >
      <AnimatedColumn
        ref={refColumn}
        isInView={isInViewColumn}
        py={"m"}
        gap={"xl"}
        width={"100%"}
        border={"2px solid green"}
        alignItems={"flex-start"}
        mt={"xlg"}
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
            width={"6%"}
            //   ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text variant="subHeading" color="white">
            Award Wining Digital Agency
          </Text>
        </Row>

        <Text
          variant="heading"
          color="white"
          width={"400px"}
          textAlign={"center"}
        >
          Where Innovation Meets{" "}
          <span style={{ color: "green", fontSize: "33px" }}>
            Digital Excellence
          </span>
        </Text>
      </AnimatedColumn>
      <AnimatedRow
        ref={refRow}
        isInView={isInViewRow}
        flexDirection={["row", "row"]}
        border={"2px solid red"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Box
          alignItems={"center"}
          border={"1px solid white"}
          flexDirection={"row"}
          width={"48%"}
          flexWrap={"wrap"}
          gap={"l"}
          py={"xxl"}
        >
          {featureItems.map((item, index) => (
            <FeatureItems key={index} text={item} />
          ))}
        </Box>
        <CenterBox width={"40%"} borderLeft={"3px solid green"}>
          <Text variant="body" color="white" textAlign={"start"} px={"header"}>
            we re the one of the best maketing agency in the whole market with a
            expeerince of almost more tha 50 years in market
          </Text>
        </CenterBox>
      </AnimatedRow>
      <HeroData />
    </Box>
  );
};
