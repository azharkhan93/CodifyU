"use client";
import { useLogos } from "@/hooks/useAnimations";
import { Row, Box, CenterBox, Column, Text } from "../styled";
import { Logos } from "./components/Logos";
import { PARTNER_LOGOS } from "@/constants";
import { motion } from "framer-motion";

const MotionRow = motion.create(Row);

export const Partners = () => {
  const logosAnimation = useLogos();

  return (
    <>
      <Column mt={"l"} width={"100%"}>
        <Column py={"xl"} gap={"xl"} width={["100%", "900px"]}>
          <Text variant={"heading"}>Collaboration with Industry Leaders</Text>
          <Text variant={"body"}>
          {`We are honored to have worked with some of the industry's most distinguished and innovative companies.`}
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
            <MotionRow
              flexDirection={["row", "row"]}
              gap={["xxxxl", "xxxl"]}
              {...logosAnimation}
            >
              {PARTNER_LOGOS.concat(PARTNER_LOGOS).map((logo, index) => (
                <Logos key={index} src={logo.src} alt={logo.alt} />
              ))}
            </MotionRow>
          </CenterBox>
        </Row>
      </Column>
    </>
  );
};

// style={{background: "radial-gradient(circle,#ffffff,#f0f0f0,#d0d0d0, #b0b0b0)"}}
