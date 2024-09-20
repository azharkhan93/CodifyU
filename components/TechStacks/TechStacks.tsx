"use client";
import { CenterBox, Column, Flock, Row, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";
import { motion } from "framer-motion";
import { useLogos } from "@/hooks/useAnimations";

const MotionRow = motion.create(Row);

export const TechStacks = () => {
  const logosAnimation = useLogos();
  return (
    <>
      <Column zIndex={2} py={"xxxxl"} gap={"xxl"}>
        <Text variant="heading" textAlign={"start"}>
          Tools And Technologies
        </Text>
      </Column>

      <CenterBox py={"xxxl"} flexDirection={["column", "row"]} gap={"xl"}>
        <MotionRow
          flexDirection={["row", "row"]}
          gap={["xxxxl", "xxxl"]}
          {...logosAnimation}
        >
          {TECH_IMAGES.map((image, index) => (
            <TechImages key={index} src={image.src} alt={image.alt} />
          ))}
        </MotionRow>
      </CenterBox>
    </>
  );
};
