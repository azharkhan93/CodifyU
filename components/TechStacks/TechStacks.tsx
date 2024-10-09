"use client";
import { Box, CenterBox, Column, Row, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";
import { motion } from "framer-motion";
import { useLogos } from "@/hooks/useAnimations";

const MotionBox = motion.create(Box);

export const TechStacks = () => {
  const logosAnimation = useLogos();
  return (
    <>
      <Column zIndex={2} py={"xxxxl"} gap={"xxl"}>
        <Text variant="heading" textAlign={"start"}>
          Tools And Technologies
        </Text>
        <Text
          variant={"body"}
          lineHeight={"1.5"}
          width={["full", "550px"]}
          textAlign={["start", "center"]}
        >
          We are proud to collaborate with some of the most innovative and
          esteemed companies in the industry.
        </Text>
      </Column>

      <MotionBox
        alignItems={"center"}
        height={"200px"}
        flexDirection={"row"}
        gap={["xxxxl", "header"]}
        {...logosAnimation}
      >
        {TECH_IMAGES.map((image, index) => (
          <TechImages key={index} src={image.src} alt={image.alt} />
        ))}
      </MotionBox>
    </>
  );
};
