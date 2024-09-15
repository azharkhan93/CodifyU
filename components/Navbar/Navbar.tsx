"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatedBox,
  Box,
  Button,
  CenterBox,
  Column,
  Row,
  StyledLink,
  Text,
} from "@/components";
import { CgMenuGridO } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { NavbarData } from "@/constants";
import Image from "next/image";



export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
     
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        bg={isScrolled ? "white" : "transparent"} 
        style={{
          zIndex: "100",
          transition: "background-color 0.3s ease", 
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

        <Box
          display={["none", "flex"]}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="xxxxl"
        >
          {NavbarData.map((item, index) => (
            <StyledLink key={index} onClick={() => navigateTo(item.link)}>
            
              {item.title}
            </StyledLink>
          ))}
        </Box>

        <Box display={["none", "flex"]} flexDirection={"row"} gap={"xl"}>
          <Button
            variant="primary"
            display={["none", "block"]}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxl"}
            bg={"black"}
            // bg={"primary"}
          >
            {`Let's Talk`}
          </Button>
        </Box>
      </Row>

      <Box
        display={["block", "none"]}
        position="fixed"
        top={20}
        right={20}
        zIndex={9999}
        onClick={handleToggle}
      >
        {isOpen ? (
          <FaTimes
            size={34}
            color="#FB9C42"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <CgMenuGridO
            size={34}
            color="#FB9C42"
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>

     
      {isOpen ? (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          zIndex={9998}
          display="flex"
          alignItems="center"
          justifyContent="center"
          // style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <AnimatedBox
            isOpen={isOpen}
            borderRadius={"m"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height={"80vh"}
            zIndex={9999}
            display={["flex", "none"]}
            position="fixed"
            top={10}
            left={0}
            gap={"xxl"}
            style={{
              background: "linear-gradient(147deg, #4d4855 0%, #000000 74%)",
            }}
          >
          

            <Column
              alignItems={"center"}
              gap={"xxxl"}
              justifyContent={"center"}
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
                bg={"bluegradient"}
                py={"m"}
                px={"xl"}
                borderRadius={"m"}
              >
                Enquire Now
              </Button>
            </CenterBox>
          </AnimatedBox>
        </Box>
      ): null}
    </>
  );
};


