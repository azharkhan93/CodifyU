"use client"
import { Box, Column, Row, Text } from "../styled";
import Image from "next/image";
import { AiAdvantages } from "./components";
import { AiDataCards } from "./components/AiDataCards";
import { AiProps } from "@/types";

export const ArtificialIntelligence: React.FC<AiProps> = ({
  aiCardsProps,
  aiAdvantages,
  imageSrc,
  advantagesHeading,
  advantagesDescription,
}) => {
  return (
    <>
      <AiDataCards
        startIndex={aiCardsProps.startIndex}
        endIndex={aiCardsProps.endIndex}
        headingText={aiCardsProps.headingText}
        descriptionText={aiCardsProps.descriptionText}
      />
      <Row
        py={["xl", "xxxxl"]}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={["column", "row"]}
      >
        <Box
          mt={["xxxlg", "xlg"]}
          alignItems={"center"}
          justifyContent={"center"}
          position="relative"
          width={["365px", "700px"]}
          height={["auto", "600px"]}
        >
          <Image
            src={imageSrc}
            alt="AI image"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Column alignItems={"center"} py={["xl", "xxxxl"]} gap={"xl"}>
          <Column
            textAlign={["start", "center"]}
            alignItems={"center"}
            gap={"xxxl"}
            width={["100%", "700px"]}
            px={["m", "xxxl"]}
            color={"textColor"}
          >
            <Text variant={"heading"} lineHeight={"1.3"}>{advantagesHeading}</Text>
            <Text variant={"body"} lineHeight={"1.5"} textAlign={"center"}>
              {advantagesDescription}
            </Text>
          </Column>

          <Column
            width={["100%", "600px"]}
            borderRadius={"m"}
            py={"xxxxl"}
            bg={"textColor"}
            gap={"xxxl"}
            px={["s", "xxxl"]}
          >
            {aiAdvantages.map((advantage, index) => (
              <AiAdvantages
                key={index}
                number={index + 1}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </Column>
        </Column>
      </Row>
    </>
  );
};

{
  /* <AiDataCards
  startIndex={4}
  endIndex={8}
  headingText="Leverage AI for Digital Transformation"
  descriptionText="Embrace the future with AI and machine learning solutions tailored to your business needs. Enhance decision-making, optimize operations, and drive innovation with our AI-powered tools."
/> */
}
