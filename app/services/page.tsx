import {  ArtificialIntelligence, Column, } from "@/components";
import { AiDataCards } from "@/components/ArtificialIntelligence/components/AiDataCards";


export default function Services() {
  return (
    <>
     <Column
    px={["m", "l"]}
    >
       <AiDataCards />
      
     <ArtificialIntelligence />
    
      
      </Column>
    </>
  );
}
