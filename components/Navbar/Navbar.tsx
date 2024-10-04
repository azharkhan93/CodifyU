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
import { FaChevronDown, FaChevronUp, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { NavbarData } from "@/constants";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index); 
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
    setDropdownOpen(null); 
  };

  return (
    <>
      <Row
        py={"m"}
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
        <Image
          src="/images/logo.svg"
          alt="Logo Missing"
          width={200}
          height={55}
        />

        <Box
          display={["none", "flex"]}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={"xxxxl"}
        >
          {NavbarData.map((item, index) => (
            <Row
              key={index}
              position="relative"
              flexDirection="row"
              gap={"m"}
              alignItems="center"
            >
              <StyledLink onClick={() => navigateTo(item.link)}>
                {item.title}
              </StyledLink>

              {item.dropdown ? (
                <>
                  <Box
                    alignItems={"center"}
                    onClick={() => handleDropdownToggle(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {dropdownOpen === index ? (
                      <FaChevronUp size={17} fill="#fb9c42" />
                    ) : (
                      <FaChevronDown  size={17} fill="#fb9c42" />
                    )}
                  </Box>

                  {dropdownOpen === index ? (
                    <Row
                      justifyContent={"center"}
                      alignItems={"flex-start"}
                      gap={"xl"}
                      flexWrap={"wrap"}
                      py={"xl"}
                      width={"340px"}
                      flexDirection={"column"}
                      position="absolute"
                      top={45}
                      left={-150}
                      bg={"textColor"}
                      borderRadius={"m"}
                      px={"xl"}
                      zIndex={999}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <StyledLink
                          key={subIndex}
                          style={{ color: "white" }}
                          onClick={() => navigateTo(subItem.link)}
                        >
                          {subItem.title}
                        </StyledLink>
                      ))}
                    </Row>
                  ): null}
                </>
              ) : null}
            </Row>
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
          >
            {`Let's Talk`}
          </Button>
        </Box>
      </Row>

      
      <Box
        display={["block", "none"]}
        position="fixed"
        top={25}
        right={20}
        zIndex={9999}
        onClick={handleToggle}
      >
        {isOpen ? (
          <FaTimes size={34} color="#FB9C42" style={{ cursor: "pointer" }} />
        ) : (
          <CgMenuGridO
            size={34}
            color="#FB9C42"
            style={{ cursor: "pointer" }}
          />
        )}
      </Box>

      
      {isOpen ? (
        <>
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          zIndex={9997}
          bg={"Overlay"} 
          />
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
                  <Box key={index} gap={"l"} flexDirection={"row"}
                    position={"relative"}
                  >
                    <StyledLink onClick={() => navigateTo(item.link)}>
                      <Text variant={"body"} color={"white"}>
                        {item.title}
                      </Text>
                    </StyledLink>

                    {item.dropdown ? (
                      <>
                        <Box
                          alignItems={"center"}
                          flexDirection={"row"}

                          onClick={() => handleDropdownToggle(index)}
                          position={"relative"}
                          style={{ cursor: "pointer" }}
                        >
                          {dropdownOpen === index ? (
                            <FaMinus size={17} fill="#fb9c42" />
                          ) : (
                            <FaPlus size={17} fill="#fb9c42" />
                          )}
                        </Box>

                        {dropdownOpen === index ? (
                          <Column position={"absolute"}
                            borderRadius={"m"}
                            px={"m"}
                            py={'xl'}
                            width={'250px'}
                            top={40}
                            left={-40}
                            bg={"textColor"}

                            zIndex={9999}
                            gap={"xl"}

                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <StyledLink
                                key={subIndex}
                                style={{ color: "black" }}
                                onClick={() => navigateTo(subItem.link)}
                              >
                                {subItem.title}
                              </StyledLink>
                            ))}
                          </Column>
                        ) : null}
                      </>
                    ) : null}
                  </Box>
                ))}
              </Column>

              <CenterBox width={"100%"} position={"absolute"} bottom={5} bg={"textColor"} py={"m"}
                borderRadius={"m"}
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
                }}
              >
                <Button
                  borderTopLeftRadius={"xxl"}
                  display={["block", "none"]}
                  variant={"primary"}
                  bg={"primary"}
                  py={"m"}
                  width={"60%"}
                  borderRadius={"m"}
                >
                  Enquire Now
                </Button>
              </CenterBox>
            </AnimatedBox>

          </Box></>
        
      ) : null}
      
    </>
  );
};

