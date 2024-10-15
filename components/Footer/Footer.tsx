import {
  BackToTop,
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
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
              width={["100%", "600px"]}
            >
              Have Any Project Idea? {`Let's Talk!`}
            </Text>
          </Column>
          <Box
            bg={"primary"}
            alignItems={"flex-start"}
            justifyContent={"start"}
            position={"relative"}
            py={"s"}
            width={"180px"}
            px={"m"}
            borderRadius={"circle"}
            // onClick={openModal}
          >
            <FaArrowRight
              style={{
                color: "#fb9c42",
                position: "absolute",
                right: "2px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "23px",
              }}
            />
            <Link href="/contact" passHref style={{ textDecoration: "none" }}>

            <Button
              variant="primary"
              borderRadius={"circle"}
              py={"s"}
              px={"xl"}
              // onClick={openModal}
              bg={"textColor"}
            >
              Get In Touch
            </Button>
            </Link>
          </Box>
        </CenterBox>
        <CenterBox width={"100%"} py={"xl"}>
          <Link href="/" passHref style={{ textDecoration: "none" }}>
            <Image
              src="/images/logo.svg"
              alt="Logo Missing"
              width={230}
              height={100}
            />
          </Link>
        </CenterBox>

        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          py={"xxxxl"}
          gap={"xxl"}
          px={"l"}
          borderBottom={"2px solid #fb9c42"}
        >
          <Box gap={"xxl"} alignItems={"flex-start"} width={["100%", "450px"]}>
            <Text variant="subHeading">Quick Links</Text>
            <Row
              flexDirection={"row"}
              gap={"xl"}
              flexWrap={"wrap"}
              alignItems={"center"}
            >
              {NavbarData.map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  <Row alignItems={"center"} flexDirection={"row"} gap={"l"}>
                    <item.icon size={20} fill="#fb9c42" />
                    {item.title}
                  </Row>
                </StyledLink>
              ))}
            </Row>
          </Box>
          <Box gap={"xxxl"} width={["100%", "540px"]} flexWrap={"wrap"}>
            <Box alignItems={["flex-start", "flex-start"]}>
              <Text variant={"subHeading"}>Contact Us</Text>
            </Box>

            <Row
              flexDirection={"row"}
              gap={"xxxl"}
              alignItems={"center"}
              flexWrap={["wrap", "nowrap"]}
            >
              <Text
                variant={"body"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaPhoneAlt style={{ marginRight: "8px" }} fill="#fb9c42" />
                <a
                  href="tel:+917006168185"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 9515888396
                </a>
              </Text>
              <Text
                variant={"body"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaPhoneAlt style={{ marginRight: "8px" }} fill="#fb9c42" />
                <a
                  href="tel:+917006569557"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 7780892868
                </a>
              </Text>
              <Text
                variant={"body"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaEnvelope style={{ marginRight: "8px" }} fill="#fb9c42" />
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
          width={["100%", "300px"]}
            gap={"xxl"}
            alignItems={["flex-start", "flex-start"]}
            flexDirection={"column"}
          >
            <Text variant="subHeading">Follow Us</Text>
            <Row flexDirection={"row"} gap={"xl"}>
              <Text
                variant="body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaLinkedin style={{ marginRight: "8px" }} fill="#fb9c42" />
                <a
                  href="https://www.linkedin.com/company/codefyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LinkedIn
                </a>
              </Text>

              <Text
                variant="body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaInstagram style={{ marginRight: "8px" }} fill="#fb9c42" />
                <a
                  href="https://www.instagram.com/codefyutech/profilecard/?igsh=MWZrMm5ndm5nd2Nubg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Instagram
                </a>
              </Text>

              <Text variant="body">
                <a
                  href="https://www.facebook.com/codefyutech"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "0",
                  }}
                >
                  Facebook
                </a>
              </Text>
            </Row>
          </Box>
        </Box>
        <CenterBox py={"l"} zIndex={1}>
          <Text variant={"body"}>
            © 2024{" "}
            <span
              style={{
                color: "#fb9c42",
                fontSize: "22px",
                fontFamily: "ComfortaaMedium",
              }}
            >
              codefyU{" "}
            </span>
            All Rights Reserved
          </Text>
        </CenterBox>
        <BackToTop />
      </Box>
    </>
  );
};
