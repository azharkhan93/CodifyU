"use client";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";

export const AiServices = () => {
  return (
    <CenterBox
    justifyContent={"space-between"}
    
    >
    <Row
    border={"4px solid red"}
      position="relative"
      justifyContent="center"
      alignItems="center" 
      width="100%"
      flexDirection={'row'}

      
    >
     
      <Box zIndex={1}  
      // gap={"xl"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"row"}
  
      height={"500px"}
      style={{marginLeft: "300px"}}
     
      > 
        <Image 
          src="/images/statsimg.jpg"
          alt="Generative AI Image"
          width={600}
          height={500}
        />
        <Box>

        
        <Image 
          src="/images/statsimg.jpg"
          alt="Generative AI Image"
          width={500}
          height={340}
        />
        </Box>
      </Box>

      
      <Column
      gap={"xxxl"}
      border={"4px solid green"}
      alignItems={"flex-start"}
      height={"400px"}
        bg="textColor"
        width="510px"
        position={"absolute"} 
         top="0px" 
        left="0%" 
        zIndex={2}
        py={"xxxl"}
        // style={{
        //   backgroundImage: `url('/images/bg.jpeg')`, 
        //   backgroundSize: 'cover', 
        //   backgroundRepeat: 'no-repeat', 
        //   backgroundPosition: 'center', 
        // }}
      >
        <Text variant="heading" textAlign="center">Generative AI</Text>
        <Text variant="body" textAlign="center">
          A custom underwriting system automates risk assessment, insurance
          pricing, policy administration, task management, and compliance
          control. The new software helped increase underwriter productivity.
        </Text>
        <Button variant="primary" mt="l">
          Talk To Us
        </Button>
      </Column>
    </Row>
    </CenterBox>
  );
};
