import { Box, Column, Row, Text } from "../styled";
import Image from "next/image";
import { aiAdvantages } from "@/constants";
import { AiAdvantages } from "./components";
import { AiDataCards } from "./components/AiDataCards";

export const ArtificialIntelligence = () => {
  return (

    <>
    <AiDataCards />
    <Row
    py={["xl","xxxxl"]}
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
          src={"/images/tech6.png"}
          alt="no image"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "100%",
          }} />
      </Box>
      <Column alignItems={"center"} py={["xl","xxxxl"]} gap={"xl"}>
        <Column
          textAlign={["start", "center"]}
          alignItems={"center"}
          gap={"xxxl"}
          width={["100%", "700px"]}
          px={["m", "xxxl"]}
          color={"textColor"}
        >
          <Text variant={"heading"} >
            Advantages Of Using AI & Machine Learning
          </Text>
          <Text variant={"body"} lineHeight={"1.5"} >
            As AI systems become better at processing, interpreting, and turning
            data into actionable information, both businesses and society will
            continue to integrate AI in ways that offer numerous advantages.
            Some of the most important advantages include the ability to:
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
              description={advantage.description} />
          ))}
        </Column>
      </Column>
    </Row></>
  );
};
