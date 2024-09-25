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
import { FaCircle } from "react-icons/fa";


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

          
          {/* <Text variant={"body"} lineHeight={"1.5"} textAlign={["start", "center"]}>
          Our Software provides a variety of AI solutions. We can help you incorporate AI into your existing products, start from the ground up with a new product, or integrate AI into your business processes.
          </Text> */}
        </Column>
        <Row
        py={"xxxl"}
        flexDirection={"row"}
        width={"100%"}
        alignItems={"center"}
        gap={"xxxl"}
        style={{
          backgroundImage: 'url("/images/img4.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
        
        

        >
          <Column
         
           width={"700px"}
          borderRadius={"m"}
          py={"xxxl"}
           bg={"textColor"}
          px={"xxxl"}
          gap={"xl"}
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", 
          }}
          
          >
          <Text
          variant={"heading"}
          >
            AI Strategy

          </Text>
          <Text
          variant={"body"}
          >
            Today AI should be part of a businesss digital transformation strategy. If you are looking to add AI capabilities to your business but dont know where to start, we can help. codefyU Software will work with you to develop a tailored AI strategy and implementation plan that meets your specific needs and goals.

          </Text>
          <Column
          gap={"xl"}
          >
          <Text
          variant={"heading"}
          >
            Your benefits:

          </Text>
          <Row
          alignItems={"center"}
          gap={"m"}
          flexDirection={"row"}
          >
          <FaCircle style={{ marginRight: "8px" }} />

            <Text
            variant={"subHeading"}
            >
              Gain a competitive advantage.
            </Text>
          </Row>
          <Row
          alignItems={"center"}
          gap={"m"}
          flexDirection={"row"}
          >
          <FaCircle style={{ marginRight: "8px" }} />

            <Text
            variant={"subHeading"}
            >
              Stay ahead of the curve in todays rapidly changing digital landscape
            </Text>
          </Row>
          
          <Row
          alignItems={"center"}
          gap={"m"}
          flexDirection={"row"}
          >
          <FaCircle  />

            <Text
            variant={"subHeading"}
            >
              Incorporate AI into your products and processes for increased efficiency and effectiveness.
            </Text>
          </Row>
          </Column>
          
          
          </Column>
          <Column
          mt={"xxxlg"}
        width={"700px"}
          borderRadius={"m"}
          py={"xxxl"}
          bg={"secondary"}
          >
          <Text
          variant={"heading"}
          >
           AI Development & Integration

          </Text>
          <Text
          variant={"body"}
          >
            We can develop custom AI applications for your business. Our team has extensive experience with AI software development and technologies, including machine learning, natural language processing, and computer vision. We can also help you integrate AI into your existing systems and processes

          </Text>
          <Text
          variant={"heading"}
          >
            What you get:

          </Text>
          <Row>
          <FaCircle style={{ marginRight: "8px" }} />

            <Text
            variant={"subHeading"}
            >
            Custom AI applications that meet your specific needs.
            </Text>
          </Row>
          <Row>
          <FaCircle style={{ marginRight: "8px" }} />

            <Text
            variant={"subHeading"}
            >
              Integration of AI into your existing systems and processes.
            </Text>
          </Row>
          
          <Row>
          <FaCircle style={{ marginRight: "8px" }} />

            <Text
            variant={"subHeading"}
            >
              Support for all aspects of the development process, from design to deployment
            </Text>
          </Row>
          
          
          </Column>
          

        </Row>
      </Row>
    </motion.div>
    <motion.div {...fadeInUpProps}>
      <AiServices />
        
        
      </motion.div>
      </>
    
  );
};
