import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { NavbarData } from "@/constants";
import { useRouter } from "next/navigation";
import { useModal } from "@/contexts";

export const Footer = () => {
  const router = useRouter();
  const { openModal } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <>
      <Box width={"100%"}>
        <CenterBox
          zIndex={1}
          borderBottom={"2px solid #fb9c42"}
          py={["xxxl", "xxl"]}
          flexDirection={["column", "column"]}
          px={["s", "xxxl"]}
          mx={["none", "xxxxl"]}
          justifyContent={"space-between"}
          gap={["xxxxl", "xxxl"]}
        >
          <Column gap={"xl"}>
            <Text
              textAlign={"center"}
              variant={["heading", "footerHeading"]}
              width={["100%", "690px"]}
            >
              Have Any Project Idea! {`Lets's Talk With Us`}
            </Text>
          </Column>
          <Box
            bg={"primary"}
            alignItems={"flex-start"}
            justifyContent={"start"}
            position={"relative"}
            py={"s"}
            width={"170px"}
            px={"s"}
            borderRadius={"circle"}
            onClick={openModal}
          >
            <FaArrowRight
              style={{
                color: "#fb9c42",
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
              }}
            />

            <Button
              variant="primary"
              borderRadius={"circle"}
              py={"s"}
              px={"xl"}
              onClick={openModal}
              bg={"textColor"}
            >
              Get In Touch
            </Button>
          </Box>
        </CenterBox>

        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          width={"100%"}
          py={"xxxxl"}
          gap={"xxl"}
          px={"l"}
          borderBottom={"2px solid white"}
        >
          <Box gap={"xxl"} alignItems={"flex-start"}>
            <Text variant="subHeading">Quick Links</Text>
            <Row flexDirection={"row"} gap={"xl"} flexWrap={"wrap"}>
              {NavbarData.map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  {item.title}
                </StyledLink>
              ))}
            </Row>
          </Box>
          <Box gap={"xxxl"}>
            <Box alignItems={["flex-start", "flex-start"]}>
              <Text variant={"subHeading"}>Contact Us</Text>
            </Box>
            <Row
              flexDirection={"row"}
              gap={"xxxl"}
              width={"100%"}
              alignItems={"center"}
              flexWrap={["wrap", "nowrap"]}
            >
              <Text variant={"body"}>
                <a
                  href="tel:+917006168185"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 7006168185
                </a>
              </Text>
              <Text variant={"body"}>
                <a
                  href="tel:+917006569557"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 7006569557
                </a>
              </Text>
              <Text variant={"body"}>
                <a
                  href="mailto:info@codefyu.com"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  info@codefyu.com
                </a>
              </Text>
            </Row>
          </Box>
          <Box
            gap={"xxl"}
            alignItems={["flex-start", "flex-start"]}
            flexDirection={"column"}
          >
            <Text variant="subHeading">Follow Us</Text>
            <Row flexDirection={"row"} gap={"xl"}>
              <Text variant="body">LinkedIn</Text>
              <Text variant="body">Instagram</Text>
              <Text variant="body">Facebook</Text>
            </Row>
          </Box>
        </Box>
        <CenterBox py={"l"} zIndex={1}>
          <Text variant={"body"}>© 2024 codefyU. All Rights Reserved</Text>
        </CenterBox>
      </Box>
    </>
  );
};
