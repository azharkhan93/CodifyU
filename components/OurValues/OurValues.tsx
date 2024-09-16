import { Box,Column, Row, Text } from "../styled";
import { StatsCards } from "./components/StatsCards";
import { STATS_DATA, VALUES_DATA } from "@/constants";
import { ValueCards } from "./components/ValueCards";

export const OurValues = () => {
  return (
    <>
      <Row
        data-aos="fade-up"
        width={"100%"}
        
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
      >
        <Column
          py={"xl"}
          gap={"xxl"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={["100%", "43%"]}
        >
          <Text variant={["heading", "footerHeading"]} textAlign={["start","center"]} >Why <span style={{ color: "orange", fontSize: "42px" }}>CodefyU</span>?</Text>
          <Text variant={"body"} lineHeight={"1.5"} textAlign={["start","center"]}>
            We have succcessfully delivered over 200 projects over the last
            8years collectively generating a value of <span style={{color: "orange", fontSize: "20px"}}>$200million</span>. High-Quality
            tech solutions without high costs.{" "}
          </Text>
          <Text
          variant={"body"}
          lineHeight={"1.5"}
          textAlign={["start","center"]}
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
          width={["98%", "700px"]}
        >
          <Row
            data-aos="fade-right"
            alignItems="center"
            justifyContent={"center"}
            
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={"xxxl"}
            py={"xl"}
          > 
            
             {VALUES_DATA.map((value) => (
              <ValueCards
                key={value.id}
                title={value.title}
                title2={value.title2}
                icon={value.icon}
              />
            ))} 
           </Row>
        </Column>
      </Row>
      <Box
        data-aos="fade-up"
        width={["100%", "100%"]}
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

    </>
  );
};