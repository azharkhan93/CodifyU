import React from "react";
import { Column, Box, CenterBox, Text } from "../styled";
import Image from "next/image";
import { testimonials } from "@/constants";
import { Testimonial } from "@/types";


export const TestimonialsSection: React.FC<Testimonial>= () => {
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
          {`Discover how our services have positively impacted our clients'
          experiences. Read their testimonials below to learn more.`}
        </Text>
      </Column>

      <CenterBox
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
        gap={"xxxxl"}
        bg={"white"}
        borderRadius={"m"}
        width={"100%"}
        flexWrap={"wrap"}
      >
        {testimonials.map((testimonial) => (
          <Box key={testimonial.id} position="relative" width={["355px", "400px"]} height={360}>
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.altText}
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
        ))}
      </CenterBox>
    </Column>
  );
};

