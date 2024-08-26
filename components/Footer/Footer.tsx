import {
  Box,
  Button,
  CenterBox,
  Column,
 
  StyledInputBox,
  StyledLink,
  Text,
} from "@/components";
import React, { useState } from "react";

import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { NavbarData } from "@/constants";
import router from "next/router";
import { useRouter } from "next/navigation";

// const navigateTo = (link: string) => {
//   router.push(link);
//   setIsOpen(false);
// };

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
          flexDirection={["column", "row"]}
          px={["s", "xxxl"]}
          mx={["none", "xxxxl"]}
          justifyContent={"space-between"}
          gap={"xxxl"}
        >
          <Column gap={"xl"}>
            <Text
              textAlign={"center"}
              variant={"heading"}
              color={"white"}
              width={"500px"}
            >
              Lets{" "}
              <span style={{ color: "greenyellow", fontSize: "40px" }}>
                Connect
              </span>{" "}
              There
            </Text>
          </Column>
          <Box
            alignItems={"flex-start"}
            justifyContent={"start"}
            position={"relative"}
            bg={"white"}
            py={"s"}
            width={"155px"}
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
              Book know
            </Button>
          </Box>
        </CenterBox>

        <Box
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          width={"100%"}
          py={"xxxxl"}
          gap={"xxl"}
          px={"m"}
        >
          <Column alignItems={"center"} justifyContent={"center"} gap={"xl"}>
            <Box>
              {/* <Image
              src="/images/logo.png"
              alt="Logo Missing"
              width={100}
              height={100}
            /> */}
            </Box>
            <Text variant={"subHeading"} color="white">
              About Company
            </Text>
            <Box
              height={"2px"}
              bg={"white"}
              width={"70%"}
              ml={"header"}
              borderRadius={"circle"}
            ></Box>

            <Text
              color={"white"}
              width={"380px"}
              textAlign={["start", "center"]}
              px={"l"}
            >
              Welcome to where passion meets purpose. We are a dedicated team of
              professionals committed to striving to deliver excellence through
              our. With a strong foundation in,
            </Text>
            <CenterBox gap={"xl"} flexDirection={"row"}>
              <FaInstagram size={25} fill="white" />
              <FaFacebook size={25} fill="white" />
              <FaLinkedin size={25} fill="white" />
            </CenterBox>
          </Column>
          <Box
            gap={"xl"}
            alignItems={["flex-start", "flex-start"]}
            // width={"390px"}
          >
            <CenterBox>
              <Text variant={"subHeading"} color="white">
                Useful Links
              </Text>
              <Box
                height={"2px"}
                bg={"white"}
                width={["60%", "70%"]}
                ml={"header"}
                borderRadius={"circle"}
              ></Box>
            </CenterBox>

            {NavbarData.map((item, index) => (
              <StyledLink key={index} onClick={() => navigateTo(item.link)}>
                {item.title}
              </StyledLink>
            ))}
          </Box>
          <Box gap={"xxxl"}>
            <Box alignItems={["flex-start", "flex-start"]}>
              <Text variant={"subHeading"} color={"white"}>
                Contact Us
              </Text>
              <Box
                height={"2px"}
                bg={"white"}
                width={["40%", "70%"]}
                ml={"header"}
                borderRadius={"circle"}
              ></Box>
            </Box>

            <Column justifyContent={"center"} gap={"xxxl"}>
              <Text variant="body" color="white">
                +91 090-990090
              </Text>
              <Text variant="body" color="white">
                codifyurajbagh@gmail.com
              </Text>
              <Text variant="body" color="white">
                Codifyurajbagh@gmail.com
              </Text>
              <Text variant="body" color="white">
                RajBagh, Srinagar, J&K
              </Text>
            </Column>
          </Box>
          <Box

            gap={["l","xxxxl"]}
            alignItems={["flex-start", "center"]}
            width={"340px"}
            //  px={"xl"}
          >
            <Text variant="subHeading" color="white">
              Subscribe To
            </Text>
            <CenterBox
              position="relative"

            >
              <Box
                flexDirection={"row"}
                position={["relative","absolute"]}
                alignItems={["flex-start", "center"]}
                justifyContent={"center"}
                top="50%"
                gap={"xl"}

              >
                <StyledInputBox width={"260px"}></StyledInputBox>
                <FaArrowRight
                  size={37}
                  fill="white"
                  style={{
                    marginLeft: "-45px",
                    zIndex: "100",
                    background: "black",
                    padding: "4px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            </CenterBox>
          </Box>
        </Box>
      </Box>

      <CenterBox py={"m"} bg={"secondary"}>
        <Text variant={"body"} color={"white"}>
          © 2024 CodiFyU. All Rights Reserved
        </Text>
      </CenterBox>
    </>
  );
};
