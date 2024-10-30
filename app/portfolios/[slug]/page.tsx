"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, CenterBox, Column, Row, Text, } from "@/components";
import { FaSpinner } from "react-icons/fa";
import { PageProps, Product } from "@/types";

export default function Page({ params }: PageProps) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/blogpost?slug=${slug}`);
        setProduct(response.data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

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
        <FaSpinner className="animate-spin" size={50} color="#fb9c42" />
      </Box>
    );
  }

  if (error || !product) {
    return (
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Text variant="body">{error}</Text>
      </Box>
    );
  }

  return (
    <>
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
          flexDirection={["column", "row"]}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <CenterBox
            gap={"xxxl"}
            width={"100%"}
            flexDirection={"column"}
            py={"xxxxl"}
          >
            <Text variant={"heading"} textAlign={["start", "center"]}>
              {product.productName}
            </Text>
            <Text
            width={["100%","790px"]}
              variant={["body", "subHeading"]}
              textAlign={["start", "center"]}
            >
              {product.productDesc}
            </Text>
          </CenterBox>
          {/* {product.imageUrl && (
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
          )} */}
        </Row>
        <CenterBox
          mt={["m", "xxxl"]}
          borderRadius={"xl"}
          py={"xxxl"}
          gap={"xl"}
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
