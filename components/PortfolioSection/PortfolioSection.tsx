
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
        data-aos="fade-up"
        px={["m", "xxl"]}
        width={"100%"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={["100%", "45%"]}
        >
          <Text variant={["heading", "footerHeading"]}>
            Why{" "}
            <span style={{ color: "orange", fontSize: "42px" }}>CodefyU</span>?
          </Text>
          <Text variant={"body"}>
            We have successfully delivered over 200 projects over the last 8
            years, collectively generating a value of{" "}
            <span style={{ color: "orange", fontSize: "20px" }}>
              $200 million
            </span>
            . High-Quality tech solutions without high costs.
          </Text>
        </Column>
      </Row>
      <ProjectCards products={products} />
    </>
  );
};
