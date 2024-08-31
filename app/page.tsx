import { HeroSection, HighlightSection, OurValues, ReviewsSection, TeamMembers } from "@/components";

import { Navbar } from "@/components/Navbar";
 import { Partners } from "@/components/Partners/Partners";


export default function Home() {
  return(
    <>
    
    <HeroSection />
    <OurValues />
    <HighlightSection />
    <ReviewsSection />
    <TeamMembers />
    <Partners />
    
    
    </>
  );
}
