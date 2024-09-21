"use client";
import {
  CenterBox,
  Column,
  Text,
} from "../styled";
import { AboutCards } from "./components/AboutCards";
import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

export const AboutUs = () => {
  const baseX = useRef(useMotionValue(0));
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 4]);

  const headingX = useTransform(baseX.current, (v) => `${v}%`);
  const paragraphX = useTransform(baseX.current, (v) => `${-v}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 3000);
    directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.current.set(baseX.current.get() + moveBy);
  });

  useEffect(() => {
    const unsubscribe = baseX.current.onChange((latest) => {
      if (latest < -10 || latest > 10) {
        baseX.current.set(0); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <>
      <CenterBox py={["xxxxl", "xxxl"]} width={"100%"} mt={"xlg"}>
        <Column gap={"xl"} alignItems={"center"} width={["100%", "900px"]} px={["s", "xl"]}>
          <motion.div
            style={{ x: headingX }}
            animate={{ rotate: [0, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Text
              textAlign={["start", "center"]}
              variant={["heading", "footerHeading"]}
            >
              {`We Don’t Just Deliver Solutions! We Tailor Them To Your Vision. Your Success Is Our Mission`}
            </Text>
          </motion.div>
          <motion.div
            style={{ x: paragraphX }}
            animate={{ rotate: [0, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Text textAlign={["start", "center"]} variant={"body"}>
              In The Fast-Paced World Of Startups, Complexity Is The Enemy Of
              Execution. At <span style={{ color: "orange", fontSize: "22px" }}>CodefyU</span>, We Streamline Your Path To Success, Making
              Startup Growth Not Just Possible But Predictable.
            </Text>
          </motion.div>
        </Column>
      </CenterBox>
      <AboutCards />
    </>
  );
};


