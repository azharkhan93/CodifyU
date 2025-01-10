import { NextResponse } from "next/server";
import axios from "axios";
import { getBlogPosts } from "@/utils/notion";

const apiUrl = process.env.KV_REST_API_URL; // Upstash API URL
const readOnlyToken = process.env.KV_REST_API_READ_ONLY_TOKEN; // Read-only token
const writeToken = process.env.KV_REST_API_TOKEN; 

// Helper function to set data in Redis (cache)
const setCache = async (key: string, value: any) => {
  try {
    await axios.post(
      `${apiUrl}/set`,
      { key, value: JSON.stringify(value) }, 
      {
        headers: {
          Authorization: `Bearer ${writeToken}`,
        },
      }
    );
    console.log(`Data cached for key: ${key}`);
  } catch (error) {
    console.error(`Error caching data for key: ${key}`, error);
  }
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  try {
    let posts: any[] = [];

    // Check if there's a slug and attempt to fetch it from Redis
    if (slug) {
      const cachedPost = await axios.get(`${apiUrl}/get`, {
        params: { key: slug },
        headers: {
          Authorization: `Bearer ${readOnlyToken}`,
        },
      });

      // If a cached post exists in Redis, return it
      if (cachedPost.data) {
        console.log("Returning cached post from Redis");
        return NextResponse.json(cachedPost.data);
      }
    }

    // If no cached data found, fetch fresh data from Notion
    console.log("Fetching new data from Notion for all posts");
    posts = await getBlogPosts(); // Replace with your function to get posts from Notion

    // Cache the fresh data in Redis (only if slug is not provided)
    if (!slug) {
      console.log("Caching all posts in Redis");
      await setCache('allPosts', posts); // Cache all posts (or you can cache individually per post if needed)
    }

    // If a slug is provided, find the post by slug
    if (slug) {
      const post = posts.find((p) => p.slug === slug);

      if (post) {
        // Cache the post individually for future use
        await setCache(slug, post);
        return NextResponse.json(post);
      } else {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
    }

    // Return all posts if no slug is provided
    return NextResponse.json(posts);

  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}



// S4q1ti9z9fkoyquq3zie2t0ixbdmq0lxlusmagzeicuqifvnmbf
