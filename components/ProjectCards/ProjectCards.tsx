"use client";
import Image from "next/image";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types";
import { API_URL } from "@/constants";
import { FaSpinner } from "react-icons/fa";

export const ProjectCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        console.log("Fetched products:", response.data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <CenterBox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <FaSpinner className="animate-spin" size={70} color="black" />
      </CenterBox>
    );
  }

  

  return (
    <Column
      flexDirection={["column", "row"]}
      py={["xxl", "header"]}
      gap={"xxxxl"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {products.map((product, index) => (
        <Box
          borderTopRightRadius={"xl"}
          borderTopLeftRadius={"xl"}
          width={"97%"}
          key={product.productName + index} 
          py={"xxxl"}
          px={["s", "xl"]}
          flexDirection={["column-reverse", "row"]}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"l"}
          style={{
            boxShadow:
              "0px -10px 30px rgba(82, 0, 174, 0.5), 0px 10px 30px rgba(64, 98, 187, 0.5)",
          }}
        >
          <Column gap={["xl", "xl"]} width={["100%", "800px"]}>
            <Text
              color={"primary"}
              variant={["heading", "footerHeading"]}
              fontWeight={"bold"}
            >
              {product.productName}
            </Text>
            <Text
              color={"secondary"}
              variant={"body"}
              width={["100%", "600px"]}
            >
              {product.productDes}
            </Text>
            <Text variant={"heading"}>Technology And Tools</Text>
            {product.iconUrls.length > 0 && (
              <Row gap={"m"} alignItems={"center"} flexDirection={"row"}>
                {product.iconUrls.map((iconUrl, iconIndex) => (
                  <Image
                    key={`${iconUrl}-${iconIndex}`} 
                    src={iconUrl}
                    alt={`Icon ${iconIndex}`}
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%" }}
                  />
                ))}
              </Row>
            )}
            <Box width={["60%", "30%"]}>
              <Button
                border={"none"}
                borderLeft={"3px solid green"}
                borderRight={"3px solid black"}
                py={"m"}
                px={"s"}
                bg={"grey"}
              >
                View Case Study
              </Button>
            </Box>
          </Column>
          <Box width={["100%", "550px"]} position={"relative"}>
            <Image
              src={product.imageUrl}
              alt={product.productName}
              layout="responsive"
              width={400}
              height={450}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>
      ))}
    </Column>
  );
};





