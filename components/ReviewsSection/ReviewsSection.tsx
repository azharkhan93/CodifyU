import { reviews23 } from "@/constants";
import { ReviewsCard } from "../ReviewsCard";
import { Column, Box, CenterBox, Text, Floki } from "../styled";

export const ReviewsSection = () => {
  return (
    <Column
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
    >
      <Box
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
        py={"l"}
      >
        <Column gap={["xl", "m"]}>
          <Text  variant={["heading","footerHeading"]} >
            Testimonial
          </Text>
          <Box
            height={"3px"}
            bg={"secondary"}
            width={"70%"}
            ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text  variant={["subHeading","heading"]}>
            What Our Clients Say
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text  variant={"body"}>
            Discover how our services have positively impacted our clients
            experiences. Read their testimonials below to learn more.
          </Text>
        </CenterBox>
      </Box>

      <CenterBox py={["xxxl", "xxxxl"]} flexDirection={["column", "row"]}>
        <Floki flexDirection={"row"} gap={"xl"}>
          {reviews23.map((review, index) => (
            <ReviewsCard key={index} review={review} />
          ))}
        </Floki>
      </CenterBox>
    </Column>
  );
};
