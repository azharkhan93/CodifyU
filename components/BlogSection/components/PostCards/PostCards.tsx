"use client";
import { Box, Button, CenterBox, Column, Row, Text } from "@/components";
import Image from "next/image";
import React from "react";
import { Post } from "../../BlogSection";
import { LoadingCard } from "../LoadingCard";
import { FaUserAlt } from "react-icons/fa";
import { overflow } from "styled-system";

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
      height={["auto", "485px"]}
      border={"1px solid #fb9c42"}
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
      <Column alignItems="flex-start" gap="l" px="l" py="xxxl">
        <Text
          variant="subHeading"
          width={["100%", "100%"]}
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {post.title || "Untitled Post"}
        </Text>
        <Text
          variant="body"
          color="secondary"
          width={["100%", "100%"]}
          lineHeight={"1.5"}
        >
          {post.description || "No description available."}
        </Text>

        <Row
          alignItems="center"
          gap="xl"
          flexDirection="row"
          justifyContent={"center"}
        >
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

        <CenterBox alignSelf={"flex-end"} px={"xl"}>
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
