import { Column,Text } from "@/components/styled";
type InfoSectionProps = {
    title: string;
    content: React.ReactNode;
  };

export const ContactDetailsCards: React.FC<InfoSectionProps> = ({ title, content }) => (
    <Column gap={"xl"} width={"100%"}>
      <Text variant={"heading"}>{title}</Text>
      <Text variant={"body"}>{content}</Text>
    </Column>
  )