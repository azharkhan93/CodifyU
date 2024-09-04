"use client";
import React, { useState } from "react";
import { Column, Row } from "@/components";
import { iconData, techSections } from "@/constants";
import { IconBox } from "./components/IconBox";
import { Stacks } from "./components/Stacks";

export const TechStacks = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Artificial Intelligence"
  );

  const filteredIcons = iconData.filter(
    (icon) => icon.category === selectedCategory
  );

  return (
    <Row
      flexDirection={"row"}
      width={"100%"}
      bg={"secondary"}
      justifyContent={"space-between"}
      px={"header"}
    >
      <Column
        gap={"xl"}
        width={"500px"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Column gap={"xxxl"} bg={"white"} px={"xxxl"}>
          {techSections.map((section, index) => (
            <Stacks
              key={index}
              title3={section.title}
              onClick={() => setSelectedCategory(section.title)}
            />
          ))}
        </Column>
      </Column>
      <Column gap={"xl"} bg={"white"}>
        <Row
          width={"800px"}
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
  );
};
