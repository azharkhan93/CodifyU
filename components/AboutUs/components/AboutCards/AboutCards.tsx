import { Box, Button, CenterBox, Column, Row, Text } from "@/components/styled";
import Image from "next/image";
import { FaAward, FaUsers, FaDollarSign, FaTools } from "react-icons/fa";

export const AboutCards = () => {
  return (
    <Row
      flexDirection={["column", "row"]}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <CenterBox
  data-aos="fade-up"
  bg="secondary"
  width={["400px", "460px"]}
  height={["400px", "550px"]}
  position="relative"
>
  <Box
    width={["350px","500px"]}
    height={["300px", "400px"]}
    position="absolute"
    top="12%"
    left={["7%","16%"]}
    alignItems={"center"}
    justifyContent={"center"}
    borderRadius="s"
    overflow="hidden"
  >
    <Image
      src="/images/bg.jpeg"
      alt="no image"
      width={500}
      height={400}
    />
  </Box>
</CenterBox>
      <Column
        py={"xxxxl"}
        gap={"xxl"}
        width={["100%", "700px"]}
        px={["s", "xl"]}
        data-aos="fade-right"
      >
        <Text variant={"footerHeading"}>About Us</Text>
        <Text variant={"heading"} width={["100%", "600px"]}>
          Beyond Technology Your Competitive Edge for Growth
        </Text>
        <Text variant={"body"} width={["100%", "600px"]}>
          At <span style={{ color: "orange", fontSize: "22px" }}>CodefyU</span>,
          we dont just deliver technology we forge strategic partnerships that
          advance your business. Our client-centric solutions are tailored to
          your vision, ensuring swift, reliable outcomes. Leveraging Indias top
          talent, we provide cutting-edge services that save you time and
          resources, offering end-to-end development for seamless execution,
          here is what you can expect
        </Text>

        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaUsers size={28} fill="black" />
          <Text variant={"heading"}>Client-Centric Approach</Text>
        </Row>
        <Column>
          <Text variant={"body"} width={["100%", "600px"]}>
            {`We don’t just deliver solutions! We tailor them to your vision. Your
            success is our mission For our clients, we break the mold!`}
          </Text>
        </Column>
        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaDollarSign size={28} fill="black" />
          <Text variant={"heading"}>Quality and Savings</Text>
        </Row>
        <Column>
          <Text variant={"body"} width={["100%", "600px"]}>
            Imagine! Getting high-quality tech services without breaking the
            bank. We offer premium services at a fraction of the cost of
            in-house teams.
          </Text>
        </Column>
        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaTools size={28} fill="black" />
          <Text variant={"heading"}>End-to-End Development</Text>
        </Row>
        <Column>
          <Text variant={"body"} width={["100%", "600px"]}>
            From the initial idea to the final product, we handle it all. Enjoy
            seamless execution with our comprehensive solution
          </Text>
        </Column>
        <CenterBox width={["100%", "30%"]}>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxxxl"}
            bg={"primary"}
          >
            {`Lets' Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Row>
  );
};
