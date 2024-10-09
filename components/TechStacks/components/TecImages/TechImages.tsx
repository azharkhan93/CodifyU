import { TechImageProps } from "@/types";
import Image from "next/image";
import React from "react";

export const TechImages: React.FC<TechImageProps> = ({
  src,
  alt = "Image not found",
  width = 200,
  height = 100,
  priority = false
}) => {
  return <Image src={src} alt={alt} width={width} height={height}  priority={priority} />;
};
