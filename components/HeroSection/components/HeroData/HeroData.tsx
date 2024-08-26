import { Box, CenterBox, Column, Row, Text } from "@/components/styled";
import Image from "next/image";

export const HeroData = () => {
  return (
    <Row
      py={"m"}
      width={"100%"}
      flexDirection={["row", "row"]}
      justifyContent={"space-between"}
    >
      <CenterBox>
        <Image
          src={"/images/dg.jpg"}
          alt="image not avable "
          width={800}
          height={300}
          style={{ borderRadius: "10px" }}
        />
      </CenterBox>
      <Column
        bg={"white"}
        justifyItems={"center"}
        justifyContent={"center"}
        border={"1px solid green"}
        px={"l"}
        gap={"xl"}
        borderBottomRightRadius={"xl"}
      >
        <Text>850+</Text>
        <Text>Projects Completed</Text>
        <Text>850+</Text>
        <Text>Projects Completed</Text>
        <Text>850+</Text>
        <Text>Projects Completed</Text>
      </Column>
    </Row>
  );
};
