"use client"; 
import useSWR from "swr";
import axios from "axios";
import { Box, CenterBox, Column, Row, Text, TopBar } from "@/components";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";
import { PageProps, Product } from "@/types";


const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function Page({ params }: PageProps) {
  const { slug } = params;

  const { data: product, error, isLoading } = useSWR(
    `/api/blogpost?slug=${slug}`, 
    fetcher,
    {
      refreshInterval: 30000,
      revalidateOnFocus: true, 
    }
  );

  if (isLoading) {
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

  if (error || !product) {
    return (
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Text variant="body">Product not found</Text>
      </Box>
    );
  }

  return (
    <>
      <TopBar
        backgroundImage={"/images/bg.jpeg"}
        aboutText={"Portfolios"}
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
          // style={{ boxShadow: "0px 4px 12px rgba(128, 0, 128, 0.5)" }}
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
