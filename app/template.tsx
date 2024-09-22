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
  initial: { top: 0 },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.8,
      delay: 0.1 * i,
      ease: [0.5, 0.05, 0.1, 0.3],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.8,
      delay: 0.1 * i,
      ease: [0.5, 0.05, 0.1, 0.3],
    },
  }),
};

const MotionBox = motion(Box);

export default function Template({ children }: { children: React.ReactNode }) {
  const nbOfColumns = 6; 
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
    const timer = setTimeout(() => setShowLogo(false), 800);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <motion.div
      key={children ? children.toString() : "no-children"}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={opacity}
    >
      <MotionBox
        flexDirection="row"
        height="100%"
        width="100%"
        position="absolute"
        zIndex={50}
      >
        {[...Array(nbOfColumns)].map((_, i) => (
          <MotionBox
            key={i}
            position="relative"
            height="100%"
            width={`${100 / nbOfColumns}%`} 
            bg="primary"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={expand} 
            custom={nbOfColumns - i} 
          />
        ))}
      </MotionBox>
      {showLogo && (
        <motion.img
          src="/images/logo.svg" 
          alt="Logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        />
      )}
      {children}
    </motion.div>
  );
}




