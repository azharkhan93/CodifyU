"use client";
import Image from "next/image";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "/api/getProducts";

interface Product {
  id: string;
  imageUrl: string;
  productName: string;
  productDes: string;
  iconUrls: string[];
}

export const ProjectCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Column
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
    //   border={"3px solid red"}
      alignItems={"center"}
      justifyContent={"center"}
      
    >
      {products.map((product) => (
        <Box
        
        borderTopRightRadius={"xl"}
        borderTopLeftRadius={"xl"}
        width={"97%"}
        // border={"4px solid green"}
          key={product.id}
          py={"xxxl"}
          px={["s","xl"]}
          flexDirection={["column-reverse", "row"]}
          alignItems={"center"}
      justifyContent={"center"}
          gap={"l"}
          style={{
            boxShadow:
              "0px -10px 30px rgba(82, 0, 174, 0.5), 0px 10px 30px rgba(64, 98, 187, 0.5)",
          }}
        >
          <Column gap={["xl", "xl"]} width={["100%","800px"]}
          

          >
            <Text color={"primary"} variant={["heading","footerHeading"]} fontWeight={"bold"}>
              {product.productName}
            </Text>
            <Text color={"secondary"} variant={"body"} width={["100%","600px"]}>
              {product.productDes}
            </Text>
            <Text variant={"heading"}>Technology And Tools</Text>
            {product.iconUrls.length > 0 && (
              <Row gap={"m"} alignItems={"center"} flexDirection={"row"}>
                
                {product.iconUrls.map((iconUrl, index) => (
                  <Image
                    key={index}
                    src={iconUrl}
                    alt={`Icon ${index}`}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                ))}
              </Row>
            )}
            <Box
            borderRight={"4px solid dotted green"}
            width={["60%","30%"]}
            >
            <Button
            border={"none"}
            borderLeft={"3px solid green"}
            borderRight={"3px solid black"}
            py={"m"}
            px={"s"}
            bg = {"grey"}
            >
        View Case Study
      </Button>
      </Box>
          </Column>
          <CenterBox width={["40%", "450px"]}>
            <Image
              src={product.imageUrl}
              alt={product.productName}
              width={400}
              height={400}
              style={{ borderRadius: "8px", height: "300px", width:"360px" }}
            />
          </CenterBox>
        </Box>
      ))}
      
    </Column>
  );
};
