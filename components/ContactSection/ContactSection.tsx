"use client";

import { Test } from "../Test";
import { Column, Box, CenterBox, Text, Row } from "../styled";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ContactDetailsCards } from "./components/ContactDetailsCard/ContactDeatilsCards";

export const ContactSection = () => {
  return (
    <Column
    //   bg={"primary"}
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
    >
      <Box
      py={'xxxl'}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text color={"secondary"} variant={"heading"} fontWeight={"bold"}>
            Contact Us
          </Text>
          <Box
            height={"3px"}
            bg={"secondary"}
            width={"70%"}
            ml={"header"}
            borderRadius={"circle"}
          ></Box>
          <Text color={"secondary"} variant={"subHeading"}>
            Any Queries Talk To Us?
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text color={"secondary"} variant={"body"}>
            Our Team model offers a proven pathway to success, supported by
            comprehensive training programs and continuous operational support.
            Join a brand that is dedicated to helping you thrive in a
            competitive market
          </Text>
        </CenterBox>
      </Box>

      <CenterBox
        py={"xxxxl"}
        flexDirection={["column", "row"]}
        width={["100%","90%"]}
        px={["none", "xxxxl"]}
      >
        <Test onActionComplete={() => console.log("Form submitted!")} />
        <Box
          mt={"header"}
          bg={"grey"}
          alignItems={"center"}
          gap={"xxxl"}
          py={"header"}
          px={"m"}
          borderRadius={"m"}
          width={["100%","700px"]}
        >
          <ContactDetailsCards
            title="Address"
            content="Rajbagh Srinagar, Near Hurriyat Office 190001"
          />
          <ContactDetailsCards
            title="Contact"
            content={
              <>
                <Column
                gap={'s'}
                >
                  <Text variant={"body"}>Phone: +91 699988998877</Text>
                  {/* <br> */}
                  <Text variant={"body"}>Email: azjhkshhjk@codifyu.com</Text>
                </Column>
              </>
            }
          />
          <ContactDetailsCards
            title="Open Time"
            content="Mon-Fri 10:00AM to 12:00PM"
          />

          <Column gap={"m"} width={"100%"}>
            <Text variant={"heading"}>Stay Connected</Text>
            <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaLinkedin size={24} />
              <FaGithub size={24} />
            </Row>
          </Column>
        </Box>
      </CenterBox>
    </Column>
  );
};
