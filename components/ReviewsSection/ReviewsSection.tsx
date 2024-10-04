"use client";
import React from "react";
import { Column, CenterBox, Text, Box, Row } from "../styled";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { REVIEW_SLIDES } from "@/constants";


export const ReviewsSection = () => {
  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]} gap={"l"}>
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
        borderRadius={"m"}
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay, Navigation]}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {REVIEW_SLIDES.map((src, index) => (
            <SwiperSlide key={index}>
              <Row flexDirection={"row"} width={"100%"} alignItems={"center"}>
                <Box
                  width={["390px", "600px"]}
                  height={["290px", "360px"]}
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src={src}
                    alt={`Review ${index + 1}`}
                    width={700}
                    height={500}
                    style={{
                      objectFit: "cover",
                      borderRadius: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </CenterBox>
    </Column>
  );
};
