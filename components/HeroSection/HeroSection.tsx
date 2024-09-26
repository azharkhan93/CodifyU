"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, CenterBox, Column, Text } from "../styled";

const texts = ["Tech Solutions", "That Scale"];

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
        <CenterBox
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap={"m"}
          width={["100%", "900px"]}
          textAlign={["start", "center"]}
        >
          <Text
            variant={["heading", "footerHeading"]}
            textAlign={["start", "center"]}
          >
            Startup Accelerator Seamless
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
        </CenterBox>

        <Text
          variant="body"
          width={["100%", "600px"]}
          textAlign={["start", "center"]}
          lineHeight={"1.5"}
        >
          codefyU delivers advanced customized tech solutions worldwide. We
          solve complex challenges with precision, offering efficient, scalable
          results that drive business growth. By merging innovation with
          impactful strategies, we help businesses thrive in todays dynamic
          digital landscape.
        </Text>

        <CenterBox flexDirection={"row"} gap={["xxxl", "xxxl"]}>
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
        </CenterBox>
      </Column>
    </Box>
  );
};
