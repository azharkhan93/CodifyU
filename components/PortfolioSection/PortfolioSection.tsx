import { Post } from "@/types";
import { Box, Column, Row, Text } from "../styled";
import { ProjectCards } from "../ProjectCards";

interface PortfolioSectionProps {
  products: Post[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  products,
}) => {
  return (
    <>
      <Row
        mt={"xlg"}
        width={"100%"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          py={"xxxl"}
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={["100%", "45%"]}
        >
          <Text variant="heading">Our Work</Text>
          <Text variant={"body"} textAlign={"start"}>
            Some Highlights Of Our favorite Projects We Have Done For Forward
            Thinking Clients.
          </Text>
        </Column>
      </Row>
      <ProjectCards products={products} />
    </>
  );
};
