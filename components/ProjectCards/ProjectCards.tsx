"use client";
import Image from "next/image";
import { Box, Button, Column, Row, Text } from "@/components";
import { useEffect } from "react";
import { ProjectCardsProps } from "@/types";
import { useRouter } from "next/navigation";

export const ProjectCards: React.FC<ProjectCardsProps> = ({ products}) => {
  const router = useRouter();

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  useEffect(() => {}, [products]);

  const handleViewMore = (slug: string) => {
    router.push(`/portfolios/${slug}`);
  };

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
          width={"100%"}
          key={product.slug + index}
          py={"xxxl"}
          flexDirection={["column-reverse", "row"]}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"l"}
        >
          <Column gap={["xxl", "xxxl"]} width={["100%", "700px"]} pl={["s", "m"]}>
            <Text variant={"heading"} fontWeight={"bold"}>
              {product.productName}
            </Text>
            <Text variant={"body"} width={["100%", "530px"]}>
              {product.productDesc ? product.productDesc : "No Description"}
            </Text>
            <Text variant={"heading"}>Technology And Tools</Text>
            {product.iconUrls.length > 0 ?(
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
            ): null}

            <Box width={["60%", "30%"]}>
              <Button
                border={"none"}
                borderLeft={"3px solid #fb9c42"}
                borderRight={"3px solid #fb9c42"}
                py={"m"}
                px={"s"}
                bg={"primary"}
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => handleViewMore(product.slug)}
              >
                View Details
              </Button>
            </Box>
          </Column>
          <Box width={["363px", "700px"]} position={"relative"}>
            <Image
              src={product.imageUrl}
              alt={product.productName}
              layout="responsive"
              width={650}
              height={450}
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>
      ))}
    </Column>
  );
};
