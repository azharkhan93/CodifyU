"use client";

import { motion, AnimatePresence } from "framer-motion";

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
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

export default function Template({ children }: { children: React.ReactNode }) {
  const nbOfColumns = 6;

  return (
      <motion.div
        key={children ? children.toString() : "no-children"} 
        initial="initial"
        animate="enter"
        exit="exit"
        variants={opacity}
      >
        <div className='transition-container'>
          {[...Array(nbOfColumns)].map((_, i) => (
            <motion.div
              key={i}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={expand}
              custom={nbOfColumns - i}
            />
          ))}
        </div>
        {children}
      </motion.div>
  );
}


