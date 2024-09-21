"use client";
import { Test } from "../Test";
import { Column, Box, CenterBox, Text, Row } from "../styled";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export const ContactSection = () => {
  return (
    <Column flexDirection={["column", "row"]}>
      <Box
        mt={"xlg"}
        py={"xxxl"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={"l"}
      >
        <Column gap={["xl", "m"]}>
          <Text variant={"heading"}>
            Any Queries? Talk To Us!
          </Text>
          <Text variant={"body"} width={["100%", "670px"]} lineHeight={"1.5"}>
            Our Team model offers a proven pathway to success. Our team is ready
            to provide client references, estimate your project, or answer any
            other queries.
          </Text>

          <Column py={"xxxl"} gap={"xxxxl"}>
            {/* Phone Number */}
            <Row gap="xl" alignItems="center" flexDirection={"row"}>
              <FaPhoneAlt size={25} fill="#fb9c42" />
              <Text variant={"subHeading"}>+91 6005493028</Text>
            </Row>
            <Row gap="xl" alignItems="center" flexDirection={"row"}>
              <FaPhoneAlt size={25} fill="#fb9c42" />
              <Text variant={"subHeading"}>+91 60058990</Text>
            </Row>

            {/* Email */}
            <Row gap="xl" alignItems="center" flexDirection={"row"}>
              <FaEnvelope size={25} fill="#fb9c42" />
              <Text variant={"subHeading"}>hellocodefyU@gmail.com</Text>
            </Row>

            {/* Location */}
            <Row gap="xl" alignItems="center" flexDirection={"row"}>
              <FaMapMarkerAlt size={25} fill="#fb9c42" />
              <Text variant={"subHeading"}>RajBagh Near Hurriyat Office, Srinagar</Text>
            </Row>

            {/* Social Icons */}
            <CenterBox>
              <Row gap={"xl"} flexDirection={"row"}>
                <FaFacebook size={24} fill="#fb9c42" />
                <FaInstagram size={24} fill="#fb9c42" />
                <FaLinkedin size={24} fill="#fb9c42" />
                <FaGithub size={24} fill="#fb9c42" />
              </Row>
            </CenterBox>
          </Column>
        </Column>

        {/* Form Component */}
        <Test onActionComplete={() => console.log("Form submitted!")} />
      </Box>
    </Column>
  );
};

