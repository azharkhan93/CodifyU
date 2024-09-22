"use client";
import { Box } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

const expand = {
  initial: { top: 0, opacity: 0 },
  enter: (i: number) => {
    const isRightSide = i >= 3;
    return {
      top: isRightSide ? "100vh" : "0",
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.2 * i,
        ease: [0.5, 0.05, 0.1, 0.3],
      },
      transitionEnd: { height: "0", top: "0", opacity: 0 },
    };
  },
  exit: (i: number) => {
    const isRightSide = i >= 3;
    return {
      height: "100vh",
      top: isRightSide ? "0" : "100vh",
      opacity: 0,
      transition: {
        duration: 1.2,
        delay: 0.2 * i,
        ease: [0.5, 0.05, 0.1, 0.3],
      },
    };
  },
};

const MotionBox = motion.create(Box);

export default function Template({ children }: { children: React.ReactNode }) {
  const nbOfColumns = 6;
  const [showLogo, setShowLogo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setShowLogo(true);
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowOverlay(false); // Hide overlay after animations
    }, 2000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <MotionBox
      key={children ? children.toString() : "no-children"}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={opacity}
      position="relative"
      height="100vh"
      width="100%"
    >
      {showOverlay && (
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          height="100vh"
          width="100%" 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
           zIndex={10} 
          style={{background: "rgba(0, 0, 0, 1)",}}
        />
      )}
      <MotionBox
        flexDirection="row"
        height="100%"
        width="100%"
        position="absolute"
        zIndex={10} 
      >
        {[...Array(nbOfColumns)].map((_, i) => (
          <MotionBox
            key={i}
            position="relative"
            height="100%"
            width={`${100 / nbOfColumns}%`}
            bg={i < 3 ? "textColor" : "textColor"}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={expand}
            custom={i}
            zIndex={102} 
          />
        ))}
      </MotionBox>
      {showLogo ? (
        <MotionBox
          position="absolute"
          top="40%"
          left="60%"
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={200} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Image src="/images/logo.svg" alt="Logo" width={200} height={200} style={{overflow: "hidden"}} />
        </MotionBox>
      ): null}
      {children}
    </MotionBox>
  );
}

