import { Button, CenterBox, Column, Row, Text } from "@/components/styled";
import Image from "next/image";
import { FaAward } from "react-icons/fa";

export const AboutCards = () => {
  return (
    <Row
      flexDirection={["column", "row"]}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <CenterBox
        bg={"secondary"}
        width={"500px"}
        height={"550px"}
        position={"relative"}
      >
        <Image
          src={"/images/bg.jpeg"}
          alt="no image"
          width={500}
          height={400}
          style={{
            position: "absolute",
            top: "50%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            borderRadius: "6px",
          }}
        />
      </CenterBox>
      <Column py={"xxxxl"} gap={"xxl"} width={"700px"} px={"xl"}>
        <Text variant={"heading"}>About Us</Text>
        <Text variant={"heading"}>We Are Award Wining Digital Agency</Text>
        <Text variant={"body"} width={"500px"}>
          We Are Award Wining Digital Agency We Are Award Wining Digital Agency
          We Are Award Wining Digital Agency We Are Award Wining Digital Agency
        </Text>

        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaAward size={24} fill="black" />
          <Text variant={"heading"}>Award winning Digital Agency</Text>
        </Row>
        <Column>
          <Text>short dscription for heading award winng digtal agency</Text>
        </Column>
        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaAward size={24} fill="black" />
          <Text variant={"heading"}>Award winning Digital Agency</Text>
        </Row>
        <Column>
          <Text>short dscription for heading award winng digtal agency</Text>
        </Column>
        <Row flexDirection={"row"} gap={"m"} alignItems={"center"}>
          <FaAward size={24} fill="black" />
          <Text variant={"heading"}>Award winning Digital Agency</Text>
        </Row>
        <Column>
          <Text>short dscription for heading award winng digtal agency</Text>
        </Column>
        <CenterBox width={"30%"}>
          <Button
            variant={"primary"}
            py={"m"}
            borderTopRightRadius={"m"}
            borderBottomLeftRadius={"m"}
            px={"xxxxl"}
            bg={"primary"}
          >
            {`Lets' Talk`}
          </Button>
        </CenterBox>
      </Column>
    </Row>
  );
};
