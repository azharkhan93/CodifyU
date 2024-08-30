import React from "react";
import Image from "next/image";
import { Box } from "@/components/styled";
import { LogoProps } from "@/types";

export const Logos: React.FC<LogoProps> = ({ src, alt, size }) => {
  return (
    <Box width={["100%", "auto"]}>
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
