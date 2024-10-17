import React from "react";
import Image from "next/image";
import { Box } from "@/components/styled";
import { LogoProps } from "@/types";
export const Logos: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <Box
      width={["220px", "500px"]}
      alignItems={"center"}
      justifyContent={"center"}
      height={["150px", "300px"]}
    >
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        style={{ borderRadius: "10px", mixBlendMode: "multiply" }}
      />
    </Box>
  );
};

