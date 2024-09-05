import { CenterBox, Column, Row, Text } from "@/components/styled";
import { TeamCardsProps } from "@/types";
import Image from "next/image";

export const TeamCards: React.FC<TeamCardsProps> = ({ member }) => {
  return (
    <Column width={"370px"} alignItems={"center"} position="relative" >
      <CenterBox width="70%" position={"relative"}>
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={340}
          height={270}
          style={{ borderRadius: "6px" }}
        />

        <Column
          alignItems={"center"}
          justifyContent={"center"}
          bg={"modalOverlayBg"}
          position={"absolute"}
          top={[115, 180]}
          left={["", 0]}
          width={["343px","380px"]}
          gap={"l"}
          py={"m"}
          px={"m"}
          color="white"
          borderBottom={"3px solid green"}
          borderTop={"3px solid green"}
          borderRadius={"s"}
        >
          <Text variant={"heading"}>{member.name}</Text>
          <Text variant={"body"}>{member.role}</Text>
          {/* <Row flexDirection={"row"} gap="m">
            <a
              href={member.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={member.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
          </Row> */}
        </Column>
      </CenterBox>
    </Column>
  );
};
