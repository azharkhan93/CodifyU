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
import { NavbarData, contactDetails } from "@/constants";
import { useRouter } from "next/navigation";
import { useModal } from "@/contexts";
import Map from "../NewMap";

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
          py={["xl", "xxl"]}
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

        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          py={["xl", "xxxxl"]}
          gap={["xxxxl", "xxl"]}
          px={"l"}
          borderBottom={"2px solid #fb9c42"}
        >
          <Box width={["100%", "550px"]} alignItems={"center"}>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Image
                src="/images/logo.svg"
                alt="Logo Missing"
                width={230}
                height={100}
              />
            </Link>
            <Text
              variant={"body"}
              lineHeight={"1.5"}
              textAlign={"center"}
            >
              Startup Accelerator: Seamless Tech Solutions that Scale
            </Text>
          </Box>

          <Box gap={"xxl"} width={["100%", "600px"]}>
            <Text
              variant="heading"
              textAlign={["start", "center"]}
              fontWeight={"bold"}
            >
              Quick Links
            </Text>
            <Row
              flexDirection={"column"}
              gap={"xl"}
              flexWrap={"wrap"}
              alignItems={["flex-start", "center"]}
            >
              {NavbarData.slice(0, 3).map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  <Row alignItems={"center"} flexDirection={"row"} gap={"l"} style={{fontFamily: "ComfortaaMedium"}} >
                    <item.icon size={20} fill="#fb9c42" />
                    {item.title}
                  </Row>
                </StyledLink>
              ))}
            </Row>
          </Box>

          <Box gap={"xxxl"} width={["100%", "400px"]} flexWrap={"wrap"}>
            <Text
              variant="heading"
              textAlign={["start", "center"]}
              fontWeight={"bold"}
            >
              Contact Us
            </Text>

            <Row
              flexDirection={"column"}
              gap={"xxxl"}
              alignItems={["flex-start", "center"]}
              flexWrap={["wrap", "nowrap"]}
            >
              {contactDetails.map((detail, index) => (
                <Row
              
                  key={index}
                  flexDirection={"row"}
                  width={"200px"}
                  gap={"l"}
                  alignItems={"center"}
                 
                >
                  <Box>
                    {detail.icon === "phone" ? (
                      <FaPhoneAlt
                        fill="#fb9c42"
                        
                      />
                    ) : (
                      <FaEnvelope
                        fill="#fb9c42"
                        style={{ marginRight: "8px" }}
                      />
                    )}
                  </Box>
                  <Text variant={"body"} >
                    <a
                      href={detail.href}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontFamily: "ComfortaaMedium",
                      }}
                    >
                      {detail.contact}
                    </a>
                  </Text>
                </Row>
              ))}
            </Row>
          </Box>
          <Box
            width={["100%", "400px"]}
            gap={"xxl"}
            alignItems={["flex-start", "center"]}
            flexDirection={"column"}
          >
            <Text
              variant="heading"
              textAlign={["start", "center"]}
              fontWeight={"bold"}
            >
              Follow Us
            </Text>
            <Row flexDirection={"column"} gap={"xl"}>
              <Text
                variant="body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FaLinkedin style={{ marginRight: "8px" }} fill="#fb9c42" />
                <a
                  href="https://www.linkedin.com/company/codefyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black", fontFamily: "ComfortaaMedium", }}
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
                  style={{ textDecoration: "none", color: "black", fontFamily: "ComfortaaMedium", }}
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
          {/* <Box gap={"xxl"} alignItems={"center"} width={["100%", "480px"]} >
           <Map />
          </Box> */}
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
