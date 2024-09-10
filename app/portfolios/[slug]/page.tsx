"use client";
import axios from "axios";
import { Box, CenterBox, Column, Row, Text, TopBar } from "@/components";
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
    return null;
  }

  return (
    <>
      <TopBar
        backgroundImage={"/images/bg.jpeg"}
        aboutText={"PortFolios"}
        whoWeAreText={"Explore Our portfolios"}
      />
      <Column
        px={["s", "l"]}
        mt={"xlg"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        py={"xxl"}
      >
        <Row
          gap={"xl"}
          alignItems={"center"}
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Column gap={"xl"} width={["100%", "700px"]}>
            <Text variant={"footerHeading"} textAlign={["center", "center"]}>
              {product.productName}
            </Text>
            <Text variant={["body", "subHeading"]} textAlign={"center"}>
              {product.productDesc}
            </Text>
          </Column>
          {product.imageUrl && (
            <Column
              width={["100%", "900px"]}
              position="relative"
              height={["250px", "380px"]}
              overflow="hidden"
            >
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={370}
                height={300}
                style={{
                  borderRadius: "20px",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Column>
          )}
        </Row>
        <CenterBox
          mt={["m", "xxxl"]}
          borderRadius={"xl"}
          py={"xxxl"}
          gap={"xl"}
          // width={["100%", "85%"]}
          style={{ boxShadow: "0px 4px 12px rgba(128, 0, 128, 0.5)" }}
        >
          <Text
            variant="body"
            dangerouslySetInnerHTML={{ __html: product.productDesc1 || "" }}
          />
        </CenterBox>
      </Column>
    </>
  );
}
