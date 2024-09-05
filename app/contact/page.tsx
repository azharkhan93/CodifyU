import { ContactSection, Mapsection, TopBar } from "@/components";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/p2.jpg"}
        aboutText={"Contact Us"}
        whoWeAreText={"Reach Us"}
      />

<ContactSection />
<Mapsection />
    </>
  );
}
