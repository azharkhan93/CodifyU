import { Column, Row, Text } from "@/components/styled";
import { teamMembers } from "@/constants";
import { TeamCards } from "./components/TeamCards";

export const TeamMembers = () => {
  return (
    <Column alignItems={"center"} width={"100%"} py={["xl", "header"]} px={"m"}>
      <Column
        py={"xl"}
        gap={"xxl"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        width={["100%", "45%"]}
      >
        <Text variant={["heading", "footerHeading"]}>Meet Our Talents</Text>
        <Text variant={"body"}>
          In this post-pandemic world, as continuous disruption unfolds,
          businesses need expert guidance and proven talent for their Digital
          Transformation priorities.{" "}
        </Text>
      </Column>

      <Row
        flexWrap={"wrap"}
        width={"100%"}
        py={["l", "xl"]}
        gap={["xl", "xl"]}
        flexDirection={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {teamMembers.map((member) => (
          <TeamCards key={member.name} member={member} />
        ))}
      </Row>
    </Column>
  );
};
