"use client";
import { Box, CenterBox, Column, Row, Text } from "@/components";
import { GiArtificialIntelligence } from "react-icons/gi"; 
import { MdOutlineArrowOutward } from "react-icons/md";

export const AiServices = () => {
  return (
    <Row justifyContent={"space-between"} py={"xl"} flexDirection={"row"}>
      <Row
        py={"xl"}
        border={"4px solid red"}
        position="relative"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection={"row"}
      >
        <Column
          borderRadius={"m"}
          width={"600px"}
          color="textColor"
          py={"xxxl"}
          gap={"xl"}
          position="relative"
          style={{
            backgroundImage: "url('/images/bg.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Column
            px={"m"}
            width={"490px"}
            py={"xxxl"}
            gap={"l"}
            borderBottomRightRadius={"xl"}
            borderTopRightRadius={"xl"}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <Row
            flexDirection={"row"}
            // width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            >
              <Text variant={"heading"}>Genrative AI</Text>
              <Box
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"circle"}
              py={"m"}
              px={"m"}
              bg={"background"}
              >
              <GiArtificialIntelligence size={40} color="#fb9c42" /> 
              </Box>
            

            </Row>
            <Box
            position="absolute"
            bottom={"s"} 
            right={"xl"}  
            bg={"background"}
            borderRadius={"circle"}
            py={"s"}
            px={"s"}
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",  
            }}
          >
            <MdOutlineArrowOutward size={30} color="#fb9c42" />  
          </Box>
            
            <Text lineHeight={"1.5"}>
              codefyU specializes in designing advanced generative AI models
              that revolutionize content creation From personalized marketing to
              automated content generation our models are tailored to meet the
              creative needs of your business
            </Text>
          </Column>
        </Column>
        <Column width={"600px"} py={"xl"} gap={"xl"}>
          <Text variant={"heading"}>Genrative AI</Text>
          <Text>
            codefyU specializes in designing advanced generative AI models that
            revolutionize content creation From personalized marketing to
            automated content generation our models are tailored to meet the
            creative needs of your business
          </Text>
        </Column>
      </Row>
    </Row>
  );
};
