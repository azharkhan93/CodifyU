import { Box, Column, Row, Text } from "../styled";

export const CareeersSection = () => {
  return (
    <Box
      mt={"xlg"}
      overflow={"hidden"}
      gap="xxxl"
      width="100%"
      py="xxl"
      position={"relative"}
    >
      <Column
        px={["none","xl"]}
        gap={"xl"}
        alignItems={["center","start"]}
        py={"xxlg"}
        position={"relative"}
        borderLeftWidth={"s"}
        style={{
          backgroundImage: "url('/images/p4.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          borderEndEndRadius: "20px",
        }}
      >
        <Box
          width={["100%","45%"]}
          height={"100%"}
          position="absolute"
          top={"0"}
          left={"0"}
          bg={"background"}
          zIndex={"2"}
        ></Box>
        <Text
          zIndex={"4"}
          variant={"heading"}
             textAlign={["center", "start"]}
          lineHeight={"1.3"}
          width={["100%", "600px"]}
        >
          {`Shape The Future Of IT Solutions Together, Let's Innovate!`}
        </Text>
        <Text
        textAlign={["center", "start"]}
          zIndex={"4"}
          variant={"body"}
          width={["100%", "600px"]}
          lineHeight={"1.5"}
        >
          {`Want to join a great company and work with great people? We are always on the lookout for the brightest IT talents to join our rapidly expanding team. If you are up for the challenge, apply now.`}
        </Text>
      </Column>

      <Row
        py="xxxl"
        overflow={"hidden"}
        justifyContent={"center"}
        flexDirection={["column", "row"]}
        gap="xxxl"
        width="100%"
        flexWrap={"wrap"}
      ></Row>
    </Box>
  );
};
