import { CenterBox, Column, Row, Text } from "@/components/styled";
import { TeamCardsProps } from "@/types";
import Image from "next/image";

export const TeamCards: React.FC<TeamCardsProps> = ({ member }) => {
  return (
    <Row
      alignItems={"center"}
      width={["100%", "80%"]}
      flexDirection={["column", "row"]}
      justifyContent={"center"}
      gap={"xl"}
    >
      <CenterBox
       width={["350px", "350px"]}
      height={['290px', '300px']}
       position={"relative"}>
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={390} 
        height={270} 
        style={{
          width: "100%", 
          height: "100%", 
          borderRadius: "6px",
        }}
      />
    </CenterBox>
      <Column gap={"l"} py={"m"}>
        <Text variant={"subHeading"} color="primary">
          {member.name}
        </Text>
        <Text variant={"body"} color="primary" width={["100%", "600px"]}>
          {member.role}
        </Text>
      </Column>
    </Row>
  );
};
