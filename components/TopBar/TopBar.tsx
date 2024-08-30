import { Box, CenterBox, Column, Row, Text } from "../styled";

interface TopNavBarProps {
  backgroundImage: string;
  aboutText: string;
  whoWeAreText: string;
}

export const TopBar: React.FC<TopNavBarProps> = ({
  backgroundImage,
  aboutText,
  whoWeAreText,
}) => {
  return (
    <Column
      alignItems={"start"}
      justifyContent={"center"}
      height={"470px"}
      width={"100%"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Column px={"xl"} mt={"header"} py={"xxlg"} width={"100%"} gap={"xxxl"}>
        <Row alignItems={"center"} gap={"m"}>
          <Box
            height={"3px"}
            bg={"primary"}
            width={["23%", "5%"]}
            borderRadius={"circle"}
          ></Box>
          <Text variant={"heading"} color={"primary"} fontWeight={"extraBold"}>
            {aboutText}
          </Text>
        </Row>
        <Row alignItems={"center"} gap={"m"}>
          <Text variant={"heading"} color="primary" fontWeight={"bold"}>
            {whoWeAreText}
          </Text>
          <Box
            height={"3px"}
            bg={"primary"}
            width={["30%", "8%"]}
            borderRadius={"circle"}
          ></Box>
        </Row>
      </Column>
    </Column>
  );
};
