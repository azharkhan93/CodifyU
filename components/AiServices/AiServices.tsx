"use client";
import { useState, useEffect, ReactNode } from "react";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import { FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const flipVariants = {
  initial: { rotateY: 0, opacity: 1 },
  flipped: { rotateY: 180, opacity: 0.4, transition: { duration: 0.8, ease: "easeInOut" } },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

interface AnimatedTextProps {
  isActive: boolean;
  children: ReactNode;
}

const AnimatedText = ({ isActive, children }: AnimatedTextProps) => {
  return (
    <motion.div
      initial="initial"
      animate={isActive ? "visible" : "flipped"}
      variants={flipVariants}
      style={{
        backfaceVisibility: "hidden",
        color: isActive ? "green" : "black",
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedIcon = () => {
  return (
    <motion.div
      initial={{ rotateY: 0, opacity: 0 }}
      animate={{ rotateY: 360, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ backfaceVisibility: "hidden" }}
    >
      <FaRobot size={35} color="green" />
    </motion.div>
  );
};

export const AiServices = () => {
  const [showFirstRow, setShowFirstRow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstRow((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CenterBox
      justifyContent={"space-between"}
      py={"header"}
      flexDirection={"row"}
    >
      <Column
        py={"header"}
        border={"4px solid red"}
        width={"500px"}
        px={"xxxl"}
        gap={"xxxxl"}
      >
        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <AnimatedText isActive={showFirstRow}>
            <Text
              p={"s"}
              borderTop={"1px solid green"}
              borderBottom={"1px solid green"}
              variant={"heading"}
            >
              Generative AI 1
            </Text>
          </AnimatedText>
          <AnimatedIcon />
        </Row>

        <AnimatedText isActive={!showFirstRow}>
          <Text variant={"heading"}>Generative AI 2</Text>
        </AnimatedText>

        <Text variant={"heading"} style={{ color: "black" }}>
          Generative AI
        </Text>
      </Column>

      <Row
        border={"4px solid red"}
        position="relative"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection={"row"}
      >
        <Box
          py={"xxxl"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          ml={"xxxlg"}
        >
          <Image
            src={showFirstRow ? "/images/statsimg.jpg" : "/images/statsimg.jpg"}
            alt="Generative AI Image"
            width={800}
            height={290}
          />
        </Box>

        <Column
          gap={"xxxl"}
          border={"4px solid green"}
          alignItems={"flex-start"}
          height={"370px"}
          bg="textColor"
          width="510px"
          position={"absolute"}
          top="0px"
          left="0%"
          zIndex={2}
          py={"xxxl"}
          as={motion.div}
          initial={{ rotateY: 0 }}
          animate={showFirstRow ? { rotateY: 0 } : { rotateY: 180 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          <Text variant="heading" textAlign="center">
            {showFirstRow ? "Generative AI 1" : "Generative AI 2"}
          </Text>
          <Text variant="body" textAlign="start">
            {showFirstRow
              ? "Our Software provides a variety of AI solutions. We can help you incorporate AI into your existing products, start from the ground up with a new product, or integrate AI into your business processes"
              : "This is the second description for Generative AI 2. It provides additional insights and information about the updated features."}
          </Text>
          <Button variant="primary" mt="l">
            Talk To Us
          </Button>
        </Column>
      </Row>
    </CenterBox>
  );
};



