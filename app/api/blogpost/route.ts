import { NextResponse } from "next/server";
import axios from "axios";

// Environment variables for Upstash API
const API_URL = process.env.KV_REST_API_URL; // The base URL for your Upstash instance
const READ_ONLY_TOKEN = process.env.KV_REST_API_READ_ONLY_TOKEN; // The read-only token
const WRITE_TOKEN = process.env.KV_REST_API_TOKEN; // The write token

// Function to insert blog post into Redis using SET method
async function insertBlogPost(slug: string, post: any) {
  try {
    // Set the key using the slug (e.g., 'post-first-post')
    const response = await axios.post(
      `${API_URL}/set`,
      {
        key: `post-${slug}`,
        value: JSON.stringify(post),
      },
      {
        headers: {
          Authorization: `Bearer ${WRITE_TOKEN}`,
        },
      }
    );

    console.log(`Data successfully saved for ${slug} in Redis:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error saving data for ${slug} to Redis:`, error);
    throw new Error(`Failed to insert data for ${slug} into Redis`);
  }
}

// Fetch blog posts from Upstash (using the read-only token)
export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  try {
    let post: any = null;

    if (slug) {
      // Check if the specific post exists in Redis
      console.log(`Fetching data from Upstash for post: ${slug}`);

      const response = await axios.get(`${API_URL}/get`, {
        params: { key: `post-${slug}` }, // Use the slug to dynamically generate the key
        headers: {
          Authorization: `Bearer ${READ_ONLY_TOKEN}`,
        },
      });

      if (response.data && response.data.value) {
        // If post exists, parse the value and return it
        post = JSON.parse(response.data.value);
      } else {
        // If no post is found in Redis, simulate fetching data and inserting it
        console.log(`No data found for ${slug}. Inserting sample post.`);
        const samplePost = {
          slug: slug,
          title: `Sample Blog Post: ${slug}`,
          content: `This is the content for the blog post with the slug ${slug}.`,
        };
        await insertBlogPost(slug, samplePost);
        post = samplePost;
      }

      if (post) {
        return NextResponse.json(post);
      } else {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
    }

    return NextResponse.json({ error: "Slug parameter is required" }, { status: 400 });
  } catch (error) {
    console.error("Failed to fetch or insert blog post:", error);
    return NextResponse.json({ error: "Failed to fetch or insert blog post" }, { status: 500 });
  }
}




// S4q1ti9z9fkoyquq3zie2t0ixbdmq0lxlusmagzeicuqifvnmbf
