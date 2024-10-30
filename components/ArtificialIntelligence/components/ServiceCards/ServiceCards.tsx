import { Box, Column, Row, Text } from "@/components";
import { Service4 } from "@/constants";
import { useModal } from "@/contexts";

type ServiceCardProps = {
  service: Service4;
};

export const ServiceCards: React.FC<ServiceCardProps> = ({ service }) => {
  const { openModal } = useModal();
  const {
    title,
    description,
    icon: Icon,
    arrowIcon: ArrowIcon,
    image,
  } = service;

  return (
    <Column
      borderRadius={"m"}
      width={["100%", "600px"]}
      color="textColor"
      py={"xxxl"}
      gap={"xl"}
      position="relative"
    >
      <Column
        position={"relative"}
        px={"m"}
        width={["100%", "490px"]}
        py={["xxl", "xxxl"]}
        gap={"l"}
        // bg={"background"}
        borderBottomRightRadius={["s", "xl"]}
        borderTopRightRadius={["s", "xl"]}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Row
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Text variant={"heading"} lineHeight={"1.3"}>
            {title}
          </Text>
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
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          <ArrowIcon size={30} color="#fb9c42" />
        </Box>

        <Text
          lineHeight={"1.5"}
          fontFamily={"ComfortaaMedium"}
          color={"primary"}
        >
          {description}
        </Text>
      </Column>
    </Column>
  );
};
