"use client";
import { motion } from "framer-motion";
import {
  HeroSection,
  HighlightSection,
  OurValues,
  ParallaxSection,
  ReviewsSection,
  TechSolutions,
  TechStacks,
  WorkApproach,
} from "@/components";
import { Partners } from "@/components/Partners/Partners";
import { useFadeInUp } from "@/hooks/useAnimations";

export default function Home() {
  const fadeInUpProps = useFadeInUp();
  return (
    <>
      <HeroSection />
      <OurValues />

      <motion.div {...fadeInUpProps}>
        <HighlightSection />
      </motion.div>

      <motion.div {...fadeInUpProps}>
        <TechSolutions />
      </motion.div>

      <motion.div {...fadeInUpProps}>
        <TechStacks />
      </motion.div>

      <motion.div {...fadeInUpProps}>
        <ReviewsSection />
      </motion.div>

      <motion.div {...fadeInUpProps}>
        <WorkApproach />
      </motion.div>

      <Partners />

      <motion.div {...fadeInUpProps}>
        <ParallaxSection />
      </motion.div>
    </>
  );
}
