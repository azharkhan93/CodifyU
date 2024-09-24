import { Box, Column, Text } from "@/components/styled";
import { WorkCardProps } from "@/types";

export const WorkCards: React.FC<WorkCardProps> = ({
  step,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <Column
      // bg="white"
      justifyContent="center"
      py="xxl"
      width={["355px", "350px"]}
      alignItems="center"
      px={["s", "l"]}
    >
      <Column
        position="relative"
        alignItems="center"
        borderRadius="m"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
       
        <Text
          borderRadius="m"
          bg="textColor"
          textAlign="center"
          py={"m"}
          px= {'l'}
        
          variant="body"
          color="white"
          style={{
            left: "-10px",
            position: "absolute",
            top: "-28px", 
            zIndex: 10,
          }}
        >
           {step}
        </Text>

        {/* Icon box */}
        <Box
          borderRadius="m"
          position="relative"
          bg="white"
          gap="xl"
          width="80px"
          height="80px"
          alignItems="center"
          justifyContent="center"
        >
          <Icon size={35} fill="#FB9C42" />
        </Box>
      </Column>

      <Text mt="xxxl" variant="subHeading" textAlign="center">
        {title}
      </Text>
      <Text variant="body" textAlign="center" mt="m">
        {description}
      </Text>
    </Column>
  );
};

