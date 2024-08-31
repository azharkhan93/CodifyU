import { CenterBox, Column, Row, Text } from "../styled";
import { AboutCards } from "./components/AboutCards";

export const AboutUs = () => {
  return (
    <>
      <CenterBox py={"xl"} width={"100%"}>
        <Column alignItems={"center"} width={"800px"} px={"xl"}>
          <Text textAlign={"center"} variant={"footerHeading"}>
            We Help Every Businsess To Grow From Enterprenures To Iconic Brands
          </Text>
          <Text textAlign={"center"} variant={"body"}>
            Lets Know Your Work And We Are Here Help Ecery Businsess To Grow
            From Enterprenures To Iconic Brands
          </Text>
        </Column>
      </CenterBox>
      <AboutCards />
    </>
  );
};
