import { workCardItems } from "@/constants";
import { CenterBox, Column, Row, Text } from "../styled";
import { WorkCards } from "./components/WorkCards";

export const WorkApproach = () => {
  return (
    <Column py={"xl"}>
      <CenterBox gap={"xl"}>
        <Text variant={"heading"}>Our work Process</Text>
        <Text variant={["subHeading", "footerHeading"]}>
          Our Working Process
        </Text>
      </CenterBox>

      <Row
      data-aos="fade-up"
        flexDirection={["column", "row"]}
        width={"100%"}
        gap={"xxxl"}
        alignItems={"center"}
        justifyContent={"center"}
        py={"xl"}
      >
        {workCardItems.map((item) => (
          <WorkCards
            key={item.step}
            step={item.step}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </Row>
    </Column>
  );
};


// import { StyleSheetManager } from "styled-components";
// import isPropValid from "@emotion/is-prop-valid";

// <StyleSheetManager shouldForwardProp={isPropValid}>

// </StyleSheetManager>

// useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: false,
//     });
//   }, []);

//   useEffect(() => {
//     AOS.refresh();
//   }, [children]);


