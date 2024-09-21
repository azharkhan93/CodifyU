"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  useFadeInLeft,
  useFadeInRight,
  useScaleIn,
} from "@/hooks/useAnimations";
import { FaRocket } from "react-icons/fa";
import { Row, Column, CenterBox, Text, Box } from "@/components/styled";
import { AboutContents } from "../AboutContents";

export const OurMission = () => {
  const fadeInLeftProps = useFadeInLeft();

  return (
    <motion.div {...fadeInLeftProps}>
      <Row
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
            Mission And Vision
          </Text>
          <Text
            variant={"body"}
            lineHeight={"1.5"}
            textAlign={["start", "center"]}
          >
            Orient Software is a professional software development firm and a
            valuable partner to you by rapidly producing software solutions.
          </Text>
          <Text
            variant={"body"}
            lineHeight={"1.5"}
            textAlign={["start", "center"]}
          >
            We have three fundamental tenets - Innovation, Transparency, and
            Agility – central to our staff-client interactions.
          </Text>
        </Column>
      </Row>

      <CenterBox
        py={["xxxl", "header"]}
        flexDirection={["column", "row"]}
        width={"100%"}
        gap={["xxxl", "header"]}
      >
        <AboutContents
          title="Vision"
          description="To provide exceptional software services to the world. We attract and develop talent to become tech thought leaders by fostering a culture of collaboration, openness, and lifelong learning."
          imageSrc={"/images/bg.jpeg"}
        />
        <AboutContents
          title="Mission"
          description="To be an internationally recognized corporation that leverages technology to provide innovative solutions, brought by first-class experts."
          imageSrc={"/images/bg.jpeg"}
          reverse={true}
        />
      </CenterBox>
    </motion.div>
  );
};
