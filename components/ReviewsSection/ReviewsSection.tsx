import { reviews23 } from "@/constants";
import { ReviewsCard } from "../ReviewsCard";
import { Column, Box, CenterBox, Text, Floki, Row } from "../styled";

export const ReviewsSection = () => {
  return (
    <Column
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
      gap={"l"}
        px={"xl"}
    >
      
        <Column gap={["xl", "m"]}>
          <Text  variant={["heading","footerHeading"]} >
          What Our Clients Say
          </Text>
          <Text  variant={"body"} width={["100%", "460px"]} lineHeight={"1.5"} textAlign={["start", "center"]}>
            Discover how our services have positively impacted our clients
            experiences. Read their testimonials below to learn more.
          </Text>
          
        </Column>

        
    

      <CenterBox py={["xxxl", "xxxxl"]} flexDirection={["column", "row"]}>
        <Row flexDirection={"row"} gap={"xl"}>
          {reviews23.map((review, index) => (
            <ReviewsCard key={index} review={review} />
          ))}
        </Row>
      </CenterBox>
    </Column>
  );
};
