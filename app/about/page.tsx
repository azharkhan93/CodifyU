import { AboutUs, Faq, TopBar, WorkApproach } from "@/components";

import { faqItems } from "@/constants";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={""}
        aboutText={"About Us"}
        whoWeAreText={"Who We Are"}
      />

      <AboutUs />

      {/* <Faq items={faqItems} /> */}
      <WorkApproach />
    </>
  );
}

