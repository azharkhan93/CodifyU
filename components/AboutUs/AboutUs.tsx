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
            textAlign={"center"}
            variant={["heading", "footerHeading"]}
          >
            {`We Don’t Just Deliver Solutions We Tailor Them To Your Vision  Your
            Success Is Our Mission!`}
          </Text>
          <Text textAlign={ "center"} variant={"body"} lineHeight={"1.5"} width={["100%","685px"]}>
             At 
            <span
            style={{
              color: "#fb9c42",
              fontSize: "22px",
              fontFamily: "ComfortaaMedium",
              lineHeight:"1.5",
            }}
          >
          {" "} codefyU {" "}
          </span>
              we streamline your path to success, making startup growth not just
            possible but predictable.
          </Text>
        </Column>
      </CenterBox>
      <AboutCards />
      <OurMission />
      <OurWorkSpaceSection />
    </>
  );
};
