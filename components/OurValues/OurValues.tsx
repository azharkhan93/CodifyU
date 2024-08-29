import { Column, Row, Text } from "../styled"
import { FiCheckCircle } from "react-icons/fi";
import { StatsCards } from "./components/StatsCards";

export const OurValues = () => {

    return (
        <><Row
            width={"100%"}
            border={"2px solid red"}
            flexDirection={"row"}
            justifyContent={"space-between"}

        >
            <Column
                alignItems={"flex-start"}
                width={"50%"}
            >
                <Text
                    variant={"heading"}
                >
                    Our Value Propostion


                </Text>
                <Text
                    variant={"body"}
                >
                    In this post-pandemic world, as continuous disruption unfolds, businesses need expert guidance and proven talent for their Digital Transformation priorities.{""}

                    As a smart and agile software development agency, we custom engineer sophisticated digital solutions, that enable our clients to stay ahead of the game, and thrive in this ever-changing digital landscape.


                </Text>

            </Column>

            <Column>
                <Row alignItems="center"
                    border={"2px solid black"}
                    justifyContent={"center"}

                    flexDirection={"row"}
                    flexWrap={"wrap"}
                    gap={"xl"}
                    width={"350px"}
                >
                    <Column
                        border={"2px solid red"}
                        width={"150px"}
                        alignItems={"flex-start"}

                        p={"l"}
                    >
                        <FiCheckCircle size={25} color={"green"} />
                        <Text>
                            Accountability
                        </Text>
                    </Column>
                    <Column
                        border={"2px solid red"}
                        alignItems={"flex-start"}
                        width={"150px"}
                        gap={"m"}

                        p={"l"}
                    >
                        <FiCheckCircle size={25} color={"green"} />
                        <Text>
                            Quality
                        </Text>
                    </Column>
                    <Column
                        border={"2px solid red"}
                        width={"150px"}
                        alignItems={"flex-start"}
                        // gap={"m"}
                        p={"l"}
                    >
                        <FiCheckCircle size={25} color={"green"} />
                        <Text>
                            Proactivity
                        </Text>
                    </Column>
                    <Column
                        alignItems={"flex-start"}
                        border={"1px solid red"}
                        width={"150px"}
                        // gap={"m"}
                        p={"l"}
                    >
                        <FiCheckCircle size={25} color={"green"} />
                        <Text>
                            Agility
                        </Text>
                    </Column>



                </Row>
            </Column>

        </Row>
        <StatsCards />
        </>
    )
}