import { Text } from "@/components/styled";
type FeatureItemProps = {
  text: string;
}

export const FeatureItems: React.FC<FeatureItemProps> = ({ text }) => (
  <Text
    variant="body"
    color="white"
    py={"s"}
    px={"l"}
    borderRadius={"circle"}
    style={{
      borderLeft: "3px solid green",
      borderRight: "3px solid green",
    }}
  >
    {text}
  </Text>
);