import { ContactSection, Mapsection, TopBar } from "@/components";

export default function Home() {
  return (
    <>
      <TopBar
        backgroundImage={"/images/contact.webp"}
        aboutText={"Contact Us"}
        whoWeAreText={"Reach Us"}
      />

<ContactSection />
<Mapsection />
    </>
  );
}
