import { ReviewCardProps } from "@/types";
import { Box, Text } from "../styled";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

export const ReviewsCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Box
      borderTop={"3px solid #FB9C42"}
      borderBottom={"3px solid #FB9C42"}
      bg={"lightYellow"}
      borderRadius={"lg"}
      alignItems={"center"}
      justifyContent={"start"}
      width={"350px"}
      position="relative"
      flexDirection={"column-reverse"}
    >
      <Text variant={"body"} mt={"m"} lineHeight={"1.5"}>
        {review.text}
      </Text>

      <Box
        position="absolute"
        bottom="65px"
        right="5px"
        bg={"white"}
        borderRadius={"circle"}
      >
        <MdFormatQuote size={40} fill="#FB9C42" />
      </Box>

      <Box flexDirection={"column"} gap={"m"}>
        <Box
          borderRadius={"m"}
          overflow={"hidden"}
          width={"335px"}
          height={"200px"}
          border={"2px solid white"}
        >
          <Image src={review.image} alt={review.alt} width={335} height={200} />
        </Box>
        <Box flexDirection={"column"}>
          <Text variant={"body"}>{review.name}</Text>
          <Text variant={"body"}>{review.title}</Text>
        </Box>
      </Box>
    </Box>
  );
};
