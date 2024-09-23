"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useFadeInLeft,
  useFadeInUp,
} from "@/hooks/useAnimations"; 
import { Row, Column,Text, } from "@/components/styled";
import { AiServices } from "@/components/AiServices";


export const AiDataCards = () => {
  const fadeInLeftProps = useFadeInLeft();
  const fadeInUpProps = useFadeInUp(); 

  return (
    <>
    <motion.div {...fadeInLeftProps}>
      <Row
      mt={"xlg"}
        width={"100%"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          py={"xl"}
          gap={"xxl"}
          justifyContent={["start", "center"]}
          alignItems={"flex-start"}
          width={["100%", "43%"]}
        >
          <Text variant="heading" textAlign={["start", "center"]}>
          AI and Machine Learning
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={["start", "center"]}>
            Orient Software is a professional software development firm and a valuable partner to you by rapidly producing software solutions.
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={["start", "center"]}>
            We have three fundamental tenets - Innovation, Transparency, and Agility – central to our staff-client interactions.
          </Text>
        </Column>
      </Row>
    </motion.div>
    <motion.div {...fadeInUpProps}>
      <AiServices />
        
        
      </motion.div>
      </>
    
  );
};
