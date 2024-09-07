"use client";
import axios from "axios";
import { Box, Column, Text } from "@/components";
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
      <Text variant={"heading"} fontWeight={"bold"}>
        {product.productName}
      </Text>
      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={600}
          height={400}
          style={{ borderRadius: "8px" }}
        />
      )}
      <Text variant={"heading"} fontWeight={"bold"}>
        {product.productDesc}
      </Text>
      <Text variant="body" dangerouslySetInnerHTML={{ __html: product.productDesc1 || "" }} />
      <Text variant={"heading"}>Technology and Tools</Text>
    </Column>
  );
}


