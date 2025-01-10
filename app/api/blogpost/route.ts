import { NextResponse } from "next/server";
import { getBlogPosts } from "@/utils/notion";
import { getRedisClient } from "@/utils/redisClient";


export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  const redisClient = getRedisClient(); 
  const allPostsCacheKey = "blogPosts";

  try {
    
    const cachedAllPosts = await redisClient.get(allPostsCacheKey);

    let posts: any[] = [];
    if (cachedAllPosts) {
      console.log("Returning cached data for all posts");
      posts = JSON.parse(cachedAllPosts);
    } else {
      console.log("Fetching new data from Notion for all posts");
      posts = await getBlogPosts();
      await redisClient.set(allPostsCacheKey, JSON.stringify(posts), "EX", 86400); // Cache for 24 hours
    }

    if (slug) {
      const cachedPost = await redisClient.get(`blogPost:${slug}`);

      if (cachedPost) {
        console.log("Returning cached data for slug:", slug);
        return NextResponse.json(JSON.parse(cachedPost));
      } else {
        console.log("Fetching new data from Notion for slug:", slug);

        const post = posts.find((p) => p.slug === slug);

        if (post) {
          await redisClient.set(
            `blogPost:${slug}`,
            JSON.stringify(post),
            "EX",
            86400
          );
          return NextResponse.json(post);
        } else {
          return NextResponse.json(
            { error: "Post not found" },
            { status: 404 }
          );
        }
      }
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}


// S4q1ti9z9fkoyquq3zie2t0ixbdmq0lxlusmagzeicuqifvnmbf
