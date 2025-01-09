import { getBlogPosts } from "@/utils/notion";
import { client } from "@/utils/redisClient";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  const allPostsCacheKey = 'blogPosts'; 

  try {
   
    const cachedAllPosts = await client.get(allPostsCacheKey);

    let posts: any[] = [];
    if (cachedAllPosts) {
      console.log("Returning cached data for all posts");
      posts = JSON.parse(cachedAllPosts);
    } else {
      console.log("Fetching new data from Notion for all posts");
      posts = await getBlogPosts();

      
      await client.set(allPostsCacheKey, JSON.stringify(posts), "EX", 3600);
    }

    
    if (slug) {
    
      const cachedPost = await client.get(`blogPost:${slug}`);

      if (cachedPost) {
        console.log("Returning cached data for slug:", slug);
        return NextResponse.json(JSON.parse(cachedPost)); 
      } else {
        console.log("Fetching new data from Notion for slug:", slug);
      
        const post = posts.find((p) => p.slug === slug);

        if (post) {
          // Cache the specific post for 1 hour (3600 seconds)
          await client.set(`blogPost:${slug}`, JSON.stringify(post), "EX", 3600);
          return NextResponse.json(post); // Return the post
        } else {
          return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
      }
    }

    // If no slug is provided, return all posts
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