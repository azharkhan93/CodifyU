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

import {
  FaArrowRight,
} from "react-icons/fa";
import { NavbarData } from "@/constants";
import { useRouter } from "next/navigation";


export const Footer = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };
  return (
    <>
      <Box width={"100%"} bg={"secondary"} mt={"m"}>
        <CenterBox
          borderBottom={"2px solid white"}
          py={"xxl"}
          flexDirection={["column", "column"]}
          px={["s", "xxxl"]}
          mx={["none", "xxxxl"]}
          justifyContent={"space-between"}
          gap={"xxxl"}
        >
          <Column gap={"xl"}>
            <Text
              textAlign={"center"}
              variant={["heading","footerHeading"]}
              color={"white"}
              width={["100%","530px"]}
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
            <Button borderRadius={"circle"} py={"s"} px={"xl"}>
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
            <Text variant="heading" color="white">
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
            <Row flexDirection={"row"} gap={"xl"}>
              <Text variant="body" color="white">
                +91 090-990090
              </Text>
              <Text variant="body" color="white">
                codifyu123@gmail.com
              </Text>
            </Row>
          </Box>
          <Box
            gap={"xxl"}
            alignItems={["flex-start", "flex-start"]}
            flexDirection={"column"}
          >
            <Text variant="heading" color="white">
              Follow Us
            </Text>
            <Row flexDirection={"row"} gap={"xl"}>
              <Text variant="body" color="white">
                LinkdIn
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
      </Box>

      <CenterBox py={"l"} bg={"secondary"}>
        <Text variant={"body"} color={"white"}>
          © 2024 CodiFyU. All Rights Reserved
        </Text>
      </CenterBox>
    </>
  );
};
