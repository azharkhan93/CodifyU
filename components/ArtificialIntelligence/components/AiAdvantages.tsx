import { Row, CenterBox, Text } from "@/components/styled";
import { AiAdvantagesProps } from "@/types";

export const AiAdvantages: React.FC<AiAdvantagesProps> = ({ description, number, title }) => {
  return (
    <Row flexDirection={"column"} alignItems={"flex-start"} gap={["l", "xl"]}>
      <Row alignItems={"center"} flexDirection={"row"} gap={"l"}>
        <CenterBox
          borderRadius={"circle"}
          bg={"white"}
          py={["l", "m"]}
          px={["xl", "l"]}
        >
          <Text variant={"subHeading"} color={"textColor"}>
            {number}
          </Text>
        </CenterBox>
        <Text variant={"subHeading"}>
          {title}
        </Text>
      </Row>
      <Text variant={"body"} lineHeight={"1.5"} >{description}</Text>
    </Row>
  );
};



