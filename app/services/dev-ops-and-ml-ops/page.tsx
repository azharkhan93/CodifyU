import {
    ArtificialIntelligence,
    Column,
    ParallaxSection,
  } from "@/components";
  import { aiAdvantagesDataSet1, services } from "@/constants";
  
  export default function Services() {
    return (
      <>
        <Column 
       px={["xl", "l"]}
        >
        <ArtificialIntelligence
          aiCardsProps={{
            startIndex: 12,
            endIndex: 16,
            headingText: "Accelerate Your Business with DevOps and MLOps",
            descriptionText:
              "At codefyU, we streamline the development and deployment process through our DevOps and MLOps services. By automating infrastructure and software delivery pipelines, we help businesses accelerate time-to-market and improve the quality of their software products and machine learning models",
          }}
          aiAdvantages={aiAdvantagesDataSet1}
          imageSrc="/images/tech6.png"
          advantagesHeading="Advantages Of Using DevOps and MLOps"
          advantagesDescription="As development and operational processes become more intertwined, DevOps and MLOps offer several advantages for continuous integration and delivery. Some of the most important advantages include the ability to:"
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