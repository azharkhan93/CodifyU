"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFadeInLeft, useFadeInUp } from "@/hooks/useAnimations";
import { Row, Column, Text } from "@/components/styled";
import { servicesData } from "@/constants";
import { ServiceCards } from "../ServiceCards";

interface AiDataCardsProps {
  startIndex: number;
  endIndex: number;
  headingText: string;
  descriptionText: string;
}

export const AiDataCards: React.FC<AiDataCardsProps> = ({ startIndex, endIndex, headingText, descriptionText }) => {
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
              {headingText}
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
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

