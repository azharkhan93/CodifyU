"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "../styled";
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
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      gap="xxxl"
      width="100%"
      px={["none","xxxl"]}
      py="header"
    >
      {itemsToRender.map((item, index) => {
        if (loading && item === null) {
          return <LoadingCard key={index} />;
        }

        return <PostCards key={(item as Post).id} post={item as Post} loading={false} />;
      })}
      
    </Box>
  );
};
