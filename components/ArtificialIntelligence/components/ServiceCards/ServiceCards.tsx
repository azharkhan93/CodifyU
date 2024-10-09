import { Box, Column, Row, Text } from "@/components";
import { Service4 } from "@/constants";

type ServiceCardProps = {
  service: Service4;
}

export const ServiceCards: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon: Icon, arrowIcon: ArrowIcon, image } = service;

  return (
    <Column
      borderRadius={"m"}
      width={["100%", "600px"]}
      color="textColor"
      py={"xxxl"}
      gap={"xl"}
      position="relative"
      style={{
        backgroundImage: `url(${image})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Column
        position={"relative"}
        px={"m"}
        width={["100%", "490px"]}
        py={["xxl", "xxxl"]}
        gap={"l"}
        bg={"background"}
        borderBottomRightRadius={["s", "xl"]}
        borderTopRightRadius={["s", "xl"]}
        // style={{
        //   background: "rgba(255, 255, 255, 1)",
        // }}
      >
        <Row
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Text variant={"heading"}>{title}</Text>
          <Box
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"circle"}
            py={"m"}
            px={"m"}
            bg={"background"}
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Icon size={38} color="#fb9c42" />
          </Box>
        </Row>

        <Box
          position="absolute"
          bottom={["s", "s"]}
          right={["xl", "xl"]}
          bg={"background"}
          borderRadius={"circle"}
          py={"s"}
          px={"s"}
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ArrowIcon size={30} color="#fb9c42" />
        </Box>

        <Text lineHeight={"1.5"}>{description}</Text>
      </Column>
    </Column>
  );
};

