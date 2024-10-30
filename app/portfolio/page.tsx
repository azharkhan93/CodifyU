"use client";
import { PortfolioSection } from "@/components/PortfolioSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { Post } from "@/types";
import { CenterBox, Column, ParallaxSection, TopBar } from "@/components";
import { FaSpinner } from "react-icons/fa";

export default function Portfolio() {
  const [products, setProducts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("API Response:", response);
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
    return (
      <CenterBox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width={"100%"}
      >
        <FaSpinner className="animate-spin" size={60} color="#fb9c42" />
      </CenterBox>
    );
  }

  return (
    <>
      <Column
       px={["xl", "l"]}
      >
        <PortfolioSection products={products} />
        <ParallaxSection
         spanText = "Inspired by Our Portfolio?"
          heading="Let’s Create Something Amazing Together!"
          buttonText="Start Collaborating"
          animationSrc="https://lottie.host/embed/d11bd612-2169-4a1e-bed7-ad75ecbf7fa5/JtCPghDIUo.json"
        />
      </Column>
    </>
  );
}
