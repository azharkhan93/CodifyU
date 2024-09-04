import { Box } from "@/components";
import { IconBoxProps } from "@/types";

export const IconBox: React.FC<IconBoxProps> = ({ iconData }) => {
  const { IconComponent, size, color } = iconData;

  return (
    <Box
      py={"xl"}
      bg={"primary"}
      px={"xl"}
      borderRadius={"m"}
      style={{
        boxShadow:
          "0px -4px 10px 0px darkblue, 0px 4px 10px 0px darkblue, -4px 0px 10px 0px black, 4px 0px 10px 0px darkblue",
      }}
    >
      <IconComponent size={size} fill={color} />
    </Box>
  );
};
