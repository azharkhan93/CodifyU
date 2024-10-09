"use client";
import { CenterBox, Column,  Row, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";
import { motion } from "framer-motion";
import { useLogos } from "@/hooks/useAnimations";

const MotionCenterBox = motion.create(CenterBox);

export const TechStacks = () => {
  const logosAnimation = useLogos();
  return (
    <>
      <Column zIndex={2} py={"xxxxl"} gap={"xxl"}>
        <Text variant="heading" textAlign={"start"}>
          Tools And Technologies
        </Text>
        <Text variant={"body"}>
          We are proud to collaborate with some of the most innovative and
          esteemed companies in the industry.
        </Text>
      </Column>

      <MotionCenterBox py={"xxxl"} flexDirection={["row", "row"]} gap={["l","header"]}  position={"relative"} 
      {...logosAnimation}
      >
       
          {TECH_IMAGES.map((image, index) => (
            <TechImages key={index} src={image.src} alt={image.alt} />
          ))}
      </MotionCenterBox>
    </>
  );
};
