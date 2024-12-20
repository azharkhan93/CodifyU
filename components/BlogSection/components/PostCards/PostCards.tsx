"use client";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import React from "react";
import { Post } from "../../BlogSection";
import { LoadingCard } from "../LoadingCard";
import { FaUserAlt } from "react-icons/fa";

type PostCardProps = {
  post: Post;
  loading?: boolean;
};

export const PostCards: React.FC<PostCardProps> = ({ post, loading }) => {
  if (loading) {
    return <LoadingCard />;
  }

  
  const formattedDate = new Date(post.date);
  const year = formattedDate.getFullYear();
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0"); 
  const day = formattedDate.getDate().toString().padStart(2, "0"); 
  const formattedDateStr = `${year}-${month}-${day}`;

  return (
    <Column
    border={"1px solid white"}
    borderRadius={"s"}
      width={["350px", "370px"]}
      
      overflow="hidden"
      position="relative"
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    >
      {post.file ? (
        <Image
          src={post.file}
          alt={post.title || "Post Image"}
          width={500}
          height={300}
          style={{ width: "100%", height: "250px", borderRadius: "5px" }}
        />
      ) : (
        <Box
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#f0f0f0",
          }}
        />
      )}
      <Column alignItems="flex-start" gap="l" px="m" py="xxxl" overflow={"hidden"}>
        <Text variant="subHeading">{post.title || "Untitled Post"}</Text>
        <Text variant="body" color="secondary" width={["100%", "100%"]}>
          {post.description || "No description available."}
        </Text>

        <Row alignItems="center" gap="xl" flexDirection="row" justifyContent={"center"}>
          <FaUserAlt size={19} />
          <Text variant="body" color="primary">
            {post.author || "Unknown Author"}
          </Text>
        </Row>

        <Text
        variant="body"
        color="white"
        bg={"Overlay"}
        py={"s"}
        textAlign={"center"}
        borderRadius={"xs"}
        position="absolute"
        top={20} 
        left={5}
        width="32%" 
        zIndex={1} 
      >
        {formattedDateStr}
      </Text>

      <CenterBox
      alignSelf={"flex-end"}
      >
        <Button 
        bg={"textColor"}
        variant="primary"
        borderRadius={"xs"}
        py={"s"}
        >
          Read More

        </Button>

      </CenterBox>
      </Column>
    </Column>
  );
};




