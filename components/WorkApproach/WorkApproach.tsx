import { workCardItems } from "@/constants";
import { CenterBox, Column, Row, Text } from "../styled";
import { WorkCards } from "./components/WorkCards";

export const WorkApproach = () => {
  return (
    <Column py={"xl"} gap={["xl", "xxxl"]}>
      <Column gap={"xl"}>
      
        <Text variant="heading"  textAlign={"start"}>
        codefyU Working Process
        </Text>
        <Text variant={"body"}>
            We are proud to collaborate with some of the most innovative and
            esteemed companies in the industry.
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


