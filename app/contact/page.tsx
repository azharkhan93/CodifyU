import { ContactSection, Mapsection, TopBar } from "@/components";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={""}
        aboutText={"Contact Us"}
        whoWeAreText={"Reach Us"}
      />

      <ContactSection />
      <Mapsection />
    </>
  );
}
