"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Column, Row, Text } from "../styled";
import { StatsCards } from "./components/StatsCards";
import { STATS_DATA, VALUES_DATA } from "@/constants";
import { ValueCards } from "./components/ValueCards";
import {
  useFadeInLeft,
  useFadeInRight,
  useScaleIn,
} from "@/hooks/useAnimations";

export const OurValues = () => {
  const fadeInLeftProps = useFadeInLeft();
  const fadeInRightProps = useFadeInRight();
  const scaleInProps = useScaleIn();

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
            justifyContent={["start", "center"]}
            alignItems={"flex-start"}
            width={["100%", "43%"]}
          >
            <Text variant="heading" textAlign={["start", "center"]}>
              Why <span style={{ color: "#fb9c42", fontSize: "30px", fontFamily: "ComfortaaMedium" }}>codefyU</span>?
              
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
            >
              We have successfully delivered over 200 projects over the last 8
              years, collectively generating a value of{" "}
        
              $200 million
              {/* </span> */}. High-Quality tech solutions without high costs.{" "}
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
            >
              Our Startup Accelerator program is your launchpad to success.
              Fast-Track your market entry and expansion with our proven
              strategies.
            </Text>
          </Column>

          <motion.div {...fadeInRightProps}>
            <Column
              alignItems={"center"}
              justifyContent={"center"}
              py={"xl"}
              width={["98%", "700px"]}
            >
              <Row
                alignItems="center"
                justifyContent={"center"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={"xxxl"}
                py={"xl"}
              >
                {VALUES_DATA.map((value) => (
                  <ValueCards
                    key={value.id}
                    title={value.title}
                    title2={value.title2}
                    icon={value.icon}
                  />
                ))}
              </Row>
            </Column>
          </motion.div>
        </Row>
      </motion.div>

      <motion.div {...scaleInProps}>
        <Box
          width={["100%", "100%"]}
          flexDirection={["column", "row"]}
          gap={["xxxxl", "xlg"]}
          py={"xxxl"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {STATS_DATA.map((stat) => (
            <StatsCards
              key={stat.id}
              heading={stat.heading}
              subHeading={stat.subHeading}
              statsImg={stat.image}
            />
          ))}
        </Box>
      </motion.div>
    </>
  );
};
