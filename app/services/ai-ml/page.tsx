import {
  ArtificialIntelligence,
  Column,
  ParallaxSection,
} from "@/components";
import { services } from "@/constants";

export default function Services() {
  return (
    <>
      <Column px={["m", "l"]}>
        <ArtificialIntelligence />
        <ParallaxSection
          heading="Any Queries React Out To Us"
          body="React out to us we got your project got covered."
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      </Column>
    </>
  );
}
