"use client";
import { Box, Column, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";
import { motion } from "framer-motion";
import { useLogos } from "@/hooks/useAnimations";

const MotionBox = motion.create(Box);

export const TechStacks = () => {
  const logosAnimation = useLogos();
  return (
    <>
      <Column zIndex={2} py={"xxxxl"} gap={"xxl"} alignItems={"center"}>
        <Text variant="heading" textAlign={"center"}>
          Tools And Technologies
        </Text>
        <Text
          variant={"body"}
          lineHeight={"1.5"}
          width={["100%", "600px"]}
          textAlign={ "center"}
        >
          We are proud to collaborate with some of the most innovative and
          esteemed companies in the industry.
        </Text>
      </Column>

      <MotionBox
      py={"m"}
        alignItems={"center"}
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
