import {
  ArtificialIntelligence,
  Column,
  ParallaxSection,
} from "@/components";
import {  aiAdvantagesDataSet2, } from "@/constants";

export default function Data() {
  return (
    <>
      <Column
       px={["xl", "l"]}
      >
        <ArtificialIntelligence
          aiCardsProps={{
            startIndex: 8,
            endIndex: 12,
            headingText: "Data Analytics & Predictive Modeling",
            descriptionText:
              "Data is at the core of decision-making, and at codefyU, we help businesses harness the power of their data through advanced analytics and predictive modeling. Our data solutions empower companies to make real-time, data-driven decisions that propel growth and innovation.",
          }}
          aiAdvantages={aiAdvantagesDataSet2}
          imageSrc="/images/tech6.png"
          advantagesHeading="Advantages Of Using Data Analytics and Predictive Modeling"
          advantagesDescription="As companies shift towards data-driven decision-making, data analytics and predictive modeling empower organizations with actionable insights. Some of the most important advantages include the ability to."
        />

        <ParallaxSection
          spanText="Any Queries"
          heading="Reach Out To Us?"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      </Column>
    </>
  );
}
