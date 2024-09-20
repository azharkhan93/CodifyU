import { TechImageProps } from "@/types";
import Image from "next/image";
import React from "react";

export const TechImages: React.FC<TechImageProps> = ({
  src,
  alt = "Image not found",
  width = 70,
  height = 70,
  priority = false
}) => {
  return <Image src={src} alt={alt} width={width} height={height}  priority={priority} />;
};
