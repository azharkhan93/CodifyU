import { Column, Box, CenterBox, Text } from "../styled";
import Image from "next/image";

export const TestiomonialsSection = () => {
  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"} mt={"xlg"}>
      <Column gap={["xl", "m"]}>
        <Text variant="heading">What Our Clients Say</Text>
        <Text
          variant={"body"}
          width={["100%", "460px"]}
          lineHeight={"1.5"}
          textAlign={["start", "center"]}
        >
          Discover how our services have positively impacted our clients
          experiences. Read their testimonials below to learn more.
        </Text>
      </Column>

      <CenterBox
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
        gap={"xxxxl"}
        bg={"white"}
        borderRadius={"m"}
      >
        <Box position="relative" width={["355px", "400px"]} height={360}>
          <Image
            src={"/testimonialHome/1.png"}
            alt="no img"
            width={400}
            height={360}
            style={{
              mixBlendMode: "multiply",
              borderRadius: "20px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box position="relative" width={["355px", "400px"]} height={360}>
          <Image
            src={"/testimonialHome/2.png"}
            alt="no img"
            width={400}
            height={360}
            style={{
              mixBlendMode: "multiply",
              borderRadius: "20px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        <Box position="relative" width={["355px", "400px"]} height={360}>
          <Image
            src={"/testimonialHome/3.png"}
            alt="no img"
            width={400}
            height={360}
            style={{
              mixBlendMode: "multiply",
              borderRadius: "20px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </CenterBox>
    </Column>
  );
};
