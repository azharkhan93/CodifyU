"use client";
import { CenterBox, Column, Flock, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";

export const TechStacks = () => {
  return (
    <>
      <Column zIndex={2} py={"xxxxl"} gap={"xxl"}>
        <Text variant={["heading", "footerHeading"]} textAlign={"start"}>
          Tools And Technologies
        </Text>
      </Column>

      <CenterBox
        py={"xxxl"}
        flexDirection={["column", "row"]}
        width={["100%", "100%"]}
        gap={"xl"}
        overflow={"hidden"}
      >
        <Flock flexDirection={["row", "row"]} gap={["xxxxl", "xxxl"]}>
          {TECH_IMAGES.map((image, index) => (
            <TechImages key={index} src={image.src} alt={image.alt} />
          ))}
        </Flock>
      </CenterBox>
    </>
  );
};
