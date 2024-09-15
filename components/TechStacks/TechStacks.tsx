"use client";
import { CenterBox, Column, Flock, Text } from "@/components";
import { TechImages } from "./components/TecImages";
import { TECH_IMAGES } from "@/constants";

export const TechStacks = () => {
  return (
    <>
      <Column
        zIndex={2}
        py={"xxxl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"center"}
        // width={["100%", "100%"]}
        // px={["s", "header"]}
      >
        <Text variant={["heading", "footerHeading"]}>
          Tools And Technologies
        </Text>
      </Column>
      
      <CenterBox
      py={"xl"}
        flexDirection={["column", "row"]}
        width={["100%", "75%"]}     
        gap={"xl"}
        overflow={"hidden"}
        border={"3px solid red"}
        style={{margin: "0 auto"}}
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



