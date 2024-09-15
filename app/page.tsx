import { HeroSection, HighlightSection, OurValues, ParallaxSection, ReviewsSection, TeamMembers, TechStacks, WorkApproach } from "@/components";

import { Navbar } from "@/components/Navbar";
 import { Partners } from "@/components/Partners/Partners";


export default function Home() {
  return(
    <>
    
    <HeroSection />
    
    <OurValues />
    <HighlightSection />
    <TechStacks />
    <WorkApproach /> 
    {/* <ReviewsSection /> */}
    {/* <TeamMembers /> */}

    <Partners />

    <ParallaxSection />
    
    
    
    </>
  );
}
