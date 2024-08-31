import { AboutUs, Faq, TopBar } from "@/components";

import { faqItems } from "@/constants";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/about.jpg"}
        aboutText={"About Us"}
        whoWeAreText={"Who We Are"}
      />

      <AboutUs />

      <Faq items={faqItems} />
    </>
  );
}
