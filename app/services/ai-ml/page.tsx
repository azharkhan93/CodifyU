import { ArtificialIntelligence, Column, ParallaxSection } from "@/components";
import { aiAdvantages } from "@/constants";

export default function Services() {
  return (
    <>
      <Column
       px={["xl", "l"]}
      >
        <ArtificialIntelligence
          aiCardsProps={{
            startIndex: 0,
            endIndex: 4,
            headingText: "Accelerate Your Business with AI",
            descriptionText:
              "Unlock the full potential of AI technology to transform your business. Let codefyU Software help you gain a competitive edge, boost efficiency, and stay ahead in the ever-evolving digital landscape.",
          }}
          aiAdvantages={aiAdvantages}
          imageSrc="/images/tech6.png"
          advantagesHeading="Advantages Of AI in Business"
          advantagesDescription="AI is revolutionizing business by automating tasks, improving accuracy, and providing insights that can lead to better decision-making."
        />
        <ParallaxSection
          heading="Any Queries Reach Out To Us"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      </Column>
    </>
  );
}
