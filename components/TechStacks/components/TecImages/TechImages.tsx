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
    width={["170px","180px"]}
    height={["80px","100px"]}
  >
    <Image
      src={src}
      alt={alt}
      width={180} 
      height={100} 
     
    />
  </Box>
  )
};
