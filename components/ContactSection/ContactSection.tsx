"use client";
import { Test } from "../Test";
import { Column, Box, CenterBox, Text, Row } from "../styled";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ContactDetailsCards } from "./components/ContactDetailsCard/ContactDetailsCards";

export const ContactSection = () => {
  return (
    <Column flexDirection={["column", "row"]} py={["xxl", "header"]}>
      <Box
        py={"xxxl"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
        px={"xl"}
      >
        <Column gap={["xl", "m"]}>
          <Text color={"secondary"} variant={["heading", "footerHeading"]} >
            Any Queries Talk To Us?
          </Text>

          <Text color={"secondary"} variant={["subHeading","heading"]} textAlign={["center","center"]}>
            Have a question to our team or need help with your project?
          </Text>
        </Column>

        <CenterBox width={["100%", "450px"]}>
          <Text color={"secondary"} variant={"body"}>
            Our Team model offers a proven pathway to success, Our team is ready
            to provide client references, estimate your project, or answer any
            other question related to your IT initiative.
          </Text>
        </CenterBox>
      </Box>

      <CenterBox
        py={"xxxxl"}
        flexDirection={["column", "row"]}
        width={["100%", "90%"]}
        px={["none", "xxxxl"]}
      >
        <Test onActionComplete={() => console.log("Form submitted!")} />
        <Box
          data-aos="fade-right"
          mt={["l", "header"]}
          bg={"grey"}
          alignItems={"center"}
          gap={"xxxl"}
          py={"header"}
          px={"m"}
          borderRadius={"m"}
          width={["97%", "700px"]}
        >
          <ContactDetailsCards
            title="Address"
            content="Rajbagh Near Hurriyat Office Kursoo Rajbagh Srinagar Jammu and Kashmir 190008 India"
          />
          <ContactDetailsCards
            title="Contact"
            content={
              <>
                <Column gap={"s"}>
                  <Text variant={"body"}>
                    <a
                      href="tel:+917006168185"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Phone: +91 7006168185
                    </a>
                  </Text>
                  <Text variant={"body"}>
                    <a
                      href="tel:+917006569557"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Phone: +91 7006569557
                    </a>
                  </Text>
                  <Text variant={"body"}>
                    <a
                      href="mailto:info@codefyu.com"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Email: info@codefyu.com
                    </a>
                  </Text>
                </Column>
              </>
            }
          />
          <ContactDetailsCards
            title="Open Time"
            content="Mon-Sat 09:00AM To 05:00PM"
          />

          <Column gap={"m"} width={"100%"}>
            <Text variant={"subHeading"}>Stay Connected</Text>
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
