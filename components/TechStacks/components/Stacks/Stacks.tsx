"use client";
import React from "react";
import { Box, Text } from "@/components";

import { TechSectionType } from "@/types";

interface StacksNamesProps extends TechSectionType {
  onClick: () => void;
}

export const Stacks: React.FC<StacksNamesProps> = ({
  title3,
  onClick,
}) => {
  return (
   
      <Text
      p={'s'}
      borderLeft={"5px solid green"}
        variant="heading"
        color="primary"
        style={{ cursor: "pointer"}} 
        onClick={onClick}
      >
        {title3}
      </Text>
    
  );
};