"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useFadeInLeft,
  useFadeInUp,
} from "@/hooks/useAnimations"; 
import { Row, Column, CenterBox, Text, } from "@/components/styled";
import { AboutContents } from "../AboutContents";

export const OurMission = () => {
  const fadeInLeftProps = useFadeInLeft();
  const fadeInUpProps = useFadeInUp(); 

  return (
    <>
    <motion.div {...fadeInLeftProps}>
      <Row
        width={"100%"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          py={"xl"}
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Text variant="heading" textAlign= "center" >
          Mission & Vision
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={"center"} width={["100%", "650px"]} >
          <span style={{ color: "#fb9c42", fontSize: "22px", fontFamily: "ComfortaaMedium" }}>codefyU</span>. is a specialized technology partner, focused on delivering rapid and scalable solutions that drive succes.
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={ "center"} width={["100%", "650px"]}>
          Our core principles—Innovation, Partnership, and Efficiency—shape our commitment to empowering your business with pioneering technology tailored to your needs.
          </Text>
        </Column>
      </Row>
    </motion.div>
    <motion.div {...fadeInUpProps}>
        <CenterBox
          py={["xxxl", "header"]}
          flexDirection={["column", "row"]}
          width={"100%"}
          gap={["xxxl", "header"]}
        >
          <AboutContents
            title="Vision Statement"
            description="Our vision is to redefine the startup journey by creating an ecosystem where innovation seamlessly meets execution. We aspire to be the global leader in providing AI-driven solutions, transforming challenges into opportunities for growth, and helping startups scale efficiently with unparalleled technical expertise."
            imageSrc={"/websiteimages/12.png"} />
          <AboutContents
            title="Mission Statement"
            description={
              <>
                At <span style={{ color: "#fb9c42", fontSize: "22px" }}>codefyU</span>, we are committed to enabling startups to achieve their fullest potential. 
                Through our expertise in AI, Machine Learning, and Generative AI, we deliver customized solutions that streamline operations, 
                accelerate growth, and ensure your success. Our mission is to turn your visionary ideas into reality by simplifying the complex 
                and guiding your business toward predictable success.
              </>
            }
            imageSrc={"/websiteimages/2.png"}
            reverse={true} />
        </CenterBox>
      </motion.div>
      </>
    
  );
};

