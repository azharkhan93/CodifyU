import { textAlign } from "styled-system";
import { Box, CenterBox, Column, Row, Text } from "../styled";
import { HeroData } from "./components/HeroData";

export const HeroSection = () => {
  return (
    <Box
      bg={"primary"}
      alignItems={"center"}
      width={"100%"}
      flexDirection={"column"}
      gap={"l"}
      px={"xxxxl"}
    >
      <Column
        gap={"xl"}
        width={"100%"}
        border={"2px solid green"}
        alignItems={"flex-start"}
        mt={"xlg"}
      >
        <Text variant="subHeading" color="white">
          Award Wining Digital Agency
        </Text>
        <Text
          variant="heading"
          color="white"
          width={"400px"}
          textAlign={"center"}
        >
          Where Innovation Meets{" "}
          <span style={{ color: "green", fontSize: "35px" }}>
            Digital Excellence
          </span>
        </Text>
      </Column>
      <Row
        flexDirection={["row", "row"]}
        border={"2px solid red"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Box
          alignItems={"center"}
          border={"1px solid white"}
          //  justifyContent={"space-between"}
          flexDirection={"row"}
          width={"48%"}
          flexWrap={"wrap"}
          gap={"l"}
          py={"xxl"}
        >
          <Text
            variant="body"
            color="white"
            py={"s"}
            px={"l"}
            borderRadius={"circle"}
            style={{
              borderLeft: "3px solid green",
              borderRight: "3px solid green",
            }}
            // borderTopLeftRadius={"2px solid green "}
          >
            Mobile App Development
          </Text>

          <Text
            variant="body"
            color="white"
            py={"s"}
            px={"l"}
            borderRadius={"circle"}
            style={{
              borderLeft: "3px solid green",
              borderRight: "3px solid green",
            }}
          >
            Website Development
          </Text>

          <Text
            variant="body"
            color="white"
            py={"s"}
            px={"l"}
            borderRadius={"circle"}
            style={{
              borderLeft: "3px solid green",
              borderRight: "3px solid green",
            }}
          >
            Graphic Design
          </Text>
          <Text
            variant="body"
            color="white"
            py={"s"}
            px={"l"}
            borderRadius={"circle"}
            style={{
              borderLeft: "3px solid green",
              borderRight: "3px solid green",
            }}
          >
            Digital Marketing
          </Text>
          <Text
            variant="body"
            color="white"
            py={"s"}
            px={"l"}
            borderRadius={"circle"}
            style={{
              borderLeft: "3px solid green",
              borderRight: "3px solid green",
            }}
          >
            Digital Marketing
          </Text>
        </Box>
        <CenterBox width={"40%"} borderLeft={"3px solid green"}>
          <Text variant="body" color="white" textAlign={"start"} px={"header"}>
            we re the one of the best maketing agency in the whole market with a
            expeerince of almost more tha 50 years in market
          </Text>
        </CenterBox>
      </Row>
      <HeroData />
    </Box>
  );
};
