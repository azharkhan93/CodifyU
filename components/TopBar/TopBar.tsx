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
      height={"480px"}
      width={"100%"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Column px={"xl"} mt={"header"} py={"xxlg"} width={"100%"} gap={"xxxl"}>
        <Row alignItems={"flex-start"} gap={"m"}>
          <Box
            height={"3px"}
            bg={"greenish"}
            width={["45%", "13%"]}
            borderRadius={"circle"}
          ></Box>
          <Text variant={"footerHeading"} color="greenish" fontWeight={"extraBold"}>
            {aboutText}
          </Text>
        </Row>
        <Row alignItems={"flex-start"} gap={"m"}>
          <Text variant={"heading"} color="greenish" fontWeight={"bold"}>
            {whoWeAreText}
          </Text>
          <Box
            height={"3px"}
            bg={"greenish"}
            width={["35%", "8%"]}
            borderRadius={"circle"}
            ml={"xlg"}
          ></Box>
        </Row>
      </Column>
    </Column>
  );
};
