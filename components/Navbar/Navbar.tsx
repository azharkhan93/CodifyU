"use client";
import React, {useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
import { FaTimes } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <>
      <Row
        flexDirection={["row", "row"]}
        px={["m", "xl"]}
        position="fixed"
        top={0}
        width={["100%", "100%"]}
        justifyContent={"space-between"}
        alignItems={"center"}
         bg={"modalOverlayBg"}
        style={{
          zIndex: "100",
           boxShadow: "0px 4px 8px rgba(0, 255, 0, 0.7), 0px 4px 8px rgba(0, 0, 255, 0.7)",
          
        }}
      >
        <CenterBox>
          <Image
            src="/images/logo.png"
            alt="Logo Missing"
            width={80}
            height={80}
          />
        </CenterBox>

        <Box display={["flex", "none"]} flexDirection={"row"} gap={"xl"}>
          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"l"}
          ></Box>

          <Box onClick={handleToggle}>
            <CgMenuGridO size={34} color="white" />
          </Box>
        </Box>

        <Box
          display={["none", "flex"]}
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="xxl"
        >
          {NavbarData.map((item, index) => (
            <StyledLink key={index} onClick={() => navigateTo(item.link)}>
              {item.title}
            </StyledLink>
          ))}
        </Box>
        <Box display={["none", "flex"]} flexDirection={"row"} gap={"xl"}>
          <Button
            variant={"primary"}
            display={["none", "block"]}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxl"}
            bg={"primary"}
          >
            {`Lets' Talk`}
          </Button>
        </Box>

        {isOpen ? (
          <Box
            alignItems={"flex-start"}
            justifyContent={"center"}
            width={"100vw"}
            height={"100vh"}
            // bg="primary"
            zIndex={9999}
            display={["flex", "none"]}
            position="fixed"
            top={0}
            left={0}
            gap={"xxl"}
            px={"xl"}
            style={{
              background: "linear-gradient(147deg, #4d4855 0%, #000000 74%)",
            }}
          >
            <CenterBox position={"absolute"} top={"m"} left={10}>
              <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
            </CenterBox>
            <Box
              position="absolute"
              top={"xxl"}
              right={"xl"}
              onClick={handleToggle}
              bg={"white"}
              py={"s"}
              px={"s"}
              borderRadius={"circle"}
            >
              <FaTimes size={30} color="black" style={{ cursor: "pointer" }} />
            </Box>

            <Column
              alignItems={"flex-start"}
              gap={"xxxl"}
              justifyContent={"center"}
              width={"100%"}
            >
              {NavbarData.map((item, index) => (
                <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                  <Text variant={"body"} color={"white"}>
                    {item.title}
                  </Text>
                </StyledLink>
              ))}
            </Column>
            <CenterBox width={"100%"} mt={"xl"}>
              <Button
                borderTopLeftRadius={"xxl"}
                display={["block", "none"]}
                variant={"primary"}
                bg={"grey"}
                py={"m"}
                px={"xl"}
                borderRadius={"m"}
              >
                Enquire Now
              </Button>
            </CenterBox>
          </Box>
        ) : null}
      </Row>
    </>
  );
};
