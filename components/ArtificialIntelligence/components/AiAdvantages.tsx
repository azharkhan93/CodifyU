import { Row, CenterBox, Text } from "@/components/styled";
import { AiAdvantagesProps } from "@/types";
import { FaThumbsUp } from "react-icons/fa";

export const AiAdvantages: React.FC<AiAdvantagesProps > = ({ description }) => {
  return (
    <Row flexDirection={"row"} alignItems={"center"} gap={["l", "xl"]}>
      <CenterBox
        borderRadius={"circle"}
        bg={"white"}
        py={["l", "xl"]}
        px={["l", "xl"]}
      >
        <FaThumbsUp size={28} color="#fb9c42" />
      </CenterBox>
      <Text variant={"subHeading"}>{description}</Text>
    </Row>
  );
};
