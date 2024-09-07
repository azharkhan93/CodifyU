"use client"
import { PortfolioSection } from "@/components/PortfolioSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import { Post } from "@/types";
import { CenterBox, TopBar } from "@/components";
import { FaSpinner } from "react-icons/fa";



export default function  Portfolio() {
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
        <FaSpinner className="animate-spin" size={60} color="black" />
       
      </CenterBox>
    );
  }


  return(
  <>
  <TopBar
    backgroundImage={"/images/about.jpg"}
    aboutText={"Our PortFolio"}
    whoWeAreText={"explore Variety Of Our Project We Have Created"} />
    <PortfolioSection products={products} /></>
  );
};



// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Box } from "../styled";
// import { PostCards } from "./components/PostCards";
// import { LoadingCard } from "./components/LoadingCard";

// export type Post = {
//   id: string;
//   title: string;
//   file: string;
//   description: string;
//   description1: string;
//   createdDate: string;
//   createdBy: string;
//   status: string;
//   url: string;
//   publicUrl: string;
//   slug: string;
// };

// export const BlogSection = ({ limit }: { limit?: number }) => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const response = await axios.get("/api/blogpost");
//         console.log("Fetched posts:", response.data);
//         setPosts(response.data);
//       } catch (error) {
//         setError("Failed to fetch posts");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPosts();
//   }, []);

//   const maxSkeletons = 3;

//   const skeletons = Array(maxSkeletons).fill(null);

//   const itemsToRender = loading ? skeletons : posts.slice(0, limit);

//   return (
//     <Box
//       display="flex"
//       flexWrap="wrap"
//       flexDirection="row"
//       gap="xxxl"
//       width="100%"
//       px={["l", "xxxl"]}
//       py={["xl", "header"]}
//       bg={"secondary"}
//     >
//       {itemsToRender.map((item, index) => {
//         if (loading && item === null) {
//           return <LoadingCard key={index} />;
//         }

//         return (
//           <PostCards
//             key={(item as Post).id}
//             post={item as Post}
//             loading={false}
//           />
//         );
//       })}
//     </Box>
//   );
// };



// import { PortfolioSection, ProjectCards, TopBar } from "@/components";

// export default function  Portfolio() {

//     return(
//         <>
//         <TopBar
//         backgroundImage={"/images/about.jpg"}
//         aboutText={"Our PortFolio"}
//         whoWeAreText={"explore Variety Of Our Project We Have Created"}
//       />
//         <PortfolioSection />
       
//         </>
//     )
// }


// secret_6d4v2iHSeImUR9ee5xRKLajzJ9j3pu6WSMXpm7VcMue