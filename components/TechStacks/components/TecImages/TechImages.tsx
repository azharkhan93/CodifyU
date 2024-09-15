import Image from "next/image";
import React from "react";

type TechImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const TechImages: React.FC<TechImageProps> = ({ src, alt = "Image not found", width = 70, height = 70 }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};


