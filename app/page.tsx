import { HeroSection, HighlightSection, OurValues, ParallaxSection, ReviewsSection, TeamMembers, TechStacks } from "@/components";

import { Navbar } from "@/components/Navbar";
 import { Partners } from "@/components/Partners/Partners";


export default function Home() {
  return(
    <>
    
    <HeroSection />
    <Partners />
    <OurValues />
    <HighlightSection />
    <TechStacks />
    <ReviewsSection />
    <TeamMembers />

    <ParallaxSection />
    
    
    
    </>
  );
}
