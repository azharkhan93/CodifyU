import { CenterBox, Column, Row, Text } from "../styled";
import { AboutCards } from "./components/AboutCards";

export const AboutUs = () => {
  return (
    <>
      <CenterBox py={["xxxxl", "xxxl"]} width={"100%"} >
        <Column alignItems={"center"} width={["100%","800px"]} px={["s","xl"]} data-aos="fade-right">
          <Text textAlign={"center"} variant={["heading","footerHeading"]} color="blue600">
            We Help Every Businsess To Grow From Enterprenures To Iconic Brands
          </Text>
          <Text textAlign={"center"} variant={"body"} color="slate800">
            Lets Know Your Work And We Are Here Help Ecery Businsess To Grow
            From Enterprenures To Iconic Brands
          </Text>
        </Column>
      </CenterBox>
      <AboutCards />
    </>
  );
};
