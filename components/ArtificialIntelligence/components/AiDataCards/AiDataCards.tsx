"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useFadeInLeft,
  useFadeInUp,
} from "@/hooks/useAnimations"; 
import { Row, Column,Text, } from "@/components/styled";
import {servicesData } from "@/constants";
import { ServiceCards } from "../ServiceCards";


export const AiDataCards = () => {
  const fadeInLeftProps = useFadeInLeft();
  const fadeInUpProps = useFadeInUp(); 

  return (
    <>
    <motion.div {...fadeInLeftProps}>
      <Row
      mt={"xlg"}
        width={"100%"}
        flexDirection={["column", "column"]}
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
          Accelerate Your Business with AI
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={["start", "center"]}>
          Unlock the full potential of AI technology to transform your business. Let codefyu Software help you gain a competitive edge, boost efficiency, and stay ahead in the ever-evolving digital landscape.
          </Text>

        </Column>
        <Row
        py={"xxxl"}
        flexDirection={["column","row"]}
        width={"100%"}
        alignItems={"center"}
        gap={"xxxl"}
        // style={{
        //   backgroundImage: 'url("/images/img4.jpg")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
          
        // }}
        
        >
          {/* { AiBenefitsCardData.map((card, index) => (
      <AiBenefitsCards
              key={index}
              heading={card.heading}
              body={card.body}
              benefitsTitle={card.benefitsTitle}
              benefits={card.benefits} imageUrl={card.imageUrl}     
              />
    ))} */}
          

        </Row>
      </Row>
    </motion.div>
    <motion.div {...fadeInUpProps}>
    <Row justifyContent={"center"} py={"xl"} flexDirection={"row"} flexWrap={"wrap"} gap={"xxxl"}>
      {servicesData.map((service) => (
        <ServiceCards key={service.id} service={service} />
      ))}
    </Row>
        
        
      </motion.div>
      </>
    
  );
};
