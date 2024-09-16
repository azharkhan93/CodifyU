import { HeroSection, HighlightSection, OurValues, ParallaxSection, ReviewsSection, TeamMembers, TechSolutions, TechStacks, WorkApproach } from "@/components";

import { Navbar } from "@/components/Navbar";
 import { Partners } from "@/components/Partners/Partners";


export default function Home() {
  return(
    <>
    
    <HeroSection />
    
    <OurValues />
    <HighlightSection />
    <TechSolutions />
    <TechStacks />
    <ReviewsSection /> 
    <WorkApproach /> 
     

    <Partners />

    <ParallaxSection />
    
    
    
    </>
  );
}
