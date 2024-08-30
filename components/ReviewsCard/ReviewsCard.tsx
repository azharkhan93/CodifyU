import { ReviewCardProps } from "@/types";
import { Box, Text } from "../styled";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

export const ReviewsCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
      border={"4px solid #454545"}
      bg={"secondary"}
      borderRadius={"lg"}
      py={"xxl"}
      boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
      width={"320px"}
      // flexDirection={"column"}
      gap={"xl"}
      position="relative"
      px={"s"}
    >
      <Box
        position="absolute"
        top="2px"
        left="10px"
        bg={"white"}
        borderRadius={"circle"}
      >
        <MdFormatQuote size={35} fill="black" />
      </Box>

      <Text variant={"body"} color={"white"} mt={"xl"}>
        {review.text}
      </Text>

      <Box
        position="absolute"
        bottom="10px"
        right="10px"
        bg={"white"}
        borderRadius={"circle"}
      >
        <MdFormatQuote size={40} fill="black" />
      </Box>

      <Box flexDirection={"row"} alignItems={"center"} gap={"m"}>
        <Box
          borderRadius={"circle"}
          overflow={"hidden"}
          width={"50px"}
          height={"50px"}
          border={"2px solid white"}
        >
          <Image src={review.image} alt={review.alt} width={55} height={55} />
        </Box>
        <Box flexDirection={"column"}>
          <Text variant={"body"} color={"white"}>
            {review.name}
          </Text>
          <Text variant={"body"} color={"white"}>
            {review.title}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
