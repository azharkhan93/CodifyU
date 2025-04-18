"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, CenterBox, Column, Text } from "../styled";
import Link from "next/link";

const texts = ["AI/ML", "DevOps", "MLOps", "LLMs", "Data Analytics", "Predictive Modeling"];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(texts[index]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(texts[(index + 1) % texts.length]);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box
      position="relative"
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={"l"}
    >
      <Column
        py={"l"}
        gap={"xxxl"}
        width={"100%"}
        alignItems={"center"}
        zIndex={1}
      >
        <Column
          flexDirection="column"
         
          gap={"m"}
          width={["100%", "1000px"]}
          textAlign={ "center"}
        >
          <Text
            variant={["heading", "footerHeading"]}
            textAlign={"center"}
            lineHeight={"1.3"}
          >
            Growth Fueled By Expertise
          </Text>

          <motion.div
            key={showText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: "1.5em" }}
          >
            <Text variant={["heading", "footerHeading"]} color="textColor">
              {showText}
            </Text>
          </motion.div>
        </Column>

        <Text
          variant="body"
          width={["100%", "600px"]}
          textAlign={ "center"}
          lineHeight={"1.5"}
        >
          At{" "}
          <span
            style={{
              color: "#fb9c42",
              fontSize: "22px",
              fontFamily: "ComfortaaMedium",
            }}
          >
            codefyU{" "}
          </span>
          We craft tailored tech solutions to solve complex challenges with
          precision. Our innovative, scalable strategies drive business growth,
          empowering companies to thrive in todays fast-paced digital world
        </Text>

        <CenterBox flexDirection={"row"} gap={["xxxl", "xxxl"]}>
          <Link href="/portfolio" passHref style={{ textDecoration: "none" }}>
            <Button
              variant={"primary"}
              py={"m"}
              borderTopRightRadius={"m"}
              borderBottomLeftRadius={"m"}
              px={["xxxl", "xxxxl"]}
              bg={"primary"}
            >
              View Work
            </Button>
          </Link>

          <Link href="/contact" passHref style={{ textDecoration: "none" }}>
            <Button
              variant={"primary"}
              py={"m"}
              borderTopRightRadius={"m"}
              borderBottomLeftRadius={"m"}
              px={["xxxl", "xxxxl"]}
              bg={"primary"}
            >
              {`Let's Talk`}
            </Button>
          </Link>
        </CenterBox>
      </Column>
    </Box>
  );
};
