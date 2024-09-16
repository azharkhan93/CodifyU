"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box, Column, Row, Text } from "../styled";
import { StatsCards } from "./components/StatsCards";
import { STATS_DATA, VALUES_DATA } from "@/constants";
import { ValueCards } from "./components/ValueCards";

export const OurValues = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false }}
      >
        <Row
          width={"100%"}
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
        >
          <Column
            py={"xl"}
            gap={"xxl"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            width={["100%", "43%"]}
          >
            <Text
              variant={["heading", "footerHeading"]}
              textAlign={["start", "center"]}
            >
              Why{" "}
              <span style={{ color: "orange", fontSize: "42px" }}>CodefyU</span>
              ?
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
            >
              We have successfully delivered over 200 projects over the last 8
              years, collectively generating a value of{" "}
              <span style={{ color: "orange", fontSize: "20px" }}>
                $200 million
              </span>
              . High-Quality tech solutions without high costs.{" "}
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
            >
              Our startup accelerator program is your launchpad to success.
              Fast-Track your market entry and expansion with our proven
              strategies.
            </Text>
          </Column>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false }}
          >
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

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false }}
      >
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
            />
          ))}
        </Box>
      </motion.div>
    </>
  );
};
