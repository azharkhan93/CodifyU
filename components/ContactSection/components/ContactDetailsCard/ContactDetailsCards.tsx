import { Column,Text } from "@/components/styled";
import { InfoSectionProps } from "@/types";


export const ContactDetailsCards: React.FC<InfoSectionProps> = ({ title, content }) => (
    <Column gap={"xl"} width={"100%"}>
      <Text variant={"heading"}>{title}</Text>
      <Text variant={"body"}>{content}</Text>
    </Column>
  )