"use client";
import React from "react";
import { motion } from "framer-motion";
import { Row, Column, CenterBox, Text, Box } from "@/components/styled";
import { useFadeInLeft } from "@/hooks/useAnimations";
import { workSpaceData } from "@/constants";
import { WorkSpaceSection } from "@/types";

export const OurWorkSpaceSection = () => {
  const fadeInLeftProps = useFadeInLeft();

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
              Company Culture And Values
            </Text>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={["start", "center"]}
            >
              At <span style={{ color: "#fb9c42", fontSize: "22px" }}>codefyU</span>, we know that our success is built on the strength and
              well-being of our people. Our values guide how we create an
              inclusive, innovative, and supportive environment for every team
              member to thrive.
            </Text>
          </Column>
        </Row>

        <CenterBox
          py={["xxxl", "header"]}
          flexDirection={["column", "row"]}
          width={"100%"}
          gap={["xxxl", "xxxxl"]}
        >
          {workSpaceData.map((item: WorkSpaceSection, index: number) => (
            <Column
              key={index}
              borderRadius={"m"}
              px={"l"}
              gap={"xl"}
              py={"xl"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              width={["350px", "400px"]}
              style={{
                background: "linear-gradient(147deg, #4d4855 0%, #b1b1b1 100%)",
              }}
            >
              
              <Box
                borderRadius={"circle"}
                bg={"white"}
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundImage: `url(${item.workImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "80px",
                  height: "80px",
                }}
              />

              <Text
                p={"s"}
                borderLeft={"3px solid #fb9c42"}
                variant={"heading"}
              >
                {item.heading}
              </Text>
              <Text variant={"body"}>{item.description}</Text>
            </Column>
          ))}
        </CenterBox>
      </motion.div>
    </>
  );
};






