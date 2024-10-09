import { Column, ContactSection, MapSection, TopBar } from "@/components";

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
