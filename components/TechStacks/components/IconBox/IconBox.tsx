import { Box } from "@/components";
import { IconBoxProps } from "@/types";

export const IconBox: React.FC<IconBoxProps> = ({ iconData }) => {
  const { IconComponent, size, color } = iconData;

  return (
    <Box
      py={"xl"}
      px={"xl"}
      borderRadius={"m"}
      style={{
        boxShadow:
          "0px -4px 10px 0px black, 0px 4px 10px 0px black, -4px 0px 10px 0px black, 4px 0px 10px 0px black",
      }}
    >
      <IconComponent size={size} fill={color} />
    </Box>
  );
};
