"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFadeInLeft, useFadeInUp } from "@/hooks/useAnimations";
import { Row, Column, Text } from "@/components/styled";
import { servicesData } from "@/constants";
import { ServiceCards } from "../ServiceCards";
import { AiDataCardsProps } from "@/types";

export const AiDataCards: React.FC<AiDataCardsProps> = ({
  startIndex,
  endIndex,
  headingText,
  descriptionText,
}) => {
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
            alignItems={"center"}
            width={"100%"}
          >
            <Text
              variant="heading"
              textAlign="center"
              width={["100%", "900px"]}
              lineHeight={"1.3"}
              
            >
              {headingText}
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign= {"center"}
              width={["100%", "650px"]}
            >
              {descriptionText}
            </Text>
          </Column>
          <Row
            py={"xxxl"}
            flexDirection={["column", "row"]}
            width={"100%"}
            alignItems={"center"}
            gap={"xxxl"}
          ></Row>
        </Row>
      </motion.div>
      <motion.div {...fadeInUpProps}>
        <Row
          justifyContent={"center"}
          py={"xl"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={"xxxl"}
        >
          {servicesData.slice(startIndex, endIndex).map((service) => (
            <ServiceCards key={service.id} service={service} />
          ))}
        </Row>
      </motion.div>
    </>
  );
};
