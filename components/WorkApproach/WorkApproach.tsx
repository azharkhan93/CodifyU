import { workCardItems } from "@/constants";
import { CenterBox, Column, Row, Text } from "../styled";
import { WorkCards } from "./components/WorkCards";

export const WorkApproach = () => {
  return (
    <Column py={"xl"} gap={["xl", "xxxl"]}>
      <Column gap={"xl"}>
        {/* <Text variant={"heading"}>Our work Process</Text> */}
        <Text variant={["heading", "footerHeading"]} textAlign={"start"}>
          Our Working Process
        </Text>
      </Column>

      <Row
       
        flexDirection={["column", "row"]}
        width={"100%"}
        gap={["xxxxl", "header"]}
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


