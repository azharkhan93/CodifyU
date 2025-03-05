import { NextResponse } from "next/server";
import { getBlogPosts } from "@/utils/notion";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  try {
    let posts: any[] = [];

    
    console.log("Fetching new data from Notion for all posts");
    posts = await getBlogPosts();

    if (slug) {

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


// import { NextResponse } from "next/server";
// import { getBlogPosts } from "@/utils/notion";
// import axios from "axios";


// const KV_REST_API_URL = "https://known-ram-54885.upstash.io";
// const KV_REST_API_READ_ONLY_TOKEN = "AtZlAAIgcDFC6TxxCmeiT4-5PW9WrvJRxXJbvqKcAHJrytOCuKP94g";
// const KV_REST_API_TOKEN = "AdZlAAIjcDFmMTAwZGFkYTc4ZjI0OGMxYjYxMzY3ZDhlZTY5MjMzMnAxMA";


// async function fetchFromUpstash(key: string, token: string) {
//   try {
//     const response = await axios.get(`${KV_REST_API_URL}/get/${key}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response.data.result) {
//       return JSON.parse(response.data.result);
//     }
//     return null;
//   } catch (error) {
//     console.error(`Failed to fetch key ${key} from Upstash:`, error);
//     return null;
//   }
// }


// async function saveToUpstash(key: string, value: any, token: string, ttl: number = 3600) {
//   try {
//     await axios.post(
//       `${KV_REST_API_URL}/set/${key}`,
//       {
//         value: JSON.stringify(value),
//         ex: ttl,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.error(`Failed to save key ${key} to Upstash:`, error);
//   }
// }


// export async function GET(request: Request) {
//   const url = new URL(request.url);
//   const slug = url.searchParams.get("slug");

//   try {
//     let posts: any[] = [];

    
//     const cachedPosts = await fetchFromUpstash("allPosts", KV_REST_API_READ_ONLY_TOKEN);
//     if (cachedPosts) {
//       console.log("Serving all posts from cache");
//       posts = cachedPosts;
//     } else {
     
//       console.log("Fetching new data from Notion for all posts");
//       posts = await getBlogPosts();
     
//       const ttlForAllPosts = 21600; 
//       await saveToUpstash("allPosts", posts, KV_REST_API_TOKEN, ttlForAllPosts);
//     }

//     if (slug) {
     
//       console.log("Trying to fetch post with slug:", slug);
      
    
//       const cachedPost = await fetchFromUpstash(`post:${slug}`, KV_REST_API_READ_ONLY_TOKEN);
//       if (cachedPost) {
//         console.log("Serving post from cache:", slug);
//         return NextResponse.json(cachedPost); 
//       } else {
//         console.log("No post found in cache for slug:", slug);
//       }

    
//       const post = posts.find((p) => p.slug === slug);
//       if (post) {
        
//         const ttlForPost = 3600; 
//         await saveToUpstash(`post:${slug}`, post, KV_REST_API_TOKEN, ttlForPost);
//         return NextResponse.json(post); 
//       } else {
//         console.log("Post not found for slug:", slug);
//         return NextResponse.json({ error: "Post not found" }, { status: 404 });
//       }
//     }

  
//     return NextResponse.json(posts); 

//   } catch (error) {
//     console.error("Failed to fetch blog posts:", error);
//     return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
//   }
// }




// S4q1ti9z9fkoyquq3zie2t0ixbdmq0lxlusmagzeicuqifvnmbf
