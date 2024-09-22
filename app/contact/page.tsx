import { Column, ContactSection, Mapsection, TopBar } from "@/components";

export default function Home() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >

      <ContactSection />
      <Mapsection />
      </Column>
    </>
    
  );
}
