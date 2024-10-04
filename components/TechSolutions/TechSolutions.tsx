"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { AnimateCircle, Box, Column, Row, Text } from "@/components";
import { CRD_ST } from "@/constants";
import { TechCards } from "./components/TechCards";
import { useEffect } from "react"; 

export const TechSolutions = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateX: [0, 10, 0],
      rotateZ: [0, -10, 0],
      scale: [1, 1.02, 1],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  return (
    <Row
      flexDirection={["column", "row"]}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"xxxl"}
    >
      <Column
        gap="xxxl"
        py="xl"
        alignItems={"flex-start"}
        justifyContent={"center"}
        width={["100%", "630px"]}
      >
        <Text variant="heading">
          Unlock the power of AI/ML and data-driven solutions with CodefyU
        </Text>
        <Text variant={"subHeading"} lineHeight={"1.5"}>
          Streamline your business needs and automate your infrastructure with CodefyU.
        </Text>

        <Column gap="xxxl">
          {CRD_ST.map((feature, index) => (
            <TechCards key={index} ItemsTitle={feature.ItemsTitle} />
          ))}
        </Column>
      </Column>

      <Box
        px={["none", "xxxl"]}
        ml={["none", "header"]}
        py={"xxxl"}
        alignItems={["center", "flex-end"]}
        justifyContent={"center"}
        position="relative"
        width={["100%", "890px"]}
        height={["600px", "590px"]}
        flex={["column", "row"]}
      >
        <AnimateCircle />

        <motion.div animate={controls} style={{ position: 'relative' }}>
          <Box
            width={["364px", "500px"]}
            height={["280px", "400px"]}
            overflow="hidden"
          >
            <Image
              src="/images/img4.jpg"
              alt="Static image"
              width={500}
              height={300}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
        </motion.div>

        <Box position="absolute" left={["5px", "120px"]} bottom={[5, 200]} top={[100, 350]}>
          <motion.div animate={controls}>
            <Box
              width={["200px", "250px"]}
              height={["110px", "180px"]}
              position="relative"
            >
              <Image
                src="/websiteimages/42.png"
                alt="Smaller image 1"
                width={250}
                height={150}
                style={{  borderRadius: "10px" }}
              />
            </Box>
          </motion.div>
        </Box>

        <Box position="absolute" top={[450, 340]} left={[8, 500]} bottom="0">
          <motion.div animate={controls}>
            <Box
              width={["150px", "250px"]}
              height={["100px", "180px"]}
              position="relative"
            >
              <Image
                src="/websiteimages/3c.png"
                alt="Smaller image 2"
                width={250}
                height={170}
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Row>
  );
};




