import { Box, Button, CenterBox, Column, Row, Text } from "@/components/styled";
import Image from "next/image";
import { FeaturedCards } from "../FeaturedCards";
import { featuredData } from "@/constants";
export const AboutCards = () => {
  return (
    <Row
      flexDirection={["column", "row"]}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <CenterBox
      borderRadius={"m"}
        bg="textColor"
        width={["400px", "460px"]}
        height={["400px", "550px"]}
        position="relative"
      >
        <Box
          width={["410px", "600px"]}
          height={["300px", "400px"]}
          position="absolute"
          top={["13%","12%"]}
          left={["0%", "16%"]}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius="s"
          overflow="hidden"
        >
          <Image
            src="/images/aboutimg.png"
            alt="no image"
            width={600}
            height={400}
          />
        </Box>
      </CenterBox>
      <Column
        py={"xxxxl"}
        gap={"xxl"}
        width={["100%", "700px"]}
        px={["s", "xl"]}

      >
        <Text variant={["heading", "footerHeading"]}>About Us</Text>
        <Text variant={["subHeading", "heading"]} width={["100%", "600px"]}>
          Beyond Technology Your Competitive Edge for Growth
        </Text>
        <Text variant={"body"} width={["100%", "600px"]} lineHeight={"1.5"}>
          At CodefyU we dont just deliver technology we forge strategic
          partnerships that advance your business. Our client-centric solutions
          are tailored to your vision, ensuring swift, reliable outcomes.
          Leveraging Indias top talent, we provide cutting-edge services that
          save you time and resources, offering end-to-end development for
          seamless execution, here is what you can expect
        </Text>

        {featuredData.map(({ id, icon, title, description }) => (
          <FeaturedCards
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
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
