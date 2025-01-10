import { NextResponse } from "next/server";
import { getBlogPosts } from "@/utils/notion";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  try {
    let posts: any[] = [];

    // Fetch data from Notion (No caching, always fresh data)
    console.log("Fetching new data from Notion for all posts");
    posts = await getBlogPosts();

    if (slug) {
      // Find the post by slug
      const post = posts.find((p) => p.slug === slug);

      if (post) {
        return NextResponse.json(post);
      } else {
        return NextResponse.json(
          { error: "Post not found" },
          { status: 404 }
        );
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
