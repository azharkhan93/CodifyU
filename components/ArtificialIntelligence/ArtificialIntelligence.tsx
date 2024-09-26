import { Box, Column, Row, Text } from "../styled";
import Image from "next/image";

import { aiAdvantages } from "@/constants";
import { AiAdvantages } from "./components";

export const ArtificialIntelligence = () => {
  return (
    <Row
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={["column", "row"]}
      style={{
        backgroundImage: "url('/images/aitech.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
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
          src={"/images/ai23.png"}
          alt="no image"
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Column alignItems={"center"} py={"xl"} gap={"xl"}>
        <Column
          textAlign={["start", "center"]}
          alignItems={"center"}
          gap={"xxxl"}
          width={["100%", "700px"]}
          px={["m", "xxxl"]}
        >
          <Text variant={"heading"} color={"white"}>
            Advantages of Artificial Intelligence (AI) technology
          </Text>
          <Text variant={"body"} color="white">
            As AI systems become better at processing, interpreting, and turning
            data into actionable information, both businesses and society as a
            whole will continue to integrate AI into society in a way that
            offers numerous advantages. Some of the most important advantages
            include the ability to:
          </Text>
        </Column>

        <Column
          width={["100%", "670px"]}
          borderRadius={"m"}
          py={"xxxxl"}
          bg={"textColor"}
          gap={"xxxl"}
          px={["s", "xxxl"]}
        >
          {aiAdvantages.map((item, index) => (
            <AiAdvantages key={index} description={item.description} />
          ))}
        </Column>
      </Column>
    </Row>
  );
};
