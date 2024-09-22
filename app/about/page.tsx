import { AboutUs, Column, WorkApproach } from "@/components";

import { faqItems } from "@/constants";

export default function Home() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >
      <AboutUs />
      <WorkApproach />
      </Column>
    </>
  );
}

