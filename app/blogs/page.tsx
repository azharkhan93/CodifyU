"use client";
import { BlogSection,  ParallaxSection, } from "@/components";

export default function Portfolio() {

  return (
    <>
    <BlogSection />
        <ParallaxSection
         spanText = "Inspired by Our Portfolio?"
          heading="Let’s Create Something Amazing Together!"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      
    </>
  );
}