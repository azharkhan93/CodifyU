import { AnimatedColumn, AnimatedRow, Box, CenterBox, Column, Row, Text } from "@/components/styled";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export const HeroData = () => {
    const [refColumn, isInViewColumn] = useInView({ threshold: 0.1 });
  const [refRow, isInViewRow] = useInView({ threshold: 0.1 });
  return (
    <Row
      py={"s"}
      width={"100%"}
      flexDirection={["row", "row"]}
      justifyContent={"space-between"}
    >
      <AnimatedRow
       ref={refRow}
       isInView={isInViewRow}
      >
        <Image
          src={"/images/dg.jpg"}
          alt="image not avable "
          width={850}
          height={300}
          style={{ borderRadius: "10px" }}
        />
      </AnimatedRow>
      <AnimatedColumn
      ref={refColumn}
      isInView={isInViewColumn}
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
        <Text>Years Of Experience</Text>
        <Text>850+</Text>
        <Text>Happy Customers</Text>
      </AnimatedColumn>
    </Row>
  );
};
