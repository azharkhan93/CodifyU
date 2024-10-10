"use client";
import dynamic from "next/dynamic";
import { Column, ContactSection,  } from "@/components";;
import { useMemo } from "react";



export default function Home() {

   const Map = useMemo(() => dynamic(
        () => import('@/components/NewMap'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
  return (
    <>
     <Column
    px={["m", "l"]}
    >
      <ContactSection />
      <Map />
      </Column>
    </>
    
  );
}


// const position = [34.06577, 74.83166]

 // <MapContainer
      //   center={[34.06577, 74.83166]} 