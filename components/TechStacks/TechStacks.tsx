"use client";
import React, { useState } from "react";
import { Column, Row, Text } from "@/components";
import { iconData, techSections } from "@/constants";
import { IconBox } from "./components/IconBox";
import { Stacks } from "./components/Stacks";

export const TechStacks = () => {
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const defaultCategories = [
    "Cloud",
    "AI/ML",
    "Languages",
    "Utilities",
  ];

  const filteredIcons = iconData.filter((icon) =>
    selectedCategory
      ? icon.category === selectedCategory
      : defaultCategories.includes(icon.category)
  );

  return (
    <Column width={"100%"}>
      <Column
        zIndex={2}
        py={"xxxl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "60%"]}
        px={["s", "header"]}
      >
        <Text variant={["heading","footerHeading"]} color="blue600">
          Tools And Technologies
        </Text>
        <Text variant={"body"} color="blue600">
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </Text>
      </Column>
      <Row
        flexDirection={["column", "row"]}
        width={"100%"}
        gap={"xl"}
        justifyContent={"space-between"}
        px={["none", "header"]}
      >
        <Row
          flexDirection={["row", "column"]}
          gap={"xl"}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          <Row
            py={"xl"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={["m", "xxxl"]}
            bg={"white"}
            px={["none", "xxxl"]}
            flexDirection={["row", "column"]}
            flexWrap={"wrap"}
          >
            {techSections.map((section, index) => (
              <Stacks
                key={index}
                title3={section.title}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === section.title ? null : section.title
                  )
                }
              />
            ))}
          </Row>
        </Row>

        <Column gap={"xl"} bg={"white"} py={"xl"}>
          <Row
            width={["100%", "800px"]}
            border={"4px solid white"}
            flexWrap={"wrap"}
            gap={"xxxxl"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {filteredIcons.map((data, index) => (
              <IconBox key={index} iconData={data} />
            ))}
          </Row>
        </Column>
      </Row>
    </Column>
  );
};
