import { Row, Column, Text } from "@/components/styled";
import { FeatureCardProps } from "@/types";

export const FeaturedCards: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <>
      <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
        <Icon size={28} fill="#fb9c42" />
        <Text variant={"subHeading"}>{title}</Text>
      </Row>
      <Column>
        <Text variant={"body"} width={["100%", "600px"]} lineHeight={"1.5"}>
          {description}
        </Text>
      </Column>
    </>
  );
};
