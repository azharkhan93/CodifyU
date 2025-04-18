import { Box, Row, Text } from "@/components";
import { FaCheck } from "react-icons/fa";

type NewProps = {
  ItemsTitle: string;
};

export const TechCards: React.FC<NewProps> = ({ ItemsTitle }) => {
  return (
    <Row
      flexDirection={"row"}
      alignItems={["flex-start", "center"]}
      gap={["m", "xl"]}
    >
      <Box
        borderRadius={"m"}
        bg={"white"}
        py={"m"}
        px={"m"}
        alignItems={"center"}
      >
        <FaCheck size={25} fill="#FB9C42" />
      </Box>
      <Text variant={["body", "subHeading"]}>{ItemsTitle}</Text>
    </Row>
  );
};
