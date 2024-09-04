"use client";
import React from "react";
import { Box, Text } from "@/components";

import { TechSectionType } from "@/types";

interface StacksNamesProps extends TechSectionType {
  onClick: () => void;
}

export const Stacks: React.FC<StacksNamesProps> = ({ title3, onClick }) => {
  return (
    <Text
    textAlign={["start","start"]}
    border={"1px solid red "}
    width={["160px","270px"]}
       p={"s"}
      // width={"100%"}
    borderLeft={"4px solid blue"}
      variant={["subHeading","heading"]}
      color="primary"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {title3}
    </Text>
  );
};
