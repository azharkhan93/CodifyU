import { reviews23 } from "@/constants";
import { ReviewsCard } from "../ReviewsCard";
import { Column, Box, CenterBox, Text, Floki, Row } from "../styled";
import Image from "next/image";

export const ReviewsSection = () => {
  return (
    <Column
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
      gap={"l"}
    >
      
        <Column gap={["xl", "m"]}>
          <Text  variant="heading" >
          What Our Clients Say
          </Text>
          <Text  variant={"body"} width={["100%", "460px"]} lineHeight={"1.5"} textAlign={["start", "center"]}>
            Discover how our services have positively impacted our clients
            experiences. Read their testimonials below to learn more.
          </Text>
          
        </Column>

        
    

      <CenterBox py={["xxxl", "xxxxl"]} flexDirection={["column", "row"]} gap={"xxxxl"} bg={"white"} borderRadius={"m"}
      
      >

<Box position="relative" width={["355px","400px"]} height={360} >
    <Image
      src={"/Testimonial/t1.png"}
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
      // style={{
      //   mixBlendMode: "multiply",
      //   borderRadius: "20px",
                 
      // }}
    />
  </Box>
         <Image
        src={"/Testimonial/2.png"}
        alt="no img"
        width={400}
        height={360}
        style={{borderRadius: "20px"}}
         />
         <Image
        src={"/Testimonial/3.png"}
        alt="no img"
        width={400}
        height={360}
        style={{borderRadius: "20px"}}
         />
        {/* <Row flexDirection={"row"} gap={"xl"}>
          {reviews23.map((review, index) => (
            <ReviewsCard key={index} review={review} />
          ))}
        </Row> */}
      </CenterBox>
    </Column>
  );
};
