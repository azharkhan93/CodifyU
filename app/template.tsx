"use client";
import { Box } from "@/components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const expand = {
  initial: { top: 0, opacity: 0 },
  enter: (i: number) => {
    const isRightSide = i >= 3;
    return {
      top: isRightSide ? "100vh" : "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2 * i,
        ease: [0.5, 0.05, 0.1, 0.3],
      },
    };
  },
  exit: (i: number) => {
    const isRightSide = i >= 3;
    return {
      height: "100vh",
      top: isRightSide ? "0" : "100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * i,
        ease: [0.5, 0.05, 0.1, 0.3],
      },
    };
  },
};

const MotionBox = motion.create(Box);

export default function Template({ children }: { children: React.ReactNode }) {
  const nbOfColumns = 6;
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1200);
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
      height="100%"
      width="100%"
      style={{ overflow: "hidden" }}
    >
      {showOverlay ? (
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          zIndex={100}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
          style={{ background: "rgba(0, 0, 0, 1)" }}
          onAnimationComplete={() => setShowOverlay(false)}
        />
      ) : null}

      {showOverlay ? (
        <MotionBox
          flexDirection="row"
          height="100%"
          width="100%"
          position="absolute"
          zIndex={101}
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
            />
          ))}
        </MotionBox>
      ) : null}

      <Box zIndex={30} position="relative">
        {children}
      </Box>
    </MotionBox>
  );
}
