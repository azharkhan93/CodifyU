import { AboutUs, Column, WorkApproach } from "@/components";


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

