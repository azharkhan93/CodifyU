import { CenterBox, Column, Row, Text } from "../styled";
import { AboutCards } from "./components/AboutCards";
import { OurMission } from "./components/OurMission";
import { OurWorkSpaceSection } from "./components/WorkSpaceSection";

export const AboutUs = () => {
  return (
    <>
      <CenterBox py={["xxxxl", "xxxl"]} width={"100%"} mt={"xlg"}>
        <Column
          gap={"xl"}
          alignItems={"center"}
          width={["100%", "850px"]}
          px={["s", "xl"]}
        >
          <Text
            textAlign={["start","center"]}
            variant={["heading", "footerHeading"]}
          >
            {`We Don’t Just Deliver Solutions! We Tailor Them To Your Vision. Your
            Success Is Our Mission`}
          </Text>
          <Text textAlign={["start","center"]} variant={"body"} >
            In The Fast-Paced World Of Startups, Complexity Is The Enemy Of
            Execution.At <span style={{ color: "#fb9c42", fontSize: "22px" }}>codefyU</span>{" "}, We Streamline Your Path To Success, Making
            Startup Growth Not Just Possible But Predictable.
          </Text>
        </Column>
      </CenterBox>
      <AboutCards />
      <OurMission />
      <OurWorkSpaceSection />
    </>
  );
};
