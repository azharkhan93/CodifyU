// app/api/redis/route.ts
import Redis from 'ioredis';
import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts } from '@/utils/notion'; 

const redisUrl = process.env.HOST_URL_REDIS_URL;

if (!redisUrl) {
  throw new Error("Redis URL is not defined in the environment variables.");
}


const client = new Redis(redisUrl);

client.on('error', (err) => {
  console.log('Redis Client Error', err);
});

client.connect();   

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  const allPostsCacheKey = 'blogPosts'; 

  try {
    // Check if all blog posts are available in cache
    const cachedAllPosts = await client.get(allPostsCacheKey);

    let posts: any[] = [];
    if (cachedAllPosts) {
      console.log('Returning cached data for all posts');
      posts = JSON.parse(cachedAllPosts);
    } else {
      console.log('Fetching new data from Notion for all posts');
      posts = await getBlogPosts();
      await client.set(allPostsCacheKey, JSON.stringify(posts), 'EX', 86400);  
    }

    if (slug) {
      // Check cache for specific post by slug
      const cachedPost = await client.get(`blogPost:${slug}`);

      if (cachedPost) {
        console.log('Returning cached data for slug:', slug);
        return NextResponse.json(JSON.parse(cachedPost));
      } else {
        console.log('Fetching new data from Notion for slug:', slug);

        const post = posts.find((p) => p.slug === slug);

        if (post) {
          await client.set(`blogPost:${slug}`, JSON.stringify(post), 'EX', 86400); 
          return NextResponse.json(post);
        } else {
          return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
      }
    }

    
    return NextResponse.json(posts);

  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// S4q1ti9z9fkoyquq3zie2t0ixbdmq0lxlusmagzeicuqifvnmbf