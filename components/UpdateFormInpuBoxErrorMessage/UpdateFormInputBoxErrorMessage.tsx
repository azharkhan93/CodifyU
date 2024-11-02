
import { Text } from "@/components/styled"

type ErrorMessagrprops = {
    error: string;
}
export const UpdateFormInputBoxErrorMessage: React.FC<ErrorMessagrprops>= ({error}) => {

    return (

        <Text variant = {"body"} fontSize = {16} color = {"secondary"}>{error}</Text>

    )
}