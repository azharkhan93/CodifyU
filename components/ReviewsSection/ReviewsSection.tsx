"use client";
import React, { useEffect, useState } from "react";
import { Column, CenterBox, Text } from "../styled";
import Image from "next/image";
import { motion } from "framer-motion";

const slideVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"}>
      <Column gap={["xl", "m"]}>
        <Text variant="heading">What Our Clients Say</Text>
        <Text
          variant={"body"}
          width="100%"
          lineHeight={"1.5"}
          textAlign={["start", "center"]}
        >
          {`Discover how our services have positively impacted our clients'
          experiences. Read their testimonials below to learn more.`}
        </Text>
      </Column>

      <CenterBox
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
        gap={"xxxxl"}
        bg={"white"}
        borderRadius={"m"}
      >
        {[
          "/testimonialHome/1.png",
          "/testimonialHome/2.png",
          "/testimonialHome/3.png",
        ].map((src, index) => {
          const isVisible = index === currentIndex || index === prevIndex;

          return (
            <motion.div
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={slideVariants}
              style={{
                position: "relative",
                width: "400px",
                height: 360,
                opacity: index === currentIndex ? 1 : 0,
              }}
            >
              <Image
                src={src}
                alt={`Review ${index + 1}`}
                width={400}
                height={360}
                style={{
                  mixBlendMode: "multiply",
                  borderRadius: "20px",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          );
        })}
      </CenterBox>
    </Column>
  );
};

