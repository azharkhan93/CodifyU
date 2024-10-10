import { ArtificialIntelligence, Column, ParallaxSection } from "@/components";
import { aiAdvantagesDataSet3 } from "@/constants";

export default function Services() {
  return (
    <>
      <Column px={["m", "l"]}>
        <ArtificialIntelligence
          aiCardsProps={{
            startIndex: 4,
            endIndex: 8,
            headingText: "Large Language Models (LLMs) and NLP",
            descriptionText:
              "CodefyU is at the forefront of Natural Language Processing (NLP) and Large Language Models (LLMs). Our team leverages the latest advancements in AI to create conversational interfaces, chatbots, and domain-specific models that understand and respond to human language with accuracy and context.",
          }}
          aiAdvantages={aiAdvantagesDataSet3}
          imageSrc="/images/tech6.png"
          advantagesHeading="Large Language Models (LLMs) and NLP"
          advantagesDescription="As companies increasingly rely on language processing for communication, automation, and analysis, LLMs and NLP offer a competitive edge. Some of the most important advantages include the ability to."
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
