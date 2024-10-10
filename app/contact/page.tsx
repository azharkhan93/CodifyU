import { Column, ContactSection, MapSection } from "@/components";

export default function Home() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >

      <ContactSection />
      <MapSection />
      </Column>
    </>
    
  );
}
