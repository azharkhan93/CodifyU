import {
  Column,
  HighlightSection,
  ParallaxSection,
  WorkApproach,
} from "@/components";
import { services } from "@/constants";

export default function Services() {
  return (
    <>
     
        <HighlightSection cardLimit={services.length} showButton={false} />
        <WorkApproach />
        <ParallaxSection
          spanText="Any Queries"
          heading="Reach Out To Us?"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      
    </>
  );
}
