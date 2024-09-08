"use client";
import axios from "axios";
import { Box, Column, Row, Text } from "@/components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; 
import { PageProps, Product } from "@/types";



export default function Page({ params }: PageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = params;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`/api/blogpost?slug=${slug}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <FaSpinner className="animate-spin" size={50} color="black" />
      </Box>
    );
  }

  if (!product) {
    return null
      
  }

  return (
    <Column
      mt={"xlg"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      py={"xxl"}
    >
      
      <Row
      gap={"xl"}
      alignItems={"center"}
      flexDirection={["column","row"]}
      justifyContent={"space-between"}
      width={"100%"}
      >
        <Column
        gap={"xl"}
        width={["100%","700px"]}
        >
       
        <Text variant={"footerHeading"} textAlign={["center","center"]}>
        {product.productName}
      </Text>
      <Text variant={["subHeading","heading"]} textAlign={"center"}>
        {product.productDesc}
      </Text>
      </Column>
      {product.imageUrl && (
    <Column
      width={["100%", "auto"]}
      maxWidth={["360px", "600px"]}
      position={"relative"}
      height={["330px", "400px"]}
      
      overflow={"hidden"}
    >
      <Image
        src={product.imageUrl}
        alt={product.productName}
        width={600}
        height={400}
        style={{ borderRadius: "20px" }}
      />
    </Column>
  )}
      </Row>
      {/* <Row
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"center"}
      gap={"xl"}
      width={"100%"}
      border={"4px solid green"}
      
      > */}
      
      <Text variant="body" dangerouslySetInnerHTML={{ __html: product.productDesc1 || "" }} />
      {/* </Row> */}
     
    </Column>
  );
}


