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
      <Box
        width={"100%"}
        bg={"secondary"}
        style={{
          backgroundImage: "url('/images/ml.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // Make sure this is relative
          height: "auto", // Ensure height adjusts based on content
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          bg={"modalOverlayBg"}
          zIndex={-1}
        />
        <CenterBox
          zIndex={1}
          borderBottom={"2px solid white"}
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
              color={"white"}
              width={["100%", "530px"]}
            >
              Have Any Project Idea! {`Lets's Talk With Us`}
            </Text>
          </Column>
          <Box
            alignItems={"flex-start"}
            justifyContent={"start"}
            position={"relative"}
            bg={"white"}
            py={"s"}
            width={"170px"}
            px={"s"}
            borderRadius={"circle"}
            onClick={openModal}
          >
            <FaArrowRight
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
              }}
            />

            <Button
              borderRadius={"circle"}
              py={"s"}
              px={"xl"}
              onClick={openModal}
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
          <Box
            gap={"xxl"}
            alignItems={["flex-start", "flex-start"]}
            flexDirection={"column"}
          >
            <Text variant="subHeading" color="white">
              Quick Links
            </Text>
            <Row flexDirection={"row"} gap={"xl"}>
              {NavbarData.map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  {item.title}
                </StyledLink>
              ))}
            </Row>
          </Box>
          <Box gap={"xxxl"}>
            <Box alignItems={["flex-start", "flex-start"]}>
              <Text variant={"subHeading"} color={"white"}>
                Contact Us
              </Text>
            </Box>
            <Row
              flexDirection={"row"}
              gap={"xxxl"}
              width={"100%"}
              alignItems={"center"}
              flexWrap={["wrap", "nowrap"]}
            >
              <Text variant={"body"} color="white">
                <a
                  href="tel:+917006168185"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +91 7006168185
                </a>
              </Text>
              <Text variant={"body"}>
                <a
                  href="tel:+917006569557"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  +91 7006569557
                </a>
              </Text>
              <Text variant={"body"}>
                <a
                  href="mailto:info@codefyu.com"
                  style={{ color: "white", textDecoration: "none" }}
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
            <Text variant="subHeading" color="white">
              Follow Us
            </Text>
            <Row flexDirection={"row"} gap={"xl"}>
              <Text variant="body" color="white">
                LinkedIn
              </Text>
              <Text variant="body" color="white">
                Instagram
              </Text>
              <Text variant="body" color="white">
                Facebook
              </Text>
            </Row>
          </Box>
        </Box>
        <CenterBox py={"l"} zIndex={1}>
          <Text variant={"body"} color="white">
            © 2024 CodiFyU. All Rights Reserved
          </Text>
        </CenterBox>
      </Box>
    </>
  );
};
