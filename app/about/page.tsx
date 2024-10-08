import { AboutUs, Column, ParallaxSection, WorkApproach } from "@/components";


export default function Home() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >
      <AboutUs />
      <WorkApproach />
      </Column>
      <ParallaxSection
          heading="Chart New Territories – Let’s Build It with CodefyU!"
          body=""
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
    </>
  );
}

