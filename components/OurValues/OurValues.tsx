import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
import { FiCheckCircle } from "react-icons/fi";
import { StatsCards } from "./components/StatsCards";
import { STATS_DATA, VALUES_DATA } from "@/constants";
import { ValueCards } from "./components/ValueCards";

export const OurValues = () => {
  return (
    <>
      <Row
        px={["m","xxl"]}
        width={"100%"}
        // border={"2px solid red"}
        flexDirection={["column","row"]}
        justifyContent={"space-between"}
      >
        <Column
          py={"xl"}
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={["100%","45%"]}
        >
          <Text variant={"heading"}>Our Value Propostion</Text>
          <Text variant={"body"}>
            In this post-pandemic world, as continuous disruption unfolds,
            businesses need expert guidance and proven talent for their Digital
            Transformation priorities.{" "}
          </Text>
          <Text>
            As a smart and agile software development agency, we custom engineer
            sophisticated digital solutions, that enable our clients to stay
            ahead of the game, and thrive in this ever-changing digital
            landscape.
          </Text>
        </Column>

        <Column alignItems={"center"} justifyContent={"center"} py={"xl"}>
          <Row
            alignItems="center"
            //  border={"2px solid black"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={"xxxl"}
            width={["350px","550px"]}
            py={"xl"}
          >
            {VALUES_DATA.map((value) => (
              <ValueCards
                key={value.id}
                title={value.title}
                icon={value.icon}
              />
            ))}
          </Row>
        </Column>
      </Row>
      <Box width={["100%","90%"]} flexDirection={["column","row"]} gap={["xxxxl","xlg"]} py={"xxxl"}
      alignItems={"center"}
      justifyContent={"center"}
    
      >
        {STATS_DATA.map((stat) => (
          <StatsCards
            key={stat.id}
            heading={stat.heading}
            subHeading={stat.subHeading}
          />
        ))}
      </Box>

      <CenterBox
        py={"xxxl"}
        //   border={"2px solid red"}
      >
        <Button bg={"secondary"} py={"m"} px={"xl"}
        borderTopRightRadius={"m"}
        borderTopLeftRadius={"m"}
        >
          Share Your Project Requirements
        </Button>
      </CenterBox>
    </>
  );
};
