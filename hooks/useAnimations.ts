import { Variants } from "framer-motion";
const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

export const useFadeInUp = () => {
  return {
    initial: "hidden",
    whileInView: "visible",
    variants: fadeInUpVariants,
    viewport: { once: false, amount: 0.2 },
  };
};

export const useFadeInLeft = () => {
  return {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2, ease: "easeOut", delay: 0.1 },
    viewport: { once: false },
  };
};

export const useFadeInRight = () => {
  return {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 2, ease: "easeOut", delay: 0.5 },
    viewport: { once: false },
  };
};

export const useScaleIn = () => {
  return {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2, ease: "easeOut", delay: 0.1 },
    viewport: { once: false },
  };
};

export const useLogos = () => {
  return {
    animate: {
      x: ["0%", "-45%"], 
    },
    transition: {
      repeat: Infinity,   
      ease: "linear",     
      duration: 40,       
    },
  };
};



// export const expand = {
//   initial: { height: 0 },
//   animate: (i: number) => ({
//     height: "100vh",
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
//   exit: (i) => ({
//     height: 0,
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// export const opacity = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };
