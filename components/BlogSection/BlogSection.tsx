"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box , Column, Row, Text} from "../styled";
import { PostCards } from "./components/PostCards";
import { LoadingCard } from "./components/LoadingCard";

export type Post = {
  date: string;
  author: any;
  iconUrl: string;
  placeholder: string | undefined;
  id: string;
  title: string;
  file?: string;
  description: string;
};

export const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("/api/blogdata");
        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const maxSkeletons = 3;

  const skeletons = Array(maxSkeletons).fill(null);

  const itemsToRender = loading ? skeletons : posts;

  return (
    <Box
    overflow={"hidden"}
      gap="xxxl"
      width="100%"
      py={["xxl","header"]}
    >
      <Column py={"xl"} gap={"xl"} alignItems={"center"} >
          <Text variant={"heading"} textAlign={"center"} lineHeight={"1.3"}>Latest Blogs</Text>
          <Text
            variant={"body"}
            textAlign={ "center"}
            width={["100%", "630px"]}
            lineHeight={"1.5"}
          >
            {`Explore our latest blogs to stay updated with industry trends, insights, and valuable tips. Dive into our posts for in-depth discussions and expert perspectives.`}
          </Text>
        </Column>
        <Row
        py="xxxl"
        overflow={"hidden"}
        justifyContent={"center"}
        flexDirection={["column","row"]}
        gap="xxxl"
         width="100%"
        flexWrap={"wrap"}
    
        >
      {itemsToRender.map((item, index) => {
        if (loading && item === null) {
          return <LoadingCard key={index} />;
        }

        return <PostCards key={(item as Post).id} post={item as Post} loading={false} />;
      })}
      </Row>
      
    </Box>
  );
};
