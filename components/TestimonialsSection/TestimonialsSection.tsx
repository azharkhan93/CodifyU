import React from "react";
import { Column, Box, CenterBox, Text } from "../styled";
import Image from "next/image";
import { testimonials } from "@/constants";
import { Testimonial } from "@/types";

export const TestimonialsSection: React.FC<Testimonial> = () => {
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
          {`Discover how our services have positively impacted our client's
          experiences. Read their testimonials below to learn more.`}
        </Text>
      </Column>

      <CenterBox
        py={["xxxl", "xxxxl"]}
        flexDirection={["column", "row"]}
        gap={"xxxxl"}
        borderRadius={"m"}
        width={"100%"}
        flexWrap={"wrap"}
      >
        {testimonials.map((testimonial) => (
          <Box 
            key={testimonial.id} 
            position="relative" 
            border={"3px solid red"} 
            borderRadius="m"
           >
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.altText}
              width={590}
              height={360}
              style={{
                borderRadius: "20px",
               
                
                
              }}
            />
          </Box>
        ))}
      </CenterBox>
    </Column>
  );
};


