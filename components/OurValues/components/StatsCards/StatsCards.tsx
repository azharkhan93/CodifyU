import { CenterBox, Column, Text } from "@/components/styled"

export const StatsCards = () => {

    return (
        <CenterBox
        width={"90%"}
        flexDirection={"row"}
        // justifyContent={"space-between"}
        // px={"xlg"}
        gap={"xlg"}
        >
            <Column
            alignItems={"center"}
            borderRight={"3px dotted red"}
            width={"300px"}
            gap={"s"}
            >
            <Text
            variant={"heading"}
            >
                13+years

            </Text>
            <Text
            variant={"subHeading"}
            >
                In Business

            </Text>
            </Column>
            <Column
            alignItems={"center"}
            borderRight={"3px dotted red"}
            width={"300px"}
            gap={"s"}
            >
            <Text
            variant={"heading"}
            >
                300+

            </Text>
            <Text
            variant={"subHeading"}
            >
Global Clients

            </Text>
            </Column>
            <Column
            alignItems={"center"}
            borderRight={"3px dotted red"}
            width={"300px"}
            gap={"s"}
            >
            <Text
            variant={"heading"}
            >
                200+

            </Text>
            <Text
            variant={"subHeading"}
            >
                Digital Experts

            </Text>
            </Column>

        </CenterBox>
    )
}