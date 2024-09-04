import React from "react";
import Image from "next/image";
import { Box } from "@/components/styled";
import { LogoProps } from "@/types";

export const Logos: React.FC<LogoProps> = ({ src, alt, size }) => {
  return (
    <Box width={["220px", "220px"]}
    // border={"1px solid red"}
    alignItems={"center"}
    justifyContent={"center"}
    height={["140px","130px"]}
    
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ borderRadius: "10px" }}
      />
    </Box>
  );
};
