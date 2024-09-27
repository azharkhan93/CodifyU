"use client";
import Image from "next/image";
import { AnimateCircle, Box, Column, Row, Text } from "@/components";
import { CRD_ST } from "@/constants";
import { TechCards } from "./components/TechCards";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const TechSolutions = () => {
  const images = ["/images/img4.jpg", "/images/img4.jpg", "/images/img4.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Row
      flexDirection={["column", "row"]}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Column gap="xxxl" py="xl" alignItems={"flex-start"} justifyContent={"center"} width={["100%","800px"]}>
        <Text variant="heading">
        Unlock the power of AI/ML and data-driven solutions with CodefyU
          
        </Text>
        <Text variant={"subHeading"} lineHeight={"1.5"}>
          Streamline your business needs and automate your infrastructure with
          codefyU.
        </Text>

        <Column gap="xxxl" >
          {CRD_ST.map((feature, index) => (
            <TechCards key={index} ItemsTitle={feature.ItemsTitle} />
          ))}
        </Column>
      </Column>

      <Box
        alignItems="center"
        px="m"
        py="xlg"
        position="relative"
        width={["98%", "890px"]}
        height={["250px", "400px"]}
      >
        <AnimateCircle />

        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "5%",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src={images[currentImageIndex]}
            alt="Dynamic image"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </motion.div>
      </Box>
    </Row>
  );
};
