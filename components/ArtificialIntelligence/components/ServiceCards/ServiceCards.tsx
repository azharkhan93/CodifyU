
import { Box, Column, Row, Text } from "@/components";
import { Service4 } from "@/constants";


interface ServiceCardProps {
  service: Service4;
}

export const ServiceCards: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, icon: Icon, arrowIcon: ArrowIcon } = service;

  return (
    
      <Column
        borderRadius={"m"}
        width={"600px"}
        color="textColor"
        py={"xxxl"}
        gap={"xl"}
        position="relative"
        style={{
          backgroundImage: "url('/images/bg.jpeg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Column
          px={"m"}
          width={"490px"}
          py={"xxxl"}
          gap={"l"}
          borderBottomRightRadius={"xl"}
          borderTopRightRadius={"xl"}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <Row justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"}>
            <Text variant={"heading"}>{title}</Text>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"circle"}
              py={"m"}
              px={"m"}
              bg={"background"}
            >
              <Icon size={38} color="#fb9c42" />
            </Box>
          </Row>

          <Box
            position="absolute"
            bottom={"s"}
            right={"xl"}
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


