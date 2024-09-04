import { Box, Button, CenterBox, Column, Row, Text } from "../styled";
import { StatsCards } from "./components/StatsCards";
import { STATS_DATA, VALUES_DATA } from "@/constants";
import { ValueCards } from "./components/ValueCards";

export const OurValues = () => {
  return (
    <>
      <Row
        data-aos="fade-up"
        px={["m", "xxl"]}
        width={"100%"}
        // border={"2px solid red"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          // ref={refColumn}
          // isInView={isInViewColumn}
          py={"xl"}
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={["100%", "45%"]}
        >
          <Text variant={["heading", "footerHeading"]} >Why <span style={{ color: "orange", fontSize: "42px" }}>CodefyU</span>?</Text>
          <Text variant={"body"}>
            We have succcessfully delivered over 200 projects over the last
            8years collectively generating a value of <span style={{color: "orange", fontSize: "20px"}}>$200million</span>. High-Quality
            tech solutions without high costs.{" "}
          </Text>
          <Text
          variant={"body"}
          >
            Our startup accelator program is your launchpad to
            success. Fast-Track your market entry and expansion with our proven
            strategies
          </Text>
        </Column>

        <Column
          alignItems={"center"}
          justifyContent={"center"}
          py={"xl"}
          data-aos="fade-right"
        >
          <Row
            data-aos="fade-right"
            alignItems="center"
            //  border={"2px solid black"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={"xxxl"}
            width={["350px", "550px"]}
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
      <Box
        data-aos="fade-up"
        width={["100%", "90%"]}
        flexDirection={["column", "row"]}
        gap={["xxxxl", "xlg"]}
        py={"xxxl"}
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

      <CenterBox py={"xxxl"}>
        <Text
          bg="secondary"
          variant={"subHeading"}
          px={"xl"}
          py={"m"}
          borderRadius={"s"}
          style={{ cursor: "pointer" }}
        >
          Share Your Project Requirements
        </Text>
        {/* </Button> */}
      </CenterBox>
    </>
  );
};
