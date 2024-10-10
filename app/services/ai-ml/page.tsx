import {
  ArtificialIntelligence,
  Column,
  ParallaxSection,
} from "@/components";
import { aiAdvantagesDataSet1, services } from "@/constants";

export default function Services() {
  return (
    <>
      <Column px={["m", "l"]}>
      <ArtificialIntelligence
      aiCardsProps={{
        startIndex: 0,
        endIndex: 4,
        headingText: "Accelerate Your Business with AI",
        descriptionText:
          "Unlock the full potential of AI technology to transform your business. Let codefyu Software help you gain a competitive edge, boost efficiency, and stay ahead in the ever-evolving digital landscape.",
      }}
      aiAdvantages={aiAdvantagesDataSet1}
      imageSrc="/images/tech1.png"
      advantagesHeading="Advantages Of AI in Business"
      advantagesDescription="AI is revolutionizing business by automating tasks, improving accuracy, and providing insights that can lead to better decision-making."
    />
        <ParallaxSection
          heading="Any Queries React Out To Us"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      </Column>
    </>
  );
}
