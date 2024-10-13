import { Box } from "@/components/styled";
import { TechImageProps } from "@/types";
import Image from "next/image";
import React from "react";

export const TechImages: React.FC<TechImageProps> = ({
  src,
  alt = "Image not found",
  
}) => {
  return (
    <Box
    alignItems={"center"}
    // s
  >
    <Image
      src={src}
      alt={alt}
      width={70} 
      height={70} 
     
    />
  </Box>
  )
};
