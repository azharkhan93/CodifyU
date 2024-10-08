import { Column, ContactSection, Mapsection,  ParallaxSection,  TestimonialsSection,  TopBar } from "@/components";

export default function Home() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >

      <TestimonialsSection id={0} imageSrc={""} altText={""} />
    
      </Column>
      <ParallaxSection
          heading="Success Stories That Shine – Ready to Share Yours?"
          body=""
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
    </>
    
  );
}