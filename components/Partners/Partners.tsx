"use client";
import { Row, Box, CenterBox,  Text, Column, Flock } from "../styled";
import { Logos } from "./components/Logos";
import { PARTNER_LOGOS } from "@/constants";

export const Partners = () => {
  return (

    <>
    <Column
    mt={"l"}
    width={"100%"}
    //  bg={"newcolor1"}
  >
    
    
    
      <Column px={["s", "xl"]} py={"xl"} gap={"xl"} width={["100%","900px"]}
      

      >
        <Text variant={["heading","footerHeading"]}>Our Partners</Text>
        <Text variant={"body"}>
          We are proud to collaborate with some of the most innovative and
          esteemed companies in the industry.
        </Text>
      </Column>
      <Row
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        py={"xxxxl"}
     
      >
        <CenterBox
          flexDirection={["column", "row"]}
          width={["100%", "80%"]}
          gap={"xl"}
          overflow={"hidden"}

        >
          <Flock flexDirection={["row", "row"]} gap={["xxxxl", "xxxl"]}>
            {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
              <Logos key={index} src={logo.src} alt={logo.alt} size={logo.size} />
            ))}
          </Flock>
          
        </CenterBox>
      </Row>
      </Column>
    </>
  );
};

// style={{background: "radial-gradient(circle,#ffffff,#f0f0f0,#d0d0d0, #b0b0b0)"}}