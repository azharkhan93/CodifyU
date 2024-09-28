"use client";
import React from "react";
import Image from "next/image";
import { FaRocket } from "react-icons/fa";
import {Text, Box } from "@/components/styled";
import { ContentBoxProps } from "@/types";


export const AboutContents: React.FC<ContentBoxProps> = ({
  title,
  description,
  imageSrc,
  reverse,
}) => {
  return (
    <Box
      flexDirection={reverse ? "column-reverse" : "column"}
      bg={"white"}
      gap={"xxxl"}
      py={"header"}
      px={"xl"}
      width={["100%", "500px"]}
      borderRadius={"m"}
      style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Box
        py={"xl"}
        borderRadius={"circle"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"90px"}
        bg={"white"}
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      >
        <FaRocket size={45} color="#fb9c42" />
      </Box>
      <Text variant={"heading"}>{title}</Text>
      <Text variant={"body"} lineHeight={"1.5"}>
        {description}
      </Text>
      
      <Box
        width={["341px", "500px"]}  
        height={["210px", "300px"]} 
        position="relative"
        overflow="hidden" 
      >
        <Image 
          src={imageSrc} 
          alt="no image" 
          width={500} 
          height={300} 
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px", 
            objectFit: "cover", 
          }} 
        />
      </Box>
    </Box>
  );
};

