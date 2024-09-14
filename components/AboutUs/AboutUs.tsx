import { CenterBox, Column, Row, Text } from "../styled";
import { AboutCards } from "./components/AboutCards";

export const AboutUs = () => {
  return (
    <>
      <CenterBox py={["xxxxl", "xxxl"]} width={"100%"}>
        <Column
          gap={"xl"}
          alignItems={"center"}
          width={["100%", "900px"]}
          px={["s", "xl"]}
          data-aos="fade-right"
        >
          <Text
            textAlign={["center","center"]}
            variant={["heading", "footerHeading"]}
            // color="blue600"
          >
            {`We Don’t Just Deliver Solutions! We Tailor Them To Your Vision. Your
            Success Is Our Mission`}
          </Text>
          <Text textAlign={["start","center"]} variant={"body"} >
            In The Fast-Paced World Of Startups, Complexity Is The Enemy Of
            Execution.At <span style={{ color: "orange", fontSize: "22px" }}>CodefyU</span>{" "}, We Streamline Your Path To Success, Making
            Startup Growth Not Just Possible But Predictable.
          </Text>
        </Column>
      </CenterBox>
      <AboutCards />
    </>
  );
};
