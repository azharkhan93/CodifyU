"use client";
import { Test } from "../Test";
import { Column, Box, CenterBox, Text, Row } from "../styled";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ContactItems } from "./components/ContactItems";
import { contactData } from "@/constants";

export const ContactSection = () => {
  return (
    <Column flexDirection={["column", "row"]} mt={"xlg"}>
      <Box
        py={"xxxl"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
      >
        <Column gap={["xl", "m"]}>
          <Text variant={"heading"} textAlign={["center","start"]}>Any Queries? Talk To Us!</Text>
          <Text variant={"body"} width={["100%", "670px"]} lineHeight={"1.5"} textAlign={["center", "start"]}>
            Our Team model offers a proven pathway to success. Our team is ready
            to provide client references, estimate your project, or answer any
            other queries.
          </Text>

          <Column py={"xxxl"} gap={"xxxxl"}>
            {contactData.map(({ id, icon, text }) => (
              <ContactItems key={id} icon={icon} text={text} />
            ))}

            <CenterBox
              borderRadius={"circle"}
              py={"l"}
              width={"100%"}
              borderTop={"1.8px solid #fb9c42 "}
              gap={"xl"}
            >
              <Text variant={"subHeading"}>Follow Us On</Text>
              <Row gap={"xl"} flexDirection={"row"}>
                
                <a
                  href="https://www.instagram.com/codefyutech/profilecard/?igsh=MWZrMm5ndm5nd2Nubg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black", }}
                >
                  <FaInstagram size={32} fill="#fb9c42" />
                </a>
                <a
                  href="https://www.linkedin.com/company/codefyu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <FaLinkedin size={32} fill="#fb9c42" />
                </a>

                {/* <FaGithub size={32} fill="#fb9c42" /> */}
              </Row>
            </CenterBox>
          </Column>
        </Column>

        <Test onActionComplete={() => console.log("Form submitted!")} />
      </Box>
    </Column>
  );
};
